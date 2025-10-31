import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import existing styles

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword && email && newPassword) {
      // Simulate immediate password change
      alert('Password changed successfully!');
      navigate('/login');
    } else {
      alert('Passwords do not match or fields are empty');
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
            <li><a href="/forgot-password">Forgot Password</a></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h1>Change Password</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email or Username:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Change Password</button>
        </form>
        <p>Remember your password? <a href="/login">Login</a></p>
      </div>
    </div>
  );
}

export default ForgotPassword;
