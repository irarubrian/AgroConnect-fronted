// src/services/api.js
const API_BASE_URL =
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5001'
    : 'https://agroconnect-backend-13.onrender.com';

export const apiService = {
  async makeRequest(url, method, body = null, requiresAuth = false) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (requiresAuth) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    const config = {
      method,
      headers,
      credentials: 'include', // For cookies if using them
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(`${API_BASE_URL}${url}`, config);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Request failed');
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  },

  login(credentials) {
    return this.makeRequest('/login', 'POST', credentials);
  },

  register(userData) {
    return this.makeRequest('/register', 'POST', userData);
  }
};