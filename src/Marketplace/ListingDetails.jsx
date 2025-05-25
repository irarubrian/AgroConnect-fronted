import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ListingDetails({ user }) {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [inquiry, setInquiry] = useState({
    message: '',
    quantity_requested: '',
    counter_price: ''
  });

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(`http://localhost:5000/listings/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch listing details');
        }

        setListing(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  const handleInquiryChange = (e) => {
    const { name, value } = e.target;
    setInquiry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/listings/${id}/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(inquiry)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit inquiry');
      }

      alert('Inquiry submitted successfully!');
      setInquiry({
        message: '',
        quantity_requested: '',
        counter_price: ''
      });
    } catch (err) {
      setError(err.message);
    }
  };

  // Styles
  const styles = {
    container: {
      maxWidth: '56rem',
      margin: '0 auto',
      padding: '2rem 0'
    },
    backLink: {
      color: '#2e7d32',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.5rem',
      ':hover': {
        textDecoration: 'underline'
      }
    },
    listingContainer: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    listingContent: {
      padding: '1.5rem'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#2e7d32'
    },
    organicBadge: {
      backgroundColor: '#e8f5e9',
      color: '#2e7d32',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    grid: {
      display: 'grid',
      gap: '1.5rem',
      marginBottom: '1.5rem'
    },
    twoColumnGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    sectionTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    detailList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    detailItem: {
      display: 'flex'
    },
    detailLabel: {
      color: '#6b7280',
      width: '8rem'
    },
    inquiryForm: {
      marginTop: '2rem',
      backgroundColor: '#f9fafb',
      padding: '1.5rem',
      borderRadius: '0.5rem'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    label: {
      display: 'block',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    input: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem'
    },
    textarea: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      minHeight: '6rem'
    },
    submitButton: {
      backgroundColor: '#2e7d32',
      color: 'white',
      padding: '0.5rem 1.5rem',
      borderRadius: '0.375rem',
      border: 'none',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#1b5e20'
      }
    },
    errorMessage: {
      padding: '1rem',
      backgroundColor: '#fee2e2',
      color: '#b91c1c',
      borderRadius: '0.375rem',
      maxWidth: '32rem',
      margin: '2rem auto 0'
    },
    loadingSpinner: {
      display: 'flex',
      justifyContent: 'center',
      padding: '3rem 0'
    },
    spinner: {
      width: '3rem',
      height: '3rem',
      border: '0.5rem solid #2e7d32',
      borderStyle: 'dashed',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    notFound: {
      textAlign: 'center',
      padding: '3rem 0',
      color: '#6b7280',
      fontSize: '1.125rem'
    }
  };

  if (loading) {
    return (
      <div style={styles.loadingSpinner}>
        <div style={styles.spinner}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorMessage}>
        {error}
      </div>
    );
  }

  if (!listing) {
    return (
      <div style={styles.notFound}>
        <p>Listing not found.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={{ marginBottom: '1.5rem' }}>
        <Link to="/marketplace" style={styles.backLink}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.25rem' }} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Marketplace
        </Link>
      </div>

      <div style={styles.listingContainer}>
        <div style={styles.listingContent}>
          <div style={styles.header}>
            <h1 style={styles.title}>{listing.crop_type}</h1>
            {listing.organic && (
              <span style={styles.organicBadge}>Organic</span>
            )}
          </div>

          <div style={{ ...styles.grid, ...styles.twoColumnGrid }}>
            <div>
              <h2 style={styles.sectionTitle}>Details</h2>
              <ul style={styles.detailList}>
                <li style={styles.detailItem}>
                  <span style={styles.detailLabel}>Variety:</span>
                  <span>{listing.variety || 'N/A'}</span>
                </li>
                <li style={styles.detailItem}>
                  <span style={styles.detailLabel}>Quantity:</span>
                  <span>{listing.quantity} {listing.unit}</span>
                </li>
                <li style={styles.detailItem}>
                  <span style={styles.detailLabel}>Price:</span>
                  <span>KES {listing.price_per_unit} per {listing.unit}</span>
                </li>
                <li style={styles.detailItem}>
                  <span style={styles.detailLabel}>Location:</span>
                  <span>{listing.location}</span>
                </li>
                <li style={styles.detailItem}>
                  <span style={styles.detailLabel}>Harvest Date:</span>
                  <span>{listing.harvest_date || 'N/A'}</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 style={styles.sectionTitle}>Farmer Information</h2>
              <ul style={styles.detailList}>
                <li style={styles.detailItem}>
                  <span style={styles.detailLabel}>Name:</span>
                  <span>{listing.farmer?.username || 'N/A'}</span>
                </li>
                <li style={styles.detailItem}>
                  <span style={styles.detailLabel}>Location:</span>
                  <span>{listing.farmer?.location || 'N/A'}</span>
                </li>
                <li style={styles.detailItem}>
                  <span style={styles.detailLabel}>Phone:</span>
                  <span>{listing.farmer?.phone || 'N/A'}</span>
                </li>
              </ul>
            </div>
          </div>

          {user && user.role === 'buyer' && (
            <div style={styles.inquiryForm}>
              <h2 style={styles.sectionTitle}>Make an Inquiry</h2>
              {error && <div style={{ ...styles.errorMessage, marginBottom: '1rem', marginTop: 0 }}>{error}</div>}
              <form onSubmit={handleSubmitInquiry}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Message</label>
                  <textarea
                    name="message"
                    value={inquiry.message}
                    onChange={handleInquiryChange}
                    style={styles.textarea}
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div style={{ ...styles.grid, ...styles.twoColumnGrid, marginBottom: '1rem' }}>
                  <div>
                    <label style={styles.label}>Quantity Requested ({listing.unit})</label>
                    <input
                      type="number"
                      name="quantity_requested"
                      value={inquiry.quantity_requested}
                      onChange={handleInquiryChange}
                      style={styles.input}
                      min="1"
                      max={listing.quantity}
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label style={styles.label}>Counter Price (KES)</label>
                    <input
                      type="number"
                      name="counter_price"
                      value={inquiry.counter_price}
                      onChange={handleInquiryChange}
                      style={styles.input}
                      min="1"
                      step="0.01"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  style={styles.submitButton}
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}