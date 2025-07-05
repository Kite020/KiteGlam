import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import './ForgotPasswordPage.css'; // Optional

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('✅ Password reset email sent. Check your inbox.');
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      console.error('Password reset error:', error);
      setMessage('❌ Failed to send reset email. Try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Reset Your Password</h2>
      <p>Enter your registered email below:</p>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Send Reset Link</button>
      {message && <p className="reset-msg">{message}</p>}
    </div>
  );
};

export default ForgotPasswordPage;
