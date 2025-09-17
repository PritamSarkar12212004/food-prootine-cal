import React, { useState, useMemo, useEffect } from "react";
import { FOOD_CATEGORIES, findFoodsByCategory } from "../data/foods";

const Calculator = () => {
  const [activeCategory, setActiveCategory] = useState("vegan");
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [goals, setGoals] = useState({ calories: 2000, protein: 150, carbs: 200, fat: 70 });
  const [savedMeals, setSavedMeals] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem('meals');
    if (raw) {
      try { setSavedMeals(JSON.parse(raw)); } catch { console.warn('Invalid meals in storage'); }
    }
  }, []);

  const persistMeals = (next) => {
    setSavedMeals(next);
    localStorage.setItem('meals', JSON.stringify(next));
  };

  const [foods, setFoods] = useState([]);
  const [isLoadingFoods, setIsLoadingFoods] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setIsLoadingFoods(true);
    findFoodsByCategory(activeCategory)
      .then((list) => { if (!cancelled) setFoods(list || []); })
      .catch(() => { if (!cancelled) setFoods([]); })
      .finally(() => { if (!cancelled) setIsLoadingFoods(false); });
    return () => { cancelled = true; };
  }, [activeCategory]);

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return foods;
    const q = searchQuery.toLowerCase();
    return foods.filter((f) => f.name.toLowerCase().includes(q));
  }, [foods, searchQuery]);

  // Pagination (100 items per page)
  const [page, setPage] = useState(1);
  const pageSize = 100;
  const totalPages = Math.max(1, Math.ceil(filteredFoods.length / pageSize));
  const pagedFoods = filteredFoods.slice((page - 1) * pageSize, page * pageSize);
  useEffect(() => { setPage(1); }, [activeCategory, searchQuery]);

  const addItem = (food, grams = 100) => {
    setSelectedItems((prev) => {
      const existing = prev.find((item) => item.food.id === food.id);
      if (existing) {
        return prev.map((item) =>
          item.food.id === food.id
            ? { ...item, grams: item.grams + grams }
            : item
        );
      }
      return [...prev, { food, grams }];
    });
  };

  const updateItem = (id, grams) => {
    setSelectedItems((prev) =>
      prev.map((item) => (item.food.id === id ? { ...item, grams } : item))
    );
  };

  const removeItem = (id) => {
    setSelectedItems((prev) => prev.filter((item) => item.food.id !== id));
  };

  const clearAll = () => {
    setSelectedItems([]);
  };

  // Calculate totals
  const totals = selectedItems.reduce(
    (acc, item) => {
      const multiplier = item.grams / 100;
      acc.calories += (item.food.calories || 0) * multiplier;
      acc.protein += (item.food.protein || 0) * multiplier;
      acc.carbs += (item.food.carbs || 0) * multiplier;
      acc.fat += (item.food.fat || 0) * multiplier;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  const setPresetGoals = (preset) => {
    if (preset === 'cut') setGoals({ calories: 1800, protein: 160, carbs: 150, fat: 60 });
    else if (preset === 'maintain') setGoals({ calories: 2200, protein: 150, carbs: 230, fat: 75 });
    else if (preset === 'bulk') setGoals({ calories: 2800, protein: 180, carbs: 320, fat: 90 });
  };

  const saveCurrentMeal = () => {
    const name = window.prompt('Name this meal plan:');
    if (!name) return;
    const meal = { id: Date.now(), name, items: selectedItems };
    const next = [meal, ...savedMeals].slice(0, 20);
    persistMeals(next);
  };

  const loadMeal = (meal) => {
    setSelectedItems(meal.items || []);
  };

  const deleteMeal = (id) => {
    const next = savedMeals.filter((m) => m.id !== id);
    persistMeals(next);
  };

  return (
    <div className="calculator-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Categories</h3>
            <div className="categories">
              {FOOD_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <h3 className="card-title mt-2">Quick add</h3>
            <div className="chips">
              {foods.slice(0, 6).map((f) => (
                <button key={f.id} className="chip" onClick={() => addItem(f, 100)}>
                  {f.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Foods</h3>
            <div className="search-bar">
              <input
                className="input search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search foods..."
                aria-label="Search foods"
              />
              <div className="search-icon">🔎</div>
            </div>
            <div className="food-grid">
              {isLoadingFoods ? (
                <div className="text-sm text-muted">Loading foods...</div>
              ) : (
                pagedFoods.map((food) => (
                  <FoodCard
                    key={food.id}
                    food={food}
                    onAdd={addItem}
                    isSelected={selectedItems.some(
                      (item) => item.food.id === food.id
                    )}
                  />
                ))
              )}
            </div>
            <div className="toolbar mt-2">
              <div className="text-sm text-muted">Page {page} of {totalPages}</div>
              <div className="spacer"></div>
              <button className="btn btn-outline btn-sm" onClick={() => setPage(p => Math.max(1, p-1))} disabled={page===1}>Prev</button>
              <button className="btn btn-secondary btn-sm" onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page===totalPages}>Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Nutrition Panel */}
      <div className="nutrition-panel">
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Nutrition Summary</h3>
            <div className="toolbar mb-4">
              <span className="badge">Goals</span>
              <button className="chip" onClick={() => setPresetGoals('cut')}>🔥 Cut</button>
              <button className="chip" onClick={() => setPresetGoals('maintain')}>⚖️ Maintain</button>
              <button className="chip" onClick={() => setPresetGoals('bulk')}>💪 Bulk</button>
              <div className="spacer"></div>
              <button className="btn btn-secondary btn-sm" onClick={saveCurrentMeal}>Save</button>
              <button className="btn btn-outline btn-sm" onClick={clearAll}>Clear</button>
            </div>

            {selectedItems.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📊</div>
                <p>No items selected</p>
                <p className="text-sm text-muted">
                  Add foods to see nutrition info
                </p>
              </div>
            ) : (
              <>
                <div className="nutrition-summary mb-6">
                  <div className="nutrition-item">
                    <span className="nutrition-label">Calories</span>
                    <span className="nutrition-value">{Math.round(totals.calories)} / {goals.calories}</span>
                  </div>
                  <div className="progress"><div className="progress-bar primary" style={{width: `${Math.min(100, Math.round((totals.calories/goals.calories)*100))}%`}}></div></div>
                  <div className="nutrition-item">
                    <span className="nutrition-label">Protein</span>
                    <span className="nutrition-value">{Math.round(totals.protein)}g / {goals.protein}g</span>
                  </div>
                  <div className="progress"><div className="progress-bar success" style={{width: `${Math.min(100, Math.round((totals.protein/goals.protein)*100))}%`}}></div></div>
                  <div className="nutrition-item">
                    <span className="nutrition-label">Carbs</span>
                    <span className="nutrition-value">{Math.round(totals.carbs)}g / {goals.carbs}g</span>
                  </div>
                  <div className="progress"><div className="progress-bar warning" style={{width: `${Math.min(100, Math.round((totals.carbs/goals.carbs)*100))}%`}}></div></div>
                  <div className="nutrition-item">
                    <span className="nutrition-label">Fat</span>
                    <span className="nutrition-value">{Math.round(totals.fat)}g / {goals.fat}g</span>
                  </div>
                  <div className="progress"><div className="progress-bar error" style={{width: `${Math.min(100, Math.round((totals.fat/goals.fat)*100))}%`}}></div></div>
                </div>

                <div className="selected-items mb-6">
                  {selectedItems.map((item) => (
                    <div key={item.food.id} className="selected-item">
                      <div className="selected-item-info">
                        <div className="selected-item-name">
                          {item.food.name}
                        </div>
                        <div className="selected-item-details">
                          {item.grams}g • {Math.round(((item.food.calories || 0) * item.grams) / 100)} cal
                        </div>
                      </div>
                      <div className="selected-item-actions">
                        <input
                          type="number"
                          value={item.grams}
                          onChange={(e) =>
                            updateItem(
                              item.food.id,
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="input "
                          min="0"
                        />
                        <button
                          onClick={() => removeItem(item.food.id)}
                          className="btn btn-outline "
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="saved-meals">
                  <h4 className="card-title">Saved Meals</h4>
                  {savedMeals.length === 0 && (
                    <div className="text-sm text-muted">No saved meals yet. Click Save to store your plan.</div>
                  )}
                  {savedMeals.map((meal) => (
                    <div key={meal.id} className="saved-meal">
                      <div className="saved-meal-info">
                        <div className="saved-meal-name">{meal.name}</div>
                        <div className="saved-meal-meta text-sm text-muted">{meal.items.length} items</div>
                      </div>
                      <div className="saved-meal-actions">
                        <button className="btn btn-secondary btn-sm" onClick={() => loadMeal(meal)}>Load</button>
                        <button className="btn btn-outline btn-sm" onClick={() => deleteMeal(meal.id)}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Food Card Component
const FoodCard = ({ food, onAdd, isSelected }) => {
  const [grams, setGrams] = React.useState(100);

  return (
    <div className={`food-card ${isSelected ? "selected" : ""}`}>
      <div className="food-header">
        {food.image ? (
          <img
            src={food.image}
            alt={food.name}
            className="food-image"
            loading="lazy"
          />
        ) : (
          <div className="food-icon">🍎</div>
        )}
        <div>
          <h4 className="food-name">{food.name}</h4>
          <p className="food-calories">{food.calories} cal per 100g</p>
        </div>
      </div>

      <div className="food-nutrients">
        <div className="nutrient">
          <div className="nutrient-value">{food.protein || 0}</div>
          <div className="nutrient-label">Protein</div>
        </div>
        <div className="nutrient">
          <div className="nutrient-value">{food.carbs || 0}</div>
          <div className="nutrient-label">Carbs</div>
        </div>
        <div className="nutrient">
          <div className="nutrient-value">{food.fat || 0}</div>
          <div className="nutrient-label">Fat</div>
        </div>
        <div className="nutrient">
          <div className="nutrient-value">{food.fiber || 0}</div>
          <div className="nutrient-label">Fiber</div>
        </div>
      </div>

      <div className="food-actions">
        <input
          type="number"
          value={grams}
          onChange={(e) => setGrams(parseInt(e.target.value) || 0)}
          className="input w-10"
          min="0"
          placeholder="grams"
        />
        <button onClick={() => onAdd(food, grams)} className="btn btn-primary ">
          Add
        </button>
      </div>
    </div>
  );
};

export default Calculator;
