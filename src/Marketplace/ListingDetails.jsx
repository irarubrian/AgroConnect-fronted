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
        const response = await fetch(`https://agroconnect-backend-13.onrender.com/listings/${id}`);
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
      const response = await fetch(`https://agroconnect-backend-13.onrender.com/listings/${id}/inquiries`, {
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

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        {error}
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="not-found">
        <p>Listing not found.</p>
      </div>
    );
  }

  return (
    <div className="listing-details-container">
      <div className="back-link-container">
        <Link to="/marketplace" className="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" className="back-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Marketplace
        </Link>
      </div>

      <div className="listing-container">
        <div className="listing-content">
          <div className="listing-header">
            <h1 className="listing-title">{listing.crop_type}</h1>
            {listing.organic && (
              <span className="organic-badge">Organic</span>
            )}
          </div>

          <div className="listing-info">
            <div className="details-section">
              <h2 className="section-title">Details</h2>
              <ul className="detail-list">
                <li className="detail-item">
                  <span className="detail-label">Variety:</span>
                  <span>{listing.variety || 'N/A'}</span>
                </li>
                <li className="detail-item">
                  <span className="detail-label">Quantity:</span>
                  <span>{listing.quantity} {listing.unit}</span>
                </li>
                <li className="detail-item">
                  <span className="detail-label">Price:</span>
                  <span>KES {listing.price_per_unit} per {listing.unit}</span>
                </li>
                <li className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span>{listing.location}</span>
                </li>
                <li className="detail-item">
                  <span className="detail-label">Harvest Date:</span>
                  <span>{listing.harvest_date || 'N/A'}</span>
                </li>
              </ul>
            </div>

            <div className="farmer-info-section">
              <h2 className="section-title">Farmer Information</h2>
              <ul className="detail-list">
                <li className="detail-item">
                  <span className="detail-label">Name:</span>
                  <span>{listing.farmer?.username || 'N/A'}</span>
                </li>
                <li className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span>{listing.farmer?.location || 'N/A'}</span>
                </li>
                <li className="detail-item">
                  <span className="detail-label">Phone:</span>
                  <span>{listing.farmer?.phone || 'N/A'}</span>
                </li>
              </ul>
            </div>
          </div>

          {user && user.role === 'buyer' && (
            <div className="inquiry-form">
              <h2 className="section-title">Make an Inquiry</h2>
              {error && <div className="error-message inquiry-error">{error}</div>}
              <form onSubmit={handleSubmitInquiry}>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={inquiry.message}
                    onChange={handleInquiryChange}
                    className="form-textarea"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="quantity-price-grid">
                  <div className="form-group">
                    <label className="form-label">Quantity Requested ({listing.unit})</label>
                    <input
                      type="number"
                      name="quantity_requested"
                      value={inquiry.quantity_requested}
                      onChange={handleInquiryChange}
                      className="form-input"
                      min="1"
                      max={listing.quantity}
                      step="0.1"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Counter Price (KES)</label>
                    <input
                      type="number"
                      name="counter_price"
                      value={inquiry.counter_price}
                      onChange={handleInquiryChange}
                      className="form-input"
                      min="1"
                      step="0.01"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="submit-button"
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