import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

const AddListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    crop_type: '',
    variety: '',
    quantity: '',
    unit: 'kg',
    price_per_unit: '',
    location: '',
    harvest_date: '',
    organic: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const cropTypes = [
    'Vegetables',
    'Fruits',
    'Grains',
    'Legumes',
    'Tubers',
    'Herbs',
    'Spices',
    'Other'
  ];

  const units = [
    'kg',
    'g',
    'lb',
    'ton',
    'bag',
    'bunch',
    'piece'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.crop_type.trim()) {
      newErrors.crop_type = 'Crop type is required';
    }
    if (!formData.quantity || isNaN(formData.quantity)) {
      newErrors.quantity = 'Valid quantity is required';
    }
    if (!formData.price_per_unit || isNaN(formData.price_per_unit)) {
      newErrors.price_per_unit = 'Valid price is required';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://agroconnect-backend-13.onrender.com/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create listing');
      }

      navigate('/marketplace');
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-listing-container">
      <div className="add-listing-content">
        <h1 className="add-listing-header">Add New Market Listing</h1>
        
        {submitError && (
          <div className="error-alert" role="alert">
            <strong className="error-alert-title">Error: </strong>
            <span>{submitError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="add-listing-form">
          <div className="form-group">
            <label className="form-label" htmlFor="crop_type">
              Crop Type <span className="required-indicator">*</span>
            </label>
            <select
              id="crop_type"
              name="crop_type"
              value={formData.crop_type}
              onChange={handleChange}
              className={`form-select ${errors.crop_type ? 'input-error' : ''}`}
            >
              <option value="">Select Crop Type</option>
              {cropTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.crop_type && <p className="error-text">{errors.crop_type}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="variety">
              Variety (Optional)
            </label>
            <input
              type="text"
              id="variety"
              name="variety"
              value={formData.variety}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g. Roma, Hass, etc."
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="quantity">
                Quantity <span className="required-indicator">*</span>
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className={`form-input ${errors.quantity ? 'input-error' : ''}`}
                placeholder="e.g. 100"
                min="0"
                step="0.01"
              />
              {errors.quantity && <p className="error-text">{errors.quantity}</p>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="unit">
                Unit <span className="required-indicator">*</span>
              </label>
              <select
                id="unit"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                className="form-select"
              >
                {units.map(unit => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="price_per_unit">
              Price Per Unit (KSH) <span className="required-indicator">*</span>
            </label>
            <input
              type="number"
              id="price_per_unit"
              name="price_per_unit"
              value={formData.price_per_unit}
              onChange={handleChange}
              className={`form-input ${errors.price_per_unit ? 'input-error' : ''}`}
              placeholder="e.g. 50"
              min="0"
              step="0.01"
            />
            {errors.price_per_unit && <p className="error-text">{errors.price_per_unit}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="location">
              Location <span className="required-indicator">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`form-input ${errors.location ? 'input-error' : ''}`}
              placeholder="e.g. Nairobi, Kiambu"
            />
            {errors.location && <p className="error-text">{errors.location}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="harvest_date">
              Harvest Date (Optional)
            </label>
            <input
              type="date"
              id="harvest_date"
              name="harvest_date"
              value={formData.harvest_date}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="organic"
              name="organic"
              checked={formData.organic}
              onChange={handleChange}
              className="checkbox-input"
            />
            <label htmlFor="organic" className="checkbox-label">Organic Produce</label>
          </div>

          <div className="button-container">
            <button
              type="button"
              onClick={() => navigate('/marketplace')}
              className="btn secondary-btn"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn primary-btn ${isSubmitting ? 'btn-disabled' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Create Listing'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;