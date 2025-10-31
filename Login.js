import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import existing styles

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate(data.user.role === 'admin' ? '/admin-dashboard' : '/customer-dashboard');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Server error. Please try again.');
    }
  };

  return (
    <div>
      <header>
        <h1>APCPDCL - Know & Pay Your Bill</h1>
        <nav>
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
        <p><a href="/forgot-password">Forgot Password?</a></p>
      </div>
    </div>
  );
}

export default Login;
