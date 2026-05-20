import React from 'react';
import logoimg from '../img/Logo Footer.png'
export default function Footer({ setCurrentPage }) {
  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#F5F2EB', fontFamily: 'serif' }} className="py-4 mt-auto">
      <div className="container">
        
        {/* ==================== السطر الرئيسي: التلات حاجات جنب بعض ==================== */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 mb-4">
          
          <img src={logoimg}  className='text-white'/>
         

          {/* 2. QUICK LINKS INLINE (في المنتصف) */}
          <div className="d-flex align-items-center gap-4 flex-wrap justify-content-center" style={{ fontFamily: 'sans-serif', fontSize: '0.85rem' }}>
            <button className="btn btn-link p-0 text-decoration-none text-light opacity-75 text-uppercase" onClick={() => setCurrentPage('home')}>HOME</button>
            <button className="btn btn-link p-0 text-decoration-none text-light opacity-75 text-uppercase" onClick={() => setCurrentPage('recipes')}>RECIPES</button>
            <button className="btn btn-link p-0 text-decoration-none text-light opacity-75 text-uppercase" onClick={() => setCurrentPage('tips')}>COOKING TIPS</button>
            <button className="btn btn-link p-0 text-decoration-none text-light opacity-75 text-uppercase" onClick={() => setCurrentPage('about')}>ABOUT US</button>
          </div>

          {/* 3. SOCIAL MEDIA ICONS (على اليمين) */}
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
              <i className="fab fa-instagram"></i>
            </button>
            <button className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
              <i className="fab fa-pinterest-p"></i>
            </button>
          </div>

        </div>

        {/* ==================== خط الحقوق السفلي ==================== */}
        <div className="border-top border-secondary pt-3 text-center" style={{ opacity: 0.4 }}>
          <p className="mb-0 small" style={{ fontFamily: 'sans-serif', fontSize: '11px' }}>
            &copy; {new Date().getFullYear()} Cooks Delight. All rights reserved. Designed with passion for food lovers.
          </p>
        </div>

      </div>
    </footer>
  );
}