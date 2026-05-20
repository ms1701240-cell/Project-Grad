import React, { useState, useEffect } from 'react';

export default function Home({ setCurrentPage }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('ALL');

  
  const categories = ['ALL', 'BREAKFAST', 'LUNCH', 'DINNER', 'DESSERT', 'SNACK', 'SIDE DISH'];

  useEffect(() => {
    
    fetch('https://dummyjson.com/recipes?limit=9')
      .then(res => res.json())
      .then(data => {
       
        const sorted = data.recipes.sort((a, b) => b.rating - a.rating);
        setRecipes(sorted);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

 
  const filteredRecipes = activeCategory === 'ALL' 
    ? recipes 
    : recipes.filter(r => r.mealType?.some(type => type.toUpperCase() === activeCategory));

  return (
    <div style={{ backgroundColor: '#F5F2EB', color: '#2B2B2B', fontFamily: 'serif' }}>
      
     
      <section className="container py-4">
        <div 
          className="position-relative text-white rounded-5 overflow-hidden d-flex align-items-center justify-content-center text-center p-5 shadow-sm"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '480px'
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <h1 className="display-3 fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
              Unleash Culinary Excellence
            </h1>
            <p className="fs-5 mb-4 opacity-90" style={{ fontFamily: 'sans-serif' }}>
              Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-warning px-4 py-2 rounded-pill fw-bold text-uppercase border-0 shadow-sm" style={{ backgroundColor: '#E07A5F', color: '#fff' }}>
                Sign Up Now!
              </button>
              <button className="btn btn-outline-light px-4 py-2 rounded-pill fw-bold text-uppercase" onClick={() => setCurrentPage('recipes')}>
                Explore Recipes
              </button>
            </div>
          </div>
        </div>
      </section>

     
      <section className="container py-5">
        <div className="row g-4 align-items-center bg-white rounded-5 p-4 mx-1 shadow-sm" style={{ backgroundColor: '#D6EAF8' }}>
          <div className="col-lg-5 p-4">
            <span className="badge bg-danger rounded-pill mb-2 text-uppercase px-3 py-2" style={{ fontSize: '0.75rem', backgroundColor: '#E07A5F' }}>Explore</span>
            <h2 className="display-5 fw-bold mb-3 text-uppercase">Our Diverse Palette</h2>
            <p className="text-muted" style={{ fontFamily: 'sans-serif', fontSize: '0.95rem' }}>
              If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our catalog has something to satisfy every palate.
            </p>
            <button className="btn btn-outline-dark rounded-pill px-4 py-2 mt-2 fw-semibold btn-sm text-uppercase">See More</button>
          </div>
          <div className="col-lg-7">
            <div className="list-group list-group-flush rounded-4 overflow-hidden shadow-sm">
              {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'].map((meal, index) => (
                <div key={index} className="list-group-item d-flex justify-content-between align-items-center py-3 px-4 text-uppercase fw-bold border-bottom" style={{ letterSpacing: '1px', fontSize: '0.9rem', cursor: 'pointer' }} onClick={() => { setActiveCategory(meal.toUpperCase()); const sec = document.getElementById('journey'); sec?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <span>{meal}</span>
                  <i className="bi bi-chevron-right text-muted"></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4 px-2">
          <h2 className="fw-bold text-uppercase m-0 fs-2" style={{ letterSpacing: '1px' }}>Featured Recipes</h2>
          <div className="d-flex gap-2">
            <button className="btn btn-light rounded-circle border p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}><i className="bi bi-arrow-left"></i></button>
            <button className="btn btn-light rounded-circle border p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}><i className="bi bi-arrow-right"></i></button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5"><div className="spinner-border text-dark"></div></div>
        ) : (
          <div className="row g-4">
            {recipes.slice(0, 2).map(recipe => (
              <div key={recipe.id} className="col-md-6">
                <div className="card h-100 border-0 rounded-5 shadow-sm p-3 bg-white">
                  <img src={recipe.image} className="card-img-top rounded-4" alt={recipe.name} style={{ height: '280px', objectFit: 'cover' }} />
                  <div className="card-body px-2 pt-3 d-flex flex-column">
                    <h3 className="card-title fw-bold h4 mb-2">{recipe.name}</h3>
                    <p className="card-text text-muted small flex-grow-1 mb-3" style={{ fontFamily: 'sans-serif' }}>
                      {recipe.instructions.slice(0, 2).join(' ')}
                    </p>
                    <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                      <span className="small text-uppercase text-secondary fw-bold" style={{ fontFamily: 'sans-serif', fontSize: '0.75rem' }}>
                        {recipe.prepTimeMinutes} MIN - EASY PREP - {recipe.servings} SERVES 
                      </span>
                      <button className="btn btn-outline-dark btn-sm rounded-pill px-3 text-uppercase fw-semibold" style={{ fontSize: '0.8rem' }}>View Recipe</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      
      <section id="journey" className="container py-5">
        <div className="text-center mb-4">
          <span className="badge bg-danger rounded-pill mb-2 text-uppercase px-3 py-2" style={{ fontSize: '0.75rem', backgroundColor: '#E07A5F' }}>Recipes</span>
          <h2 className="display-5 fw-bold text-uppercase mb-2">Embark on a Journey</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '550px', fontFamily: 'sans-serif' }}>
            With our diverse collection of recipes we have something to satisfy every palate .
          </p>
        </div>

        
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn btn-sm rounded-pill px-4 py-2 fw-semibold text-uppercase transition ${activeCategory === cat ? 'bg-success text-white' : 'btn-outline-secondary bg-white text-dark'}`}
              style={activeCategory === cat ? { backgroundColor: '#81B29A', borderColor: '#81B29A' } : {}}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        
        {loading ? (
          <div className="text-center py-5"><div className="spinner-border text-dark"></div></div>
        ) : (
          <div className="row g-4">
            {filteredRecipes.slice(0, 6).map(recipe => (
              <div key={recipe.id} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 rounded-5 shadow-sm p-3 bg-white">
                  <img src={recipe.image} className="card-img-top rounded-4" alt={recipe.name} style={{ height: '220px', objectFit: 'cover' }} />
                  <div className="card-body px-1 pt-3 d-flex flex-column">
                    <h4 className="card-title fw-bold h5 mb-2">{recipe.name}</h4>
                    <p className="card-text text-muted small flex-grow-1 mb-3" style={{ fontFamily: 'sans-serif', height: '60px', overflow: 'hidden' }}>
                      {recipe.instructions[0]}
                    </p>
                    <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                      <span className="small text-uppercase text-secondary fw-bold" style={{ fontFamily: 'sans-serif', fontSize: '0.7rem' }}>
                        🕒 {recipe.prepTimeMinutes} MINS - ★ {recipe.rating}
                      </span>
                      <button className="btn btn-outline-dark btn-sm rounded-pill px-3 text-uppercase fw-semibold" style={{ fontSize: '0.75rem' }}>View Recipe</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredRecipes.length === 0 && (
              <div className="col-12 text-center py-4 text-muted" style={{ fontFamily: 'sans-serif' }}>No recipes found in this dynamic category.</div>
            )}
          </div>
        )}
      </section>

      
      <section className="container py-5 mb-4">
        <div className="row g-3 bg-white p-4 rounded-5 mx-1 shadow-sm">
          <div className="col-md-5 d-flex flex-column justify-content-center p-3">
            <span className="text-danger small fw-bold text-uppercase mb-1" style={{ color: '#E07A5F' }}>About Us</span>
            <h2 className="fw-bold display-6 text-uppercase mb-3">Our Culinary Chronicle</h2>
            <p className="text-muted small mb-4" style={{ fontFamily: 'sans-serif', lineHeight: '1.6' }}>
              Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering delightful culinary experiences. Join us in savoring the essence of every dish and the stories that unfold.
            </p>
            <button className="btn btn-outline-dark rounded-pill px-4 py-2 text-uppercase fw-bold btn-sm align-self-start">Read More</button>
          </div>
          
          <div className="col-md-3">
            <img src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600" className="img-fluid rounded-5 shadow-sm h-100" style={{ objectFit: 'cover', minHeight: '220px' }} alt="Cooking process" />
          </div>
          
          <div className="col-md-4">
            <div className="row g-3 h-100">
              <div className="col-12" style={{ height: '50%' }}>
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600" className="img-fluid rounded-5 shadow-sm w-100 h-100" style={{ objectFit: 'cover' }} alt="Fresh food" />
              </div>
              <div className="col-12" style={{ height: '50%' }}>
                <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600" className="img-fluid rounded-5 shadow-sm w-100 h-100" style={{ objectFit: 'cover' }} alt="Kitchen workspace" />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="container py-4 mb-5">
        <div className="text-center text-white rounded-5 p-5 shadow-sm" style={{ backgroundColor: '#F26444' }}>
          <span className="text-uppercase small fw-bold tracking-wide opacity-75">Sign Up</span>
          <h2 className="display-4 fw-bold text-uppercase my-3">Join The Fun<br/>Create Account Now!</h2>
          <p className="mx-auto mb-4 opacity-90" style={{ maxWidth: '500px', fontFamily: 'sans-serif' }}>
            Create an account to save your favorite recipes, share your own dishes, and enjoy a personalized cooking experience
          </p>
          <button className="btn btn-dark rounded-pill px-5 py-2 text-uppercase fw-bold shadow-sm" style={{ backgroundColor: '#1A1A1A', borderColor: '#1A1A1A' }}>Sign Up</button>
        </div>
      </section>

    </div>
  );
}