import React, { useState, useEffect } from 'react';
import back from '../img/back.png';
import Iconb1 from '../img/Iconbreak.png';
import Iconb2 from '../img/Icondinner.png';
import Iconb3 from '../img/Iconlunch.png';
import Iconb5 from '../img/Iconsnack.png';
import Iconb4 from '../img/Groupdessert.png';
import img1 from '../img/About us Image.png';
import img2 from '../img/pn1.png';
import img3 from '../img/pn2.jpg';
export default function Home({ setCurrentPage, setSelectedRecipeId }) {
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
        loading(false);
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${back})`,
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
              <button 
  className="btn btn-warning px-4 py-2 rounded-pill fw-bold text-uppercase border-0 shadow-sm"
  onClick={() => { setCurrentPage('login'); window.scrollTo(0, 0); }} // 👈 ضفنا السطر ده هنا
>
  Sign Up Now!
</button>
              <button className="btn btn-outline-light px-4 py-2 rounded-pill fw-bold text-uppercase" onClick={() => { setCurrentPage('recipes'); window.scrollTo(0, 0); }}>
                Explore Recipes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PALETTE SECTION */}
      <section className="container py-5">
        <div className="row g-4 align-items-center bg-white rounded-5 p-4 mx-1 shadow-sm" style={{ backgroundColor: '#D6EAF8' }}>
          <div className="col-lg-5 p-4">
            <span className="badge bg-danger rounded-pill mb-2 text-uppercase px-3 py-2" style={{ fontSize: '0.75rem', backgroundColor: '#E07A5F' }}>Explore</span>
            <h2 className="display-5 fw-bold mb-3 text-uppercase">Our Diverse Palette</h2>
            <p className="text-muted" style={{ fontFamily: 'sans-serif', fontSize: '0.95rem' }}>
              If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our catalog has something to satisfy every palate.
            </p>
            <button className="btn btn-outline-dark rounded-pill px-4 py-2 mt-2 fw-semibold btn-sm text-uppercase" onClick={() => { setCurrentPage('recipes'); window.scrollTo(0, 0); }}>See More</button>
          </div>
         <div className="col-lg-7">
  <div className="list-group list-group-flush rounded-4 overflow-hidden shadow-sm">
    {/* 👇 حولنا الـ Array لـ Objects عشان نربط كل اسم بالصورة بتاعته */}
    {[
      { name: 'Breakfast', icon: Iconb1 },
      { name: 'Lunch', icon: Iconb3 },
      { name: 'Dinner', icon: Iconb2 },
      { name: 'Dessert', icon: Iconb4 },
      { name: 'Snack', icon: Iconb5 }
    ].map((meal, index) => (
      <div 
        key={index} 
        className="list-group-item d-flex justify-content-between align-items-center py-3 px-4 text-uppercase fw-bold border-bottom" 
        style={{ letterSpacing: '1px', fontSize: '0.9rem', cursor: 'pointer' }} 
        onClick={() => { 
          setActiveCategory(meal.name.toUpperCase()); 
          const sec = document.getElementById('journey'); 
          sec?.scrollIntoView({ behavior: 'smooth' }); 
        }}
      >
        <span>{meal.name}</span>
        {/* 👇 هنا بنعرض الـ Icon لكل وجبة، وتقدر تظبط مقاسها بالـ width */}
        <img 
          src={meal.icon} 
          alt={meal.name} 
          style={{ width: '35px', height: '35px', objectFit: 'contain' }} 
        />
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* FEATURED RECIPES */}
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
                      {/* 2. ربط زرار الـ View Recipe في كروت الـ Featured 👇 */}
                      <button 
                        className="btn btn-outline-dark btn-sm rounded-pill px-3 text-uppercase fw-semibold" 
                        style={{ fontSize: '0.8rem' }}
                        onClick={() => {
                          setSelectedRecipeId(recipe.id);
                          setCurrentPage('recipe-details');
                          window.scrollTo(0, 0);
                        }}
                      >
                        View Recipe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* JOURNEY SECTION */}
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
                      {/* 3. ربط زرار الـ View Recipe في كروت الـ Journey الرئيسية 👇 */}
                      <button 
                        className="btn btn-outline-dark btn-sm rounded-pill px-3 text-uppercase fw-semibold" 
                        style={{ fontSize: '0.75rem' }}
                        onClick={() => {
                          setSelectedRecipeId(recipe.id);
                          setCurrentPage('recipe-details');
                          window.scrollTo(0, 0);
                        }}
                      >
                        View Recipe
                      </button>
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

      {/* CHRONICLE SECTION */}
     <section className="container py-5 mb-4">
  <div className="row g-4 bg-white p-4 rounded-5 mx-1 shadow-sm align-items-stretch">
    
    {/* الجزء الأيسر: واخد مساحة 7 من 12 ويحتوي على الكلام وصورة الطبخ العريضة */}
    <div className="col-lg-7 d-flex flex-column justify-content-between">
      {/* الـ Row العلوي: النص والزرار */}
      <div className="p-2 mb-4">
        <span className="badge rounded-pill mb-2 text-uppercase px-3 py-2" style={{ fontSize: '0.75rem', backgroundColor: '#E07A5F', color: '#fff' }}>
          About Us
        </span>
        <h2 className="fw-bold display-6 text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
          Our Culinary Chronicle
        </h2>
        <p className="text-muted small mb-4" style={{ fontFamily: 'sans-serif', lineHeight: '1.6', maxWidth: '550px' }}>
          Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering delightful culinary experiences. Join us in savoring the essence of every dish and the stories that unfold.
        </p>
        <button 
          className="btn btn-outline-dark rounded-pill px-4 py-2 text-uppercase fw-bold btn-sm"
          onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
        >
          Read More
        </button>
      </div>

      {/* الـ Row السفلي: صورتين جمب بعض (السمك والشوربة) */}
      <div className="row g-3">
        <div className="col-6">
          <img 
            src={img3} 
            className="img-fluid rounded-4 shadow-sm w-100" 
            style={{ height: '240px', objectFit: 'cover' }} 
            alt="Cooking process" 
          />
        </div>
        <div className="col-6">
          <img 
            src={img2} 
            className="img-fluid rounded-4 shadow-sm w-100" 
            style={{ height: '240px', objectFit: 'cover' }} 
            alt="Fresh food" 
          />
        </div>
      </div>
    </div>
    
    {/* الجزء الأيمن: واخد مساحة 5 من 12 وفيه صورة الشيف الطويلة واخدة الارتفاع كله */}
    <div className="col-lg-5">
      <img 
        src={img1} 
        className="img-fluid rounded-4 shadow-sm w-100 h-100" 
        style={{ objectFit: 'cover', minHeight: '400px' }} 
        alt="Kitchen workspace" 
      />
    </div>

  </div>
</section>

      {/* SIGN UP BANNER */}
      <section className="container pb-5">
        <div className="text-center text-white p-5 position-relative overflow-hidden" 
             style={{ 
               backgroundColor: '#FF6448', 
               borderRadius: '35px',
               backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
               backgroundSize: '40px 40px'
             }}>
          <div className="py-4 position-relative" style={{ zIndex: '2' }}>
            <span className="text-uppercase fw-bold d-block mb-2" style={{ fontSize: '12px', letterSpacing: '1px', opacity: '0.9' }}>SIGN UP</span>
            <h2 className="display-4 fw-black mb-3" style={{ fontWeight: '900', letterSpacing: '-1px' }}>
              JOIN THE FUN<br />CREATE ACCOUNT NOW!
            </h2>
            <p className="mx-auto mb-4 small" style={{ maxWidth: '500px', opacity: '0.85', lineHeight: '1.6' }}>
              Create an account to save your favorite recipes, share your own dishes, and enjoy a personalized cooking experience.
            </p>
           <button 
  className="btn bg-dark text-white px-4 py-2 fw-bold" 
  style={{ borderRadius: '20px', fontSize: '12px', letterSpacing: '0.5px' }}
  onClick={() => { setCurrentPage('login'); window.scrollTo(0, 0); }} 
>
  SIGN UP
</button>
          </div>
        </div>
      </section>

    </div>
  );
}