import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';


import '../Login.css'; // Create this CSS file for login-specific styles



function Login() {

useEffect(() => {
    // Add login background class to body
    document.body.classList.add('login-bg');

    // Cleanup when component unmounts (goes to other page)
    return () => {
      document.body.classList.remove('login-bg');
    };
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@example.com' && password === 'admin123') {
      alert('Login Successful!');
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid email or password.');
    }
  };

  return (
    <>
      {/* Header with background */}
      <div className="login-container">
        <div
          className="card shadow p-4 m-5"
          style={{
            maxWidth: '400px',
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <h3 className="text-center mb-4">🚀 Welcome Back</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="e.g. admin@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-align-left">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            {errorMsg && (
              <p className="mt-3 text-center text-danger">{errorMsg}</p>
            )}
          </form>
          {/* Go to Home Button */}
        <div className="d-grid mt-3">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
        </div>
        </div>
      </div>

    </>
  );
}

export default Login;
