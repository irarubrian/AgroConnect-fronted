import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Login failed')
      }

      onLogin(data.user, data.token)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

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
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
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
  )
}
