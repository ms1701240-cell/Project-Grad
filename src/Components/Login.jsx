import React from 'react';

export default function Login() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-4 card p-4 shadow-sm border-0 rounded-3">
          <h3 className="fw-bold text-center mb-4">Login</h3>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <button className="btn btn-warning w-full rounded-pill fw-semibold">Sign In</button>
        </div>
      </div>
    </div>
  );
}