import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RecipeDetails({ recipeId, setCurrentPage }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!recipeId) {
      setCurrentPage('home');
      return;
    }

    const fetchRecipeDetails = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
        setRecipe(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching recipe details:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh', backgroundColor: '#F7F4ED' }}>
        <div className="spinner-border text-warning" role="status"></div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="container text-center py-5" style={{ minHeight: '70vh' }}>
        <h3 className="text-danger mb-3">Recipe not found or API Error!</h3>
        <button className="btn btn-dark rounded-pill px-4" onClick={() => setCurrentPage('recipes')}>Back to Recipes</button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#F7F4ED', color: '#2B2B2B', minHeight: '100vh', fontFamily: 'sans-serif', pb: '5rem' }}>
      <div className="container pt-4">
        
       
        <button 
          className="btn btn-link text-decoration-none text-dark p-0 mb-4 fw-bold d-flex align-items-center gap-2 small"
          onClick={() => setCurrentPage('recipes')}
        >
          <i className="bi bi-arrow-left"></i> BACK TO RECIPES
        </button>

        
        <div className="text-center mb-5">
          <span className="badge text-uppercase mb-2 px-3 py-2 rounded-pill" style={{ backgroundColor: '#E07A5F', color: '#FFF', fontSize: '10px', letterSpacing: '1px' }}>
            {recipe.cuisine} • {recipe.mealType?.[0] || 'Dish'}
          </span>
          <h1 className="display-4 fw-black my-2" style={{ fontWeight: '900', letterSpacing: '-1px' }}>
            {recipe.name}
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
            An exquisite culinary creation featuring premium selections, perfect for satisfying your gourmet cravings.
          </p>
          
          
          <div className="d-flex justify-content-center align-items-center gap-4 mt-4 flex-wrap text-uppercase fw-bold text-muted" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
            <div><i className="bi bi-clock me-1 text-danger"></i> Prep: {recipe.prepTimeMinutes} MIN</div>
            <div><i className="bi bi-fire me-1 text-danger"></i> Cook: {recipe.cookTimeMinutes} MIN</div>
            <div><i className="bi bi-bar-chart me-1 text-danger"></i> {recipe.difficulty}</div>
            <div><i className="bi bi-people me-1 text-danger"></i> {recipe.servings} Serves</div>
            <div><i className="bi bi-star-fill me-1 text-warning"></i> {recipe.rating} ({recipe.reviewCount} reviews)</div>
          </div>
        </div>

       
        <div className="mb-5 text-center position-relative">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="img-fluid w-100 shadow-sm" 
            style={{ borderRadius: '35px', maxHeight: '500px', objectFit: 'cover', maxWidth: '900px' }}
          />
         
          <div className="position-absolute top-0 end-0 m-4 bg-white px-3 py-2 rounded-pill shadow-sm fw-bold small text-dark">
            🔥 {recipe.caloriesPerServing} kcal / serve
          </div>
        </div>

       
        <div className="row g-5 mx-auto" style={{ maxWidth: '950px' }}>
          
         
          <div className="col-lg-5">
            <div className="bg-white p-4 border h-100 shadow-sm" style={{ borderRadius: '30px', borderColor: '#E5DFD5' }}>
              <h3 className="fw-bold mb-4" style={{ letterSpacing: '-0.5px' }}>INGREDIENTS</h3>
              <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-3 border-bottom pb-2" style={{ borderColor: '#F4F1EA' }}>
                    <span className="d-flex align-items-center justify-content-center rounded-circle fw-bold text-white" 
                          style={{ backgroundColor: '#FF6448', width: '22px', height: '22px', fontSize: '11px', minWidth: '22px', marginTop: '2px' }}>
                      ✓
                    </span>
                    <span className="small text-secondary">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

         
          <div className="col-lg-7">
            <div className="bg-white p-4 border h-100 shadow-sm" style={{ borderRadius: '30px', borderColor: '#E5DFD5' }}>
              <h3 className="fw-bold mb-4" style={{ letterSpacing: '-0.5px' }}>INSTRUCTIONS</h3>
              <ol className="list-unstyled d-flex flex-column gap-4 m-0">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-3">
                    <span className="d-flex align-items-center justify-content-center rounded-circle fw-bold" 
                          style={{ backgroundColor: '#F3EFE6', color: '#1A1A1A', width: '32px', height: '32px', minWidth: '32px', fontSize: '14px' }}>
                      {idx + 1}
                    </span>
                    <div>
                      <p className="small text-muted lh-lg m-0" style={{ textAlign: 'justify' }}>{step}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>

        
        <div className="text-center mt-5 pt-3">
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            {recipe.tags.map((tag, i) => (
              <span key={i} className="badge bg-light text-dark border px-3 py-2 rounded-pill small">
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}