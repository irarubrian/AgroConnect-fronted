import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import zxcvbn from 'zxcvbn';
import '../App.css'; 

export default function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'farmer',
    location: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [passwordScore, setPasswordScore] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function getPasswordStrengthColor() {
    const colors = ['very-weak', 'weak', 'fair', 'strong', 'very-strong'];
    return colors[passwordScore] || 'neutral';
  }

  const validateForm = () => {
    if (!formData.username.trim()) {
      setError('Username is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.password) {
      setError('Password is required');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      setPasswordScore(zxcvbn(value).score);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const controller = new AbortController();
      
      const timeoutId = setTimeout(() => controller.abort(), 30000); 

      
      const response = await fetch('https://agroconnect-backend-13.onrender.com/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include',
        signal: controller.signal,
        mode: 'cors'
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Registration failed. Please try again.');
      }

      const data = await response.json();
      
      if (!data.user || !data.token) {
        throw new Error('Invalid server response format');
      }

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      if (typeof onRegister === 'function') {
        onRegister(data.user, data.token);
      }

      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      let errorMessage = 'Registration failed. Please try again.';
      
      if (err.name === 'AbortError') {
        errorMessage = 'Request timed out. The server may be waking up (free hosting can be slow). Please wait a moment and try again.';
      } else if (err.message.includes('Failed to fetch')) {
        errorMessage = 'Cannot connect to server. Please check your internet connection or if the backend is running.';
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Create Account</h2>
      {error && <div className="auth-error">⚠️ {error}</div>}
      
      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="username">
          Username <span className="required">*</span>
        </label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          className="form-input"
          required
          minLength="3"
          aria-required="true"
        />

        <label className="form-label" htmlFor="email">
          Email <span className="required">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
          aria-required="true"
        />

        <label className="form-label" htmlFor="password">
          Password <span className="required">*</span>
        </label>
        <div className="password-input-container">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
            minLength="8"
            aria-required="true"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="show-password-btn"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
        <div className={`password-strength-meter ${getPasswordStrengthColor()}`}></div>
        <small>Password strength: {['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'][passwordScore]}</small>

        <label className="form-label" htmlFor="role">
          Account Type <span className="required">*</span>
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="form-input"
          required
          aria-required="true"
        >
          <option value="farmer">Farmer</option>
          <option value="buyer">Buyer</option>
          <option value="expert">Expert</option>
        </select>

        <label className="form-label" htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label" htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
          pattern="[0-9]{10,15}"
          title="Please enter a valid phone number"
        />

        <button
          type="submit"
          disabled={loading}
          className={`btn btn-primary${loading ? ' btn-disabled' : ''}`}
          aria-busy={loading}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
      </form>

      <div className="auth-footer">
        Already have an account?{' '}
        <a href="/login" className="auth-link">Sign in</a>
      </div>
    </div>
  );
}