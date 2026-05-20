import React, { useState, useEffect } from 'react';

export default function Recipes({ globalSearchQuery }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'BREAKFAST', 'LUNCH', 'DINNER', 'DESSERT'];

  
  useEffect(() => {
    setLoading(true);
    
    
    const url = globalSearchQuery
      ? `https://dummyjson.com/recipes/search?q=${globalSearchQuery}`
      : `https://dummyjson.com/recipes?limit=30`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching recipes:", err);
        setLoading(false);
      });
  }, [globalSearchQuery]);

  
  const filteredRecipes = activeCategory === 'ALL'
    ? recipes
    : recipes.filter(r => r.mealType?.some(type => type.toUpperCase() === activeCategory));

  return (
    <div style={{ backgroundColor: '#F5F2EB', minHeight: '100vh', fontFamily: 'serif', color: '#2B2B2B' }} className="py-5">
      <div className="container">
        
       
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-uppercase mb-2" style={{ letterSpacing: '1px' }}>
            {globalSearchQuery ? `Results for: ${globalSearchQuery}` : 'Our Recipes Catalog'}
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '500px', fontFamily: 'sans-serif', fontSize: '0.95rem' }}>
            {globalSearchQuery 
              ? `Discover how to make the best ${globalSearchQuery} with our step-by-step guides.`
              : 'Browse our collection to find your next favorite meal.'}
          </p>
        </div>

        
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn btn-sm rounded-pill px-4 py-2 fw-semibold text-uppercase transition ${activeCategory === cat ? 'bg-dark text-white' : 'btn-outline-secondary bg-white text-dark'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

      
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-dark" role="status"></div>
            <p className="mt-2 text-muted" style={{ fontFamily: 'sans-serif' }}>Fetching recipes...</p>
          </div>
        ) : (
          <div className="row g-4">
            {filteredRecipes.map(recipe => (
              <div key={recipe.id} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 rounded-5 shadow-sm p-3 bg-white">
                  <div className="position-relative">
                    <img src={recipe.image} className="card-img-top rounded-4" alt={recipe.name} style={{ height: '220px', objectFit: 'cover' }} />
                    <span className="position-absolute badge bg-white text-dark shadow-sm rounded-pill px-3 py-2 fw-bold" style={{ right: '15px', top: '15px' }}>
                      ★ {recipe.rating}
                    </span>
                  </div>
                  <div className="card-body px-1 pt-3 d-flex flex-column">
                    <span className="text-uppercase small fw-bold text-muted mb-1" style={{ fontSize: '0.7rem', fontFamily: 'sans-serif' }}>
                      {recipe.cuisine} Cuisine
                    </span>
                    <h4 className="card-title fw-bold h5 mb-3">{recipe.name}</h4>
                    
                    <div className="d-flex gap-3 mb-3 small text-secondary" style={{ fontFamily: 'sans-serif' }}>
                      <span><i className="bi bi-clock"></i> {recipe.prepTimeMinutes + recipe.cookTimeMinutes} Mins</span>
                      <span><i className="bi bi-fire"></i> {recipe.caloriesPerServing} Kcal</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                      <span className="small text-uppercase text-secondary fw-bold" style={{ fontFamily: 'sans-serif', fontSize: '0.75rem' }}>
                        {recipe.difficulty}
                      </span>
                      <button className="btn btn-outline-dark btn-sm rounded-pill px-3 text-uppercase fw-semibold" style={{ fontSize: '0.75rem' }}>
                        View Recipe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

           
            {filteredRecipes.length === 0 && (
              <div className="col-12 text-center py-5 text-muted" style={{ fontFamily: 'sans-serif' }}>
                <i className="bi bi-exclamation-circle display-4 d-block mb-3"></i>
                No recipes found matching your search. Try "Pizza", "Pasta", or "Cake"!
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}