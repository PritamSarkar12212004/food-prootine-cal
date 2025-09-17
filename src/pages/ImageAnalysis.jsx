import React, { useState, useRef, useEffect } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

const ImageAnalysis = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const imageElRef = useRef(null);
  const [model, setModel] = useState(null);
  const [modelStatus, setModelStatus] = useState('loading');

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        setModelStatus('loading');
        await tf.ready();
        const m = await mobilenet.load({ version: 2, alpha: 1.0 });
        if (!isMounted) return;
        setModel(m);
        setModelStatus('ready');
      } catch (e) {
        if (!isMounted) return;
        setModel(null);
        setModelStatus('error');
      }
    };
    load();
    return () => { isMounted = false; };
  }, []);

  const retryLoadModel = () => {
    setModel(null);
    setModelStatus('loading');
    tf.ready()
      .then(() => mobilenet.load({ version: 2, alpha: 1.0 }))
      .then(m => { setModel(m); setModelStatus('ready'); })
      .catch(() => { setModelStatus('error'); });
  };

  // Analyze using on-device MobileNet and simple nutrition mapping
  const analyzeFood = async (imageFile) => {
    const imageUrl = URL.createObjectURL(imageFile);
    const predictions = await model.classify(imageElRef.current, 3).catch(() => []);
    const top = predictions[0];
    const label = top?.className || 'Unknown Food';
    const confidence = Math.round((top?.probability || 0) * 100);

    // Basic nutrition lookup (very approximate placeholders)
    const lower = label.toLowerCase();
    let calories = 150, protein = 5, carbs = 20, fat = 5, description = 'Estimated nutrition based on AI label.';
    if (lower.includes('banana')) { calories = 89; protein = 1; carbs = 23; fat = 0.3; }
    else if (lower.includes('apple')) { calories = 52; protein = 0.3; carbs = 14; fat = 0.2; }
    else if (lower.includes('orange')) { calories = 47; protein = 0.9; carbs = 12; fat = 0.1; }
    else if (lower.includes('avocado')) { calories = 160; protein = 2; carbs = 9; fat = 15; }
    else if (lower.includes('salmon')) { calories = 208; protein = 22; carbs = 0; fat = 12; }
    else if (lower.includes('chicken')) { calories = 165; protein = 31; carbs = 0; fat = 3.6; }
    else if (lower.includes('egg')) { calories = 155; protein = 13; carbs = 1.1; fat = 11; }
    else if (lower.includes('broccoli')) { calories = 34; protein = 2.8; carbs = 6.6; fat = 0.4; }

    return {
      foodName: label,
      confidence,
      calories,
      protein,
      carbs,
      fat,
      description,
      imageUrl,
    };
  };

  const handleFileSelect = async (file) => {
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    setSelectedImage(file);
    setAnalysisResult(null);
  };

  // When image and model are both ready, run analysis using the actual <img>
  useEffect(() => {
    if (!selectedImage || !model) return;
    const imgEl = imageElRef.current;
    if (!imgEl) return;

    let cancelled = false;
    const run = async () => {
      setIsAnalyzing(true);
      try {
        const result = await analyzeFood(selectedImage);
        if (!cancelled) setAnalysisResult(result);
      } catch (e) {
        if (!cancelled) alert('Failed to analyze image. Please try again.');
      } finally {
        if (!cancelled) setIsAnalyzing(false);
      }
    };

    if (imgEl.complete && imgEl.naturalWidth > 0) {
      run();
    } else {
      const onload = () => run();
      imgEl.addEventListener('load', onload, { once: true });
      return () => { cancelled = true; imgEl.removeEventListener('load', onload); };
    }
  }, [selectedImage, model]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setAnalysisResult(null);
    setIsAnalyzing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="image-analysis">
      <div className="container">
        <h1 className="page-title">AI Food Analysis</h1>
        
        <div className="analysis-grid">
          {/* Upload Section */}
          <div className="upload-section">
            <h2 className="card-title mb-4">Upload Food Image</h2>
            
            <div 
              className={`upload-zone ${dragOver ? 'dragover' : ''}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="upload-large-icon">📷</div>
              <div className="upload-title">Drop image here</div>
              <div className="upload-subtitle">or click to browse</div>
              <div className="upload-hint">
                Supports JPG, PNG up to 10MB
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(e.target.files[0])}
                className="hidden"
              />
            </div>

            {selectedImage && (
              <div className="text-center">
                <img 
                  ref={imageElRef}
                  src={analysisResult?.imageUrl || URL.createObjectURL(selectedImage)} 
                  alt="Food preview" 
                  className="preview-image"
                />
                <div style={{ marginTop: '16px' }}>
                  <button className="btn btn-outline btn-sm" onClick={resetAnalysis}>
                    Upload Different Image
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Analysis Section */}
          <div className="analysis-section">
            <h2 className="card-title mb-4">Analysis Results</h2>
            
            {!selectedImage && !isAnalyzing && !analysisResult && (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <p>Ready for analysis</p>
                <p className="text-sm">Upload an image to get started</p>
                {modelStatus !== 'ready' && (
                  <div className="mt-2">
                    <div className="text-sm text-muted">AI model status: {modelStatus}</div>
                    {modelStatus === 'error' && (
                      <button className="btn btn-outline btn-sm mt-2" onClick={retryLoadModel}>Retry Load AI</button>
                    )}
                  </div>
                )}
              </div>
            )}

            {isAnalyzing && (
              <div className="loading">
                <div className="spinner"></div>
                <div>Analyzing image...</div>
                <div className="text-sm text-muted">This may take a few seconds</div>
              </div>
            )}

            {analysisResult && (
              <div className="analysis-results">
                <div className="food-id">
                  <div className="food-id-name">{analysisResult.foodName}</div>
                  <span className="confidence">
                    {analysisResult.confidence}% confident
                  </span>
                  <p className="text-muted mt-2">{analysisResult.description}</p>
                </div>

                <div className="nutrition-cards">
                  <div className="nutrition-card calories">
                    <div className="nutrition-card-value">{analysisResult.calories}</div>
                    <div className="nutrition-card-label">Calories</div>
                    <div className="nutrition-card-unit">kcal</div>
                  </div>
                  <div className="nutrition-card protein">
                    <div className="nutrition-card-value">{analysisResult.protein}</div>
                    <div className="nutrition-card-label">Protein</div>
                    <div className="nutrition-card-unit">g</div>
                  </div>
                  <div className="nutrition-card carbs">
                    <div className="nutrition-card-value">{analysisResult.carbs}</div>
                    <div className="nutrition-card-label">Carbs</div>
                    <div className="nutrition-card-unit">g</div>
                  </div>
                  <div className="nutrition-card fat">
                    <div className="nutrition-card-value">{analysisResult.fat}</div>
                    <div className="nutrition-card-label">Fat</div>
                    <div className="nutrition-card-unit">g</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnalysis;
