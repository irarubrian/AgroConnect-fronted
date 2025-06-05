import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api';

export default function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await apiService.login(formData);

      if (!data?.token || !data?.user) {
        throw new Error('Invalid server response format');
      }

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      if (typeof onLogin === 'function') {
        onLogin(data.user, data.token);
      }

      navigate('/');
    } catch (err) {
      let errorMessage = 'Login failed. Please try again.';
      
      if (err.name === 'AbortError') {
        errorMessage = 'Request timed out. Please check your connection and try again.';
      } else if (err.message && err.message.includes('Failed to fetch')) {
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
      <h2 className="auth-title">Login</h2>
      {error && <div className="auth-error">{error}</div>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className="form-input"
            required
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
            aria-required="true"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`btn btn-primary${loading ? ' btn-disabled' : ''}`}
          aria-busy={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="auth-footer">
        <p>
          Don't have an account?{' '}
          <a href="/register" className="auth-link">Register</a>
        </p>
      </div>
    </div>
  );
}