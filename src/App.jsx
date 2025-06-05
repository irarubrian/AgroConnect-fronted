import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Listings from './Marketplace/Listings';
import ListingDetails from './Marketplace/ListingDetails';
import Articles from './Resources/Articles';
import ArticleDetails from './Resources/ArticleDetails';
import AddCrop from './Farmer/AddCrop';
import FarmerCrops from './Farmer/FarmerCrops';
import CropDetails from './Farmer/CropDetails';
import CropDiary from './Farmer/CropDiary';
import AddListing from './Farmer/AddListing';
import AdminListings from './Admin/AdminListings';
import AdminUsers from './Admin/AdminUsers';
import Homepage from './Pages/Homepage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import AgribusinessWorkshop from './Pages/AgribusinessWorkshop';
import SupportingOrphans from './Pages/SupportingOpherns';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshHover, setRefreshHover] = useState(false);
  const [footerLinkHoverIndex, setFooterLinkHoverIndex] = useState(null);
  const [returnHomeHover, setReturnHomeHover] = useState(false);

  // Initialize authentication state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        const userDataString = localStorage.getItem('user');
        
        if (token && userDataString) {
          try {
            const userData = JSON.parse(userDataString);
            if (userData && typeof userData === 'object') {
              setUser(userData);
            } else {
              console.warn('Invalid user data format');
              clearAuthData();
            }
          } catch (parseError) {
            console.error('Failed to parse user data:', parseError);
            clearAuthData();
          }
        }
      } catch (err) {
        setError('Failed to initialize authentication');
        console.error('Initialization error:', err);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const clearAuthData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleLogin = (userData, token) => {
    try {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      setError(null);
    } catch (err) {
      setError('Failed to save authentication data');
      console.error('Login error:', err);
    }
  };

  const handleLogout = () => {
    clearAuthData();
    setError(null);
  };

  const handleRegister = (userData, token) => {
    handleLogin(userData, token); // Reuse login logic for registration
  };

  // Inline styles
  const styles = {
    loadingContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: 'white',
    },
    spinner: {
      width: 64,
      height: 64,
      border: '4px dashed #2563EB',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      borderColor: 'transparent transparent #2563EB #2563EB',
    },
    errorContainer: {
      minHeight: '100vh',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      maxWidth: 384,
      margin: '0 auto',
      textAlign: 'center',
    },
    errorTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#DC2626',
      marginBottom: 16,
    },
    errorText: {
      color: '#374151',
      marginBottom: 16,
    },
    refreshButton: {
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold',
      padding: '8px 16px',
      borderRadius: 6,
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    refreshButtonHover: {
      backgroundColor: '#374151',
    },
    appContainer: {
      minHeight: '100vh',
      backgroundColor: 'white',
      color: '#111827',
      display: 'flex',
      flexDirection: 'column',
    },
    mainContent: {
      flexGrow: 1,
      maxWidth: 1024,
      margin: '0 auto',
      padding: '32px 16px',
    },
    footer: {
      backgroundColor: '#111827',
      color: 'white',
      padding: '24px 0',
      textAlign: 'center',
    },
    footerLinksContainer: {
      marginTop: 8,
      display: 'flex',
      justifyContent: 'center',
      gap: 16,
    },
    footerLink: {
      color: '#D1D5DB',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s',
    },
    footerLinkHover: {
      color: 'white',
    },
    notFoundContainer: {
      textAlign: 'center',
      padding: 48,
      color: '#111827',
    },
    notFoundTitle: {
      fontSize: 36,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    returnHomeButton: {
      backgroundColor: 'black',
      color: 'white',
      padding: '12px 24px',
      borderRadius: 12,
      fontWeight: '500',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: 16,
      transition: 'background-color 0.3s',
      cursor: 'pointer',
    },
    returnHomeButtonHover: {
      backgroundColor: '#374151',
    },
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner} />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <div>
          <h2 style={styles.errorTitle}>Error</h2>
          <p style={styles.errorText}>{error}</p>
          <button
            style={{
              ...styles.refreshButton,
              ...(refreshHover ? styles.refreshButtonHover : {}),
            }}
            onMouseEnter={() => setRefreshHover(true)}
            onMouseLeave={() => setRefreshHover(false)}
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.appContainer}>
      <Navbar user={user} onLogout={handleLogout} />
      
      <main style={styles.mainContent}>
        <Routes>
          {/* Auth Routes */}
          <Route 
            path="/login" 
            element={user ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} 
          />
          <Route 
            path="/register" 
            element={user ? <Navigate to="/" /> : <Register onRegister={handleRegister} />} 
          />

          {/* Public Routes */}
          <Route path="/marketplace" element={<Listings user={user} />} />
          <Route path="/marketplace/:id" element={<ListingDetails user={user} />} />
          <Route path="/resources" element={<Articles />} />
          <Route path="/resources/:id" element={<ArticleDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/workshops" element={<AgribusinessWorkshop />} />
          <Route path="/Support" element={<SupportingOrphans />} />
          <Route path="/" element={<Homepage user={user} />} />

          {/* Protected Farmer Routes */}
          <Route 
            path="/farmer/crops" 
            element={user?.role === 'farmer' ? <FarmerCrops user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/farmer/crops/add" 
            element={user?.role === 'farmer' ? <AddCrop user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/farmer/crops/:id" 
            element={user?.role === 'farmer' ? <CropDetails user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/farmer/crops/:id/diary" 
            element={user?.role === 'farmer' ? <CropDiary user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/farmer/listings/add" 
            element={user?.role === 'farmer' ? <AddListing user={user} /> : <Navigate to="/login" />} 
          />

          {/* Protected Admin Routes */}
          <Route 
            path="/admin" 
            element={user?.role === 'admin' ? <AdminListings user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/admin/users" 
            element={user?.role === 'admin' ? <AdminUsers user={user} /> : <Navigate to="/login" />} 
          />

          {/* 404 Route */}
          <Route path="*" element={
            <div style={styles.notFoundContainer}>
              <h1 style={styles.notFoundTitle}>404 - Page Not Found</h1>
              <Link 
                to="/" 
                style={{
                  ...styles.returnHomeButton,
                  ...(returnHomeHover ? styles.returnHomeButtonHover : {}),
                }}
                onMouseEnter={() => setReturnHomeHover(true)}
                onMouseLeave={() => setReturnHomeHover(false)}
              >
                Return Home
              </Link>
            </div>
          } />
        </Routes>
      </main>
      
      <footer style={styles.footer}>
        <div style={{ maxWidth: 1024, margin: '0 auto', padding: '0 16px' }}>
          <p>&copy; {new Date().getFullYear()} AgroConnect. All rights reserved.</p>
          <div style={styles.footerLinksContainer}>
            {['about', 'contact', 'workshops', 'privacy'].map((path, idx) => (
              <Link 
                key={path} 
                to={`/${path}`} 
                style={{
                  ...styles.footerLink,
                  ...(footerLinkHoverIndex === idx ? styles.footerLinkHover : {}),
                }}
                onMouseEnter={() => setFooterLinkHoverIndex(idx)}
                onMouseLeave={() => setFooterLinkHoverIndex(null)}
              >
                {path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' ')}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;