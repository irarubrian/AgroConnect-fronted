import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    
    // Basic validation
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Timeout safeguard (10 seconds)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch('https://agroconnect-backend-13.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Check if response exists and is JSON
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error('Invalid server response');
      }

      if (!response.ok) {
        throw new Error(data?.message || 'Login failed. Please try again.');
      }

      // Validate response structure
      if (!data?.user || !data?.token) {
        throw new Error('Invalid response format from server');
      }

      // Safely call onLogin
      if (typeof onLogin === 'function') {
        try {
          onLogin(data.user, data.token);
        } catch (loginError) {
          console.error('Login callback error:', loginError);
        }
      }

      // Safely navigate
      try {
        navigate('/');
      } catch (navigationError) {
        console.error('Navigation error:', navigationError);
        window.location.href = '/'; // Fallback
      }

    } catch (err) {
      // Handle specific error cases
      let errorMessage = 'An error occurred during login';
      
      if (err.name === 'AbortError') {
        errorMessage = 'Request timed out. Please try again.';
      } else if (err.message.includes('NetworkError')) {
        errorMessage = 'Network error. Please check your connection.';
      } else {
        errorMessage = err.message || errorMessage;
      }

      setError(errorMessage);
      
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#2f855a',
      marginBottom: '20px',
      textAlign: 'center',
    },
    label: {
      display: 'block',
      color: '#333',
      marginBottom: '8px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginBottom: '20px',
      outline: 'none',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '12px',
      borderRadius: '5px',
      border: 'none',
      fontWeight: 'bold',
      fontSize: '16px',
      backgroundColor: '#2f855a',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#276749',
    },
    disabledButton: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    error: {
      backgroundColor: '#fed7d7',
      color: '#c53030',
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '20px',
    },
    registerText: {
      textAlign: 'center',
      marginTop: '20px',
      color: '#555',
    },
    registerLink: {
      color: '#2f855a',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
            aria-required="true"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            ...styles.button,
            ...(loading ? styles.disabledButton : {}),
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          aria-busy={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div style={styles.registerText}>
        <p>
          Don't have an account?{' '}
          <a href="/register" style={styles.registerLink}>Register</a>
        </p>
      </div>
    </div>
  );
}