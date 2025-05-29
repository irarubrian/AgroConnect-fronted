import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import zxcvbn from 'zxcvbn';

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

  // Style definitions
  const containerStyle = {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#22543D',
    marginBottom: '24px',
  };

  const errorStyle = {
    backgroundColor: '#FED7D7',
    color: '#C53030',
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const labelStyle = {
    fontWeight: '600',
    color: '#333',
    marginBottom: '4px',
    display: 'block',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '4px',
    marginBottom: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const passwordInputContainer = {
    position: 'relative',
  };

  const showPasswordButton = {
    position: 'absolute',
    right: '10px',
    top: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: isHovered ? '#256D1B' : '#2F855A',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    opacity: loading ? 0.6 : 1,
    transition: 'background-color 0.3s ease',
  };

  const linkStyle = {
    color: '#2F855A',
    textDecoration: 'none',
  };

  const passwordStrengthMeter = {
    height: '4px',
    width: '100%',
    backgroundColor: getPasswordStrengthColor(),
    marginBottom: '16px',
    transition: 'background-color 0.3s ease',
  };

  function getPasswordStrengthColor() {
    const colors = ['#ff0000', '#ff5e00', '#ffbb00', '#aaff00', '#00ff00'];
    return colors[passwordScore] || '#ccc';
  }

  // Rest of your component logic remains the same...
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
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch('https://agroconnect-backend-13.onrender.com/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed. Please try again.');
      }

      const data = await response.json();
      
      if (!data.user || !data.token) {
        throw new Error('Invalid response from server');
      }

      if (typeof onRegister === 'function') {
        try {
          onRegister(data.user, data.token);
        } catch (callbackError) {
          console.error('Registration callback error:', callbackError);
        }
      }

      localStorage.setItem('authToken', data.token);
      setTimeout(() => navigate('/'), 1000);
      
    } catch (err) {
      let errorMessage = 'Registration failed. Please try again.';
      
      if (err.name === 'AbortError') {
        errorMessage = 'Request timed out. Please check your connection.';
      } else if (err.message.includes('Failed to fetch')) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else {
        errorMessage = err.message || errorMessage;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Create Account</h2>
      {error && <div style={errorStyle}>⚠️ {error}</div>}
      
      <form onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="username">
          Username <span style={{color: '#e53e3e'}}>*</span>
        </label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          style={inputStyle}
          required
          minLength="3"
          aria-required="true"
        />

        <label style={labelStyle} htmlFor="email">
          Email <span style={{color: '#e53e3e'}}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
          aria-required="true"
        />

        <label style={labelStyle} htmlFor="password">
          Password <span style={{color: '#e53e3e'}}>*</span>
        </label>
        <div style={passwordInputContainer}>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
            minLength="8"
            aria-required="true"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={showPasswordButton}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
        <div style={passwordStrengthMeter} />
        <small>Password strength: {['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'][passwordScore]}</small>

        <label style={labelStyle} htmlFor="role">
          Account Type <span style={{color: '#e53e3e'}}>*</span>
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={inputStyle}
          required
          aria-required="true"
        >
          <option value="farmer">Farmer</option>
          <option value="buyer">Buyer</option>
          <option value="expert">Expert</option>
        </select>

        <label style={labelStyle} htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle} htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          pattern="[0-9]{10,15}"
          title="Please enter a valid phone number"
        />

        <button
          type="submit"
          disabled={loading}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={buttonStyle}
          aria-busy={loading}
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
      </form>

      <div style={{ marginTop: '20px', textAlign: 'center', color: '#4A5568' }}>
        Already have an account?{' '}
        <a href="/login" style={linkStyle}>Sign in</a>
      </div>
    </div>
  );
}