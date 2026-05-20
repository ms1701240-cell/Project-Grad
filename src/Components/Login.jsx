import React from 'react';

import loginBg from '../img/pnlogin.jpg'; 

export default function Login() {
  return (
    <div 
      className="d-flex justify-content-center align-items-center min-vh-100 px-3" 
      style={{ backgroundColor: '#F7F4ED', fontFamily: 'sans-serif' }}
    >
     
      <div 
        className="card w-100 border-0 overflow-hidden" 
        style={{ 
          maxWidth: '950px', 
          borderRadius: '30px', 
          backgroundColor: '#F7F4ED',
          boxShadow: 'none'
        }}
      >
        <div className="row g-0 align-items-stretch" style={{ minHeight: '550px' }}>
          
          
          <div className="col-md-6 d-none d-md-block position-relative">
            <img 
              src={loginBg} 
              alt="Login Background" 
              className="w-100 h-100" 
              style={{ objectFit: 'cover', minHeight: '100%' }}
            />
           
            <div 
              className="position-absolute top-0 start-0 w-100 h-100" 
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
            ></div>
          </div>

          <div className="col-10 col-md-6 mx-auto d-flex align-items-center">
            <div 
              className="card-body bg-white p-4 p-sm-5 d-flex flex-column justify-content-center border" 
              style={{ 
                borderRadius: '25px', 
                borderColor: '#E5DFD5',
                minHeight: '100%'
              }}
            >
             
              <div className="text-center text-md-start mb-4">
                <h1 className="fw-black text-dark mb-3" style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-1px' }}>
                  LOG IN
                </h1>
                <p className="text-muted small lh-base" style={{ maxWidth: '340px', fontSize: '13px' }}>
                  Welcome back to your kitchen. Log in to access your saved recipes, favorite dishes, and personal cooking space.
                </p>
              </div>

              
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label className="form-label small fw-bold text-secondary mb-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
                    USERNAME
                  </label>
                  <input 
                    type="text" 
                    className="form-control px-3 py-2" 
                    style={{ borderRadius: '12px', backgroundColor: '#F7F4ED', border: '1px solid #E5DFD5' }}
                    required 
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-bold text-secondary mb-1" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
                    PASSWORD
                  </label>
                  <input 
                    type="password" 
                    className="form-control px-3 py-2" 
                    style={{ borderRadius: '12px', backgroundColor: '#F7F4ED', border: '1px solid #E5DFD5' }}
                    required 
                  />
                </div>

                
                <button 
                  type="submit" 
                  className="btn w-100 fw-bold text-dark py-2 mb-4" 
                  style={{ 
                    backgroundColor: '#E9963F', 
                    borderRadius: '12px', 
                    fontSize: '13px',
                    letterSpacing: '0.5px'
                  }}
                >
                  SIGN UP NOW!
                </button>
              </form>

              
              <div className="text-center border-top pt-3">
                <span className="text-muted fw-bold" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
                  DON'T HAVE AN ACCOUNT?{' '}
                  <a href="#/register" className="text-warning text-decoration-none fw-bold" style={{ color: '#E9963F' }}>
                    CREATE ONE NOW
                  </a>
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}