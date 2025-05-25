import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'farmer',
    location: '',
    phone: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Registration failed')

      onRegister(data.user, data.token)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '4px',
    marginBottom: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  }

  const labelStyle = {
    fontWeight: '600',
    color: '#333',
    marginBottom: '4px',
    display: 'block',
  }

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
  }

  const containerStyle = {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  }

  const headingStyle = {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#22543D',
    marginBottom: '24px',
  }

  const errorStyle = {
    backgroundColor: '#FED7D7',
    color: '#C53030',
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '20px',
    textAlign: 'center',
  }

  const linkStyle = {
    color: '#2F855A',
    textDecoration: 'none',
  }

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Register</h2>
      {error && <div style={errorStyle}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label style={labelStyle} htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label style={labelStyle} htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label style={labelStyle} htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={inputStyle}
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

        <label style={labelStyle} htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          type="submit"
          disabled={loading}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={buttonStyle}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <div style={{ marginTop: '20px', textAlign: 'center', color: '#4A5568' }}>
        Already have an account?{' '}
        <a href="/login" style={linkStyle}>Login</a>
      </div>
    </div>
  )
}
