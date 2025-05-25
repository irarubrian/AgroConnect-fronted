import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaShoppingBasket, FaBook, FaSignOutAlt, FaTachometerAlt, FaUsers, FaSeedling, FaHome, FaInfoCircle, FaEnvelope, FaChalkboardTeacher, FaHeart } from 'react-icons/fa';

const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Styles
  const styles = {
    nav: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '64px',
      alignItems: 'center'
    },
    logo: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'white',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center'
    },
    desktopNav: {
      display: 'none',
      marginLeft: '32px',
      gap: '24px'
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px',
      paddingTop: '4px',
      borderBottom: '2px solid transparent',
      fontSize: '14px',
      fontWeight: 500,
      textDecoration: 'none',
      color: '#d1d5db',
      transition: 'all 0.3s ease'
    },
    navItemActive: {
      borderBottom: '2px solid white',
      color: 'white'
    },
    navItemHover: {
      color: 'white',
      borderBottom: '2px solid #9ca3af'
    },
    authContainer: {
      display: 'none',
      alignItems: 'center',
      gap: '16px'
    },
    welcomeText: {
      fontSize: '14px',
      color: '#d1d5db'
    },
    logoutButton: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      fontWeight: 500,
      color: '#d1d5db',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    logoutButtonHover: {
      color: 'white'
    },
    loginLink: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      fontWeight: 500,
      color: '#d1d5db',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    registerButton: {
      fontSize: '14px',
      fontWeight: 500,
      color: 'black',
      backgroundColor: 'white',
      padding: '6px 12px',
      borderRadius: '4px',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease'
    },
    registerButtonHover: {
      backgroundColor: '#e5e7eb'
    },
    mobileMenuButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px',
      borderRadius: '4px',
      color: '#d1d5db',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    mobileMenuButtonHover: {
      color: 'white',
      backgroundColor: 'rgba(31, 41, 55, 0.8)'
    },
    mobileMenu: {
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },
    mobileMenuContainer: {
      padding: '8px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    mobileNavItem: {
      display: 'block',
      padding: '8px 12px',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 500,
      textDecoration: 'none',
      color: '#d1d5db',
      transition: 'all 0.3s ease'
    },
    mobileNavItemActive: {
      backgroundColor: 'rgba(31, 41, 55, 0.8)',
      color: 'white'
    },
    mobileNavItemHover: {
      backgroundColor: 'rgba(31, 41, 55, 0.8)',
      color: 'white'
    },
    mobileAuthContainer: {
      padding: '12px 16px',
      borderTop: '1px solid rgba(31, 41, 55, 0.8)'
    },
    mobileWelcome: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#d1d5db'
    },
    mobileLoginButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px 16px',
      border: '1px solid transparent',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 500,
      color: 'black',
      backgroundColor: 'white',
      textDecoration: 'none',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      transition: 'background-color 0.3s ease'
    },
    mobileLoginButtonHover: {
      backgroundColor: '#e5e7eb'
    },
    mobileRegisterButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px 16px',
      border: '1px solid #4b5563',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 500,
      color: 'white',
      backgroundColor: 'rgba(31, 41, 55, 0.8)',
      textDecoration: 'none',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      transition: 'background-color 0.3s ease'
    },
    mobileRegisterButtonHover: {
      backgroundColor: 'rgba(55, 65, 81, 0.8)'
    },
    iconMargin: {
      marginRight: '8px'
    },
    flexCenter: {
      display: 'flex',
      alignItems: 'center'
    },
    spaceY: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    spaceBetween: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  };

  // Media query for desktop
  const desktopStyles = window.innerWidth >= 768 ? { display: 'flex' } : { display: 'none' };
  const mobileStyles = window.innerWidth < 768 ? { display: 'flex' } : { display: 'none' };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.flexContainer}>
          {/* Logo */}
          <div style={styles.flexCenter}>
            <Link to="/" style={{ ...styles.logo, flexShrink: 0 }}>
              AgroConnect
            </Link>
            
            {/* Desktop Navigation */}
            <div style={{ ...styles.desktopNav, ...desktopStyles }}>
              <NavLink 
                to="/" 
                end
                style={({ isActive }) => ({
                  ...styles.navItem,
                  ...(isActive ? styles.navItemActive : {}),
                  ':hover': styles.navItemHover
                })}
              >
                <FaHome style={styles.iconMargin} /> Home
              </NavLink>
              
              <NavLink 
                to="/about" 
                style={({ isActive }) => ({
                  ...styles.navItem,
                  ...(isActive ? styles.navItemActive : {}),
                  ':hover': styles.navItemHover
                })}
              >
                <FaInfoCircle style={styles.iconMargin} /> About
              </NavLink>
              
              <NavLink 
                to="/marketplace" 
                style={({ isActive }) => ({
                  ...styles.navItem,
                  ...(isActive ? styles.navItemActive : {}),
                  ':hover': styles.navItemHover
                })}
              >
                <FaShoppingBasket style={styles.iconMargin} /> Marketplace
              </NavLink>
              
              <NavLink 
                to="/resources" 
                style={({ isActive }) => ({
                  ...styles.navItem,
                  ...(isActive ? styles.navItemActive : {}),
                  ':hover': styles.navItemHover
                })}
              >
                <FaBook style={styles.iconMargin} /> Resources
              </NavLink>
              
              <NavLink 
                to="/workshops" 
                style={({ isActive }) => ({
                  ...styles.navItem,
                  ...(isActive ? styles.navItemActive : {}),
                  ':hover': styles.navItemHover
                })}
              >
                <FaChalkboardTeacher style={styles.iconMargin} /> Workshops
              </NavLink>
              
              <NavLink 
                to="/contact" 
                style={({ isActive }) => ({
                  ...styles.navItem,
                  ...(isActive ? styles.navItemActive : {}),
                  ':hover': styles.navItemHover
                })}
              >
                <FaEnvelope style={styles.iconMargin} /> Contact
              </NavLink>
              
              {/* New Supporting Orphans Link */}
              <NavLink 
                to="/support" 
                style={({ isActive }) => ({
                  ...styles.navItem,
                  ...(isActive ? styles.navItemActive : {}),
                  ':hover': styles.navItemHover
                })}
              >
                <FaHeart style={styles.iconMargin} /> Support Orphans
              </NavLink>
              
              {user?.role === 'farmer' && (
                <>
                  <NavLink 
                    to="/farmer/crops" 
                    style={({ isActive }) => ({
                      ...styles.navItem,
                      ...(isActive ? styles.navItemActive : {}),
                      ':hover': styles.navItemHover
                    })}
                  >
                    <FaSeedling style={styles.iconMargin} /> My Crops
                  </NavLink>
                </>
              )}
              
              {user?.role === 'admin' && (
                <>
                  <NavLink 
                    to="/admin" 
                    style={({ isActive }) => ({
                      ...styles.navItem,
                      ...(isActive ? styles.navItemActive : {}),
                      ':hover': styles.navItemHover
                    })}
                  >
                    <FaTachometerAlt style={styles.iconMargin} /> Dashboard
                  </NavLink>
                </>
              )}
            </div>
          </div>
          
          {/* Auth buttons */}
          <div style={{ ...styles.authContainer, ...desktopStyles }}>
            {user ? (
              <div style={styles.flexCenter}>
                <span style={styles.welcomeText}>Welcome, {user.name || user.role}</span>
                <button
                  onClick={onLogout}
                  style={{ ...styles.logoutButton, ':hover': styles.logoutButtonHover }}
                >
                  <FaSignOutAlt style={styles.iconMargin} /> Logout
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '16px' }}>
                <Link 
                  to="/login" 
                  style={{ ...styles.loginLink, ':hover': styles.logoutButtonHover }}
                >
                  <FaUser style={styles.iconMargin} /> Login
                </Link>
                <Link 
                  to="/register" 
                  style={{ ...styles.registerButton, ':hover': styles.registerButtonHover }}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div style={{ ...mobileStyles, ...styles.flexCenter }}>
            <button 
              onClick={toggleMenu}
              style={{ ...styles.mobileMenuButton, ':hover': styles.mobileMenuButtonHover }}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div style={{ ...styles.mobileMenu, ...mobileStyles }}>
          <div style={styles.mobileMenuContainer}>
            <NavLink 
              to="/" 
              end
              onClick={toggleMenu}
              style={({ isActive }) => ({
                ...styles.mobileNavItem,
                ...(isActive ? styles.mobileNavItemActive : {}),
                ':hover': styles.mobileNavItemHover
              })}
            >
              <FaHome style={styles.iconMargin} /> Home
            </NavLink>
            
            <NavLink 
              to="/about" 
              onClick={toggleMenu}
              style={({ isActive }) => ({
                ...styles.mobileNavItem,
                ...(isActive ? styles.mobileNavItemActive : {}),
                ':hover': styles.mobileNavItemHover
              })}
            >
              <FaInfoCircle style={styles.iconMargin} /> About
            </NavLink>
            
            <NavLink 
              to="/marketplace" 
              onClick={toggleMenu}
              style={({ isActive }) => ({
                ...styles.mobileNavItem,
                ...(isActive ? styles.mobileNavItemActive : {}),
                ':hover': styles.mobileNavItemHover
              })}
            >
              <FaShoppingBasket style={styles.iconMargin} /> Marketplace
            </NavLink>
            
            <NavLink 
              to="/resources" 
              onClick={toggleMenu}
              style={({ isActive }) => ({
                ...styles.mobileNavItem,
                ...(isActive ? styles.mobileNavItemActive : {}),
                ':hover': styles.mobileNavItemHover
              })}
            >
              <FaBook style={styles.iconMargin} /> Resources
            </NavLink>
            
            <NavLink 
              to="/workshops" 
              onClick={toggleMenu}
              style={({ isActive }) => ({
                ...styles.mobileNavItem,
                ...(isActive ? styles.mobileNavItemActive : {}),
                ':hover': styles.mobileNavItemHover
              })}
            >
              <FaChalkboardTeacher style={styles.iconMargin} /> Workshops
            </NavLink>
            
            <NavLink 
              to="/contact" 
              onClick={toggleMenu}
              style={({ isActive }) => ({
                ...styles.mobileNavItem,
                ...(isActive ? styles.mobileNavItemActive : {}),
                ':hover': styles.mobileNavItemHover
              })}
            >
              <FaEnvelope style={styles.iconMargin} /> Contact
            </NavLink>
            
            {/* New Supporting Orphans Link */}
            <NavLink 
              to="/support" 
              onClick={toggleMenu}
              style={({ isActive }) => ({
                ...styles.mobileNavItem,
                ...(isActive ? styles.mobileNavItemActive : {}),
                ':hover': styles.mobileNavItemHover
              })}
            >
              <FaHeart style={styles.iconMargin} /> Support Orphans
            </NavLink>
            
            {user?.role === 'farmer' && (
              <>
                <NavLink 
                  to="/farmer/crops" 
                  onClick={toggleMenu}
                  style={({ isActive }) => ({
                    ...styles.mobileNavItem,
                    ...(isActive ? styles.mobileNavItemActive : {}),
                    ':hover': styles.mobileNavItemHover
                  })}
                >
                  <FaSeedling style={styles.iconMargin} /> My Crops
                </NavLink>
              </>
            )}
            
            {user?.role === 'admin' && (
              <>
                <NavLink 
                  to="/admin" 
                  onClick={toggleMenu}
                  style={({ isActive }) => ({
                    ...styles.mobileNavItem,
                    ...(isActive ? styles.mobileNavItemActive : {}),
                    ':hover': styles.mobileNavItemHover
                  })}
                >
                  <FaTachometerAlt style={styles.iconMargin} /> Dashboard
                </NavLink>
              </>
            )}
          </div>
          
          <div style={styles.mobileAuthContainer}>
            {user ? (
              <div style={styles.spaceBetween}>
                <span style={styles.mobileWelcome}>Welcome, {user.name || user.role}</span>
                <button 
                  onClick={() => { onLogout(); toggleMenu(); }} 
                  style={{ ...styles.logoutButton, ':hover': styles.logoutButtonHover }}
                >
                  <FaSignOutAlt style={styles.iconMargin} /> Logout
                </button>
              </div>
            ) : (
              <div style={styles.spaceY}>
                <Link 
                  to="/login" 
                  onClick={toggleMenu}
                  style={{ ...styles.mobileLoginButton, ':hover': styles.mobileLoginButtonHover }}
                >
                  <FaUser style={styles.iconMargin} /> Login
                </Link>
                <Link 
                  to="/register" 
                  onClick={toggleMenu}
                  style={{ ...styles.mobileRegisterButton, ':hover': styles.mobileRegisterButtonHover }}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;