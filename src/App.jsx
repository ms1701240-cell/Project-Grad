import React, { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Footer from './Components/Footer';
import logoimg from './img/Logo Nav Bar.png';
import Recipes from './Components/Recipes'; 
import CookingTips from './Components/CookingTips';
import RecipeDetails from './Components/RecipeDetails'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
 
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (globalSearchQuery.trim() !== '') {
      setCurrentPage('recipes');
      setIsSearchOpen(false);
    }
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); 
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light" style={{ overflowX: 'hidden' }}>
      
     
      <nav className="py-3 sticky-top bg-transparent" style={{ zIndex: 1040 }}>
        <div className="container">
          <div 
            className="navbar navbar-expand-lg navbar-light px-4 py-2 position-relative"
            style={{ 
              backgroundColor: '#F3EFE6', 
              borderRadius: '50px',      
              border: '1px solid rgba(0,0,0,0.05)',
              minHeight: '62px'
            }}
          >
            
            {isSearchOpen ? (
              <form 
                onSubmit={handleSearchSubmit} 
                className="position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center px-4"
                style={{ backgroundColor: '#F3EFE6', borderRadius: '50px', zIndex: 10 }}
              >
                <div className="input-group rounded-pill overflow-hidden bg-white px-3 py-1 border border-secondary-subtle w-100 shadow-sm">
                  <span className="input-group-text bg-transparent border-0 p-0 me-2 text-muted">
                    <i className="bi bi-search"></i>
                  </span>
                  <input 
                    type="text" 
                    className="form-control border-0 bg-transparent p-1 small" 
                    placeholder="Type recipe name & press Enter..."
                    style={{ boxShadow: 'none', fontSize: '0.85rem', fontFamily: 'sans-serif' }}
                    value={globalSearchQuery}
                    onChange={(e) => setGlobalSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button 
                    type="button" 
                    className="btn-close ms-2 small" 
                    style={{ fontSize: '0.65rem', marginTop: '6px' }}
                    onClick={() => { setIsSearchOpen(false); setGlobalSearchQuery(''); }}
                  ></button>
                </div>
              </form>
            ) : null}

            {!isSearchOpen && (
              <button 
                className="navbar-brand btn btn-link p-0 border-0 d-flex align-items-center" 
                onClick={() => { navigateTo('home'); setIsSearchOpen(false); }}
              >
                <img src={logoimg} alt="Cooks Delight Logo" style={{ height: '42px', objectFit: 'contain' }} />
              </button>
            )}
            
            {!isSearchOpen && (
              <button 
                className="btn border-0 d-lg-none ms-auto d-flex align-items-center justify-content-center rounded-circle" 
                style={{ 
                  backgroundColor: '#EAE5D9',
                  width: '40px', 
                  height: '40px',
                  padding: 0 
                }}
                onClick={() => setIsMenuOpen(true)}
              >
                <i className="bi bi-list fs-4" style={{ color: '#2B2B2B', lineHeight: 1 }}></i>
              </button>
            )}

            <div className="collapse navbar-collapse d-none d-lg-flex" id="cooksNavbar">
              <ul className="navbar-nav mx-auto gap-4">
                <li className="nav-item">
                  <button 
                    className="btn btn-link nav-link fw-bold text-uppercase p-0 border-0 fs-7" 
                    style={{ 
                      color: currentPage === 'home' ? '#1A1A1A' : '#8A857C',
                      borderBottom: currentPage === 'home' ? '2px solid #E07A5F' : '2px solid transparent',
                      borderRadius: 0, fontSize: '0.8rem', letterSpacing: '1px'
                    }}
                    onClick={() => navigateTo('home')}
                  >Home</button>
                </li>
                <li className="nav-item">
                  <button 
                    className="btn btn-link nav-link fw-bold text-uppercase p-0 border-0 fs-7" 
                    style={{ 
                      color: currentPage === 'recipes' ? '#1A1A1A' : '#8A857C',
                      borderBottom: currentPage === 'recipes' ? '2px solid #E07A5F' : '2px solid transparent',
                      borderRadius: 0, fontSize: '0.8rem', letterSpacing: '1px'
                    }}
                    onClick={() => navigateTo('recipes')}
                  >Recipes</button>
                </li>
                <li className="nav-item">
                  <button 
                    className="btn btn-link nav-link fw-bold text-uppercase p-0 border-0 fs-7" 
                    style={{ 
                      color: currentPage === 'tips' ? '#1A1A1A' : '#8A857C',
                      borderBottom: currentPage === 'tips' ? '2px solid #E07A5F' : '2px solid transparent',
                      borderRadius: 0, fontSize: '0.8rem', letterSpacing: '1px'
                    }}
                    onClick={() => navigateTo('tips')}
                  >Cooking Tips</button>
                </li>
                <li className="nav-item">
                  <button 
                    className="btn btn-link nav-link fw-bold text-uppercase p-0 border-0 fs-7" 
                    style={{ 
                      color: currentPage === 'about' ? '#1A1A1A' : '#8A857C',
                      borderBottom: currentPage === 'about' ? '2px solid #E07A5F' : '2px solid transparent',
                      borderRadius: 0, fontSize: '0.8rem', letterSpacing: '1px'
                    }}
                    onClick={() => navigateTo('about')}
                  >About Us</button>
                </li>
              </ul>
              
              <div className="d-flex align-items-center ms-lg-3">
                <button 
                  className="btn d-flex align-items-center justify-content-center p-0 rounded-circle border-0"
                  style={{ width: '40px', height: '40px', backgroundColor: '#EAE5D9', color: '#1A1A1A' }}
                  onClick={() => setIsSearchOpen(true)}
                >
                  <i className="bi bi-search fs-6"></i>
                </button>
                <button 
                  className="btn btn-link text-decoration-none text-uppercase fw-bold ms-3 p-0 small text-muted"
                  style={{ fontSize: '0.75rem', letterSpacing: '1px' }}
                  onClick={() => navigateTo('login')}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column p-4"
          style={{ backgroundColor: '#262522', zIndex: 1050, fontFamily: 'sans-serif' }}
        >
          <div className="d-flex justify-content-between align-items-center mb-5">
            <img src={logoimg} alt="Logo" style={{ height: '35px', filter: 'brightness(0) invert(1)' }} />
            <button 
              className="btn p-0 border-0 rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '36px', height: '36px', backgroundColor: 'rgba(255,255,255,0.08)', color: '#fff' }}
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="bi bi-x-lg small"></i>
            </button>
          </div>

          <div className="d-flex flex-column gap-2 text-start mt-2">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Recipes', id: 'recipes' },
              { name: 'Cooking Tips', id: 'tips' },
              { name: 'About Us', id: 'about' }
            ].map((link) => (
              <div key={link.id} className="border-bottom border-secondary-subtle border-opacity-10 py-3">
                <button
                  className="btn btn-link p-0 text-decoration-none text-uppercase fw-bold w-100 text-start"
                  style={{ color: currentPage === link.id ? '#E07A5F' : '#FFF', fontSize: '1.05rem', letterSpacing: '1.5px' }}
                  onClick={() => navigateTo(link.id)}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5 d-flex align-items-center gap-3">
            <button 
              className="btn rounded-circle d-flex align-items-center justify-content-center border-0"
              style={{ width: '45px', height: '45px', backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFF' }}
              onClick={() => { setIsMenuOpen(false); setIsSearchOpen(true); }}
            >
              <i className="bi bi-search fs-6"></i>
            </button>
            <button 
              className="btn fw-bold text-uppercase flex-grow-1 py-2 rounded-pill"
              style={{ backgroundColor: '#E07A5F', color: '#FFF', fontSize: '0.85rem', letterSpacing: '1px' }}
              onClick={() => navigateTo('login')}
            >
              Sign Up Now!
            </button>
          </div>

          <div className="mt-auto d-flex justify-content-center gap-4 py-3 text-white-50">
            <a href="#facebook" className="text-reset fs-5"><i className="bi bi-facebook"></i></a>
            <a href="#instagram" className="text-reset fs-5"><i className="bi bi-instagram"></i></a>
            <a href="#youtube" className="text-reset fs-5"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
      )}

     
      <main className="flex-grow-1">
        {currentPage === 'home' && (
          <Home setCurrentPage={setCurrentPage} setSelectedRecipeId={setSelectedRecipeId} />
        )}
        {currentPage === 'about' && (
          <About setCurrentPage={setCurrentPage} setSelectedRecipeId={setSelectedRecipeId} />
        )}
        {currentPage === 'login' && <Login />}
        {currentPage === 'recipes' && (
          <Recipes globalSearchQuery={globalSearchQuery} setCurrentPage={setCurrentPage} setSelectedRecipeId={setSelectedRecipeId} />
        )}
        {currentPage === 'tips' && <CookingTips />}
        
        
        {currentPage === 'recipe-details' && (
          <RecipeDetails recipeId={selectedRecipeId} setCurrentPage={setCurrentPage} />
        )}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}