import React from 'react';

export default function Footer({ setCurrentPage }) {
  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#F5F2EB', fontFamily: 'serif' }} className="py-5 mt-auto">
      <div className="container">
        <div className="row g-4 justify-content-between">
          
          
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold text-uppercase text-warning mb-3" style={{ letterSpacing: '1px' }}>
              Cooks Delight
            </h3>
            <p className="small opacity-75" style={{ fontFamily: 'sans-serif', lineHeight: '1.6' }}>
              Your go-to culinary space for exceptional recipes, clean editorial storytelling, and specialized cooking techniques to level up your kitchen game.
            </p>
           
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-facebook"></i>
              </button>
              <button className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-instagram"></i>
              </button>
              <button className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-pinterest"></i>
              </button>
            </div>
          </div>

         
          <div className="col-lg-3 col-6 md-3">
            <h5 className="text-uppercase fw-bold mb-3 small" style={{ letterSpacing: '1px', color: '#E07A5F' }}>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontFamily: 'sans-serif', fontSize: '0.9rem' }}>
              <li>
                <button className="btn btn-link p-0 text-decoration-none text-light opacity-75 text-uppercase" onClick={() => setCurrentPage('home')}>Home</button>
              </li>
              <li>
                <button className="btn btn-link p-0 text-decoration-none text-light opacity-75 text-uppercase" onClick={() => setCurrentPage('recipes')}>Recipes</button>
              </li>
              <li>
                <button className="btn btn-link p-0 text-decoration-none text-light opacity-75 text-uppercase" onClick={() => setCurrentPage('tips')}>Cooking Tips</button>
              </li>
              <li>
                <button className="btn btn-link p-0 text-decoration-none text-light opacity-75 text-uppercase" onClick={() => setCurrentPage('about')}>About Us</button>
              </li>
            </ul>
          </div>

        
          <div className="col-lg-4 col-md-6">
            <h5 className="text-uppercase fw-bold mb-3 small" style={{ letterSpacing: '1px', color: '#E07A5F' }}>Newsletter</h5>
            <p className="small opacity-75 mb-3" style={{ fontFamily: 'sans-serif' }}>
              Subscribe to receive weekly handcrafted recipes directly in your inbox!
            </p>
            <div className="input-group mb-2">
              <input 
                type="email" 
                className="form-control bg-transparent text-white border-secondary small" 
                placeholder="Your Email Address" 
                style={{ fontFamily: 'sans-serif', borderColor: '#444' }}
              />
              <button className="btn btn-warning text-uppercase fw-bold px-3" style={{ backgroundColor: '#E07A5F', borderColor: '#E07A5F', color: '#fff', fontSize: '0.85rem' }}>
                Subscribe
              </button>
            </div>
          </div>

        </div>

      
        <div className="border-top border-secondary mt-5 pt-4 text-center">
          <p className="mb-0 small opacity-50" style={{ fontFamily: 'sans-serif' }}>
            &copy; {new Date().getFullYear()} Cooks Delight. All rights reserved. Designed with passion for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}