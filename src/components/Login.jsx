import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login.css';

const loginUser = async ({ email, password }) => {
  const response = await axios.post(
    'https://reqres.in/api/login',
    { email, password },
    {
      headers: {
        'x-api-key': 'reqres-free-v1',
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('login-bg');
    return () => {
      document.body.classList.remove('login-bg');
    };
  }, []);

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      alert('Login Successful!');
      console.log('Token:', data.token);
      navigate('/dashboard');
    },
    onError: (error) => {
      setErrorMsg('Invalid email or password.');
      console.error('Login error:', error.response?.data || error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    mutation.mutate({ email, password });
  };

  return (
    <div className="login-container">
      <div
        className="card shadow p-4 m-5"
        style={{
          maxWidth: '400px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <h3 className="text-center mb-4">
          Welcome back. Fill up below form to continue
          <br />
          <small className="text-muted">
            Test Details: email: eve.holt@reqres.in &nbsp; password: cityslicka
          </small>
        </h3>

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
              placeholder="e.g. eve.holt@reqres.in"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
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
            <button type="submit" className="btn btn-primary" disabled={mutation.isLoading}>
              {mutation.isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
          {errorMsg && (
            <p className="mt-3 text-center text-danger">{errorMsg}</p>
          )}
        </form>

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
  );
}

export default Login;
