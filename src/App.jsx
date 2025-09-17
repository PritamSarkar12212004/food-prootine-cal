import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Navigation from './components/Navigation';
import Calculator from './pages/Calculator';
import ImageAnalysis from './pages/ImageAnalysis';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/image-analysis" element={<ImageAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
