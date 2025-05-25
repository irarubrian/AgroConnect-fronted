import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      const response = await fetch('/listings', {
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

  // Styles
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 16px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  };

  const headerStyle = {
    fontSize: '28px',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '24px',
    textAlign: 'center'
  };

  const errorAlertStyle = {
    backgroundColor: '#fee2e2',
    border: '1px solid #ef4444',
    color: '#b91c1c',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '24px',
    fontSize: '14px'
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '24px'
  };

  const formGroupStyle = {
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#4b5563',
    marginBottom: '8px'
  };

  const requiredIndicatorStyle = {
    color: '#ef4444',
    marginLeft: '4px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    fontSize: '14px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    backgroundColor: '#f9fafb',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box'
  };

  const inputErrorStyle = {
    ...inputStyle,
    borderColor: '#ef4444'
  };

  const errorTextStyle = {
    color: '#ef4444',
    fontSize: '12px',
    fontStyle: 'italic',
    marginTop: '4px'
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '12px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px'
  };

  const checkboxContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px'
  };

  const checkboxStyle = {
    width: '20px',
    height: '20px',
    marginRight: '8px',
    accentColor: '#10b981'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const primaryButtonStyle = {
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const primaryButtonHoverStyle = {
    backgroundColor: '#059669',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const primaryButtonDisabledStyle = {
    opacity: '0.5',
    cursor: 'not-allowed'
  };

  const secondaryButtonStyle = {
    backgroundColor: '#6b7280',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const secondaryButtonHoverStyle = {
    backgroundColor: '#4b5563',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  // Responsive grid
  if (window.innerWidth >= 768) {
    gridStyle.gridTemplateColumns = '1fr 1fr';
  }

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headerStyle}>Add New Market Listing</h1>
        
        {submitError && (
          <div style={errorAlertStyle} role="alert">
            <strong style={{ fontWeight: '600' }}>Error: </strong>
            <span>{submitError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="crop_type">
              Crop Type <span style={requiredIndicatorStyle}>*</span>
            </label>
            <select
              id="crop_type"
              name="crop_type"
              value={formData.crop_type}
              onChange={handleChange}
              style={errors.crop_type ? { ...selectStyle, ...inputErrorStyle } : selectStyle}
            >
              <option value="">Select Crop Type</option>
              {cropTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.crop_type && <p style={errorTextStyle}>{errors.crop_type}</p>}
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="variety">
              Variety (Optional)
            </label>
            <input
              type="text"
              id="variety"
              name="variety"
              value={formData.variety}
              onChange={handleChange}
              style={inputStyle}
              placeholder="e.g. Roma, Hass, etc."
            />
          </div>

          <div style={gridStyle}>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="quantity">
                Quantity <span style={requiredIndicatorStyle}>*</span>
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                style={errors.quantity ? { ...inputStyle, ...inputErrorStyle } : inputStyle}
                placeholder="e.g. 100"
                min="0"
                step="0.01"
              />
              {errors.quantity && <p style={errorTextStyle}>{errors.quantity}</p>}
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="unit">
                Unit <span style={requiredIndicatorStyle}>*</span>
              </label>
              <select
                id="unit"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                style={selectStyle}
              >
                {units.map(unit => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="price_per_unit">
              Price Per Unit (KSH) <span style={requiredIndicatorStyle}>*</span>
            </label>
            <input
              type="number"
              id="price_per_unit"
              name="price_per_unit"
              value={formData.price_per_unit}
              onChange={handleChange}
              style={errors.price_per_unit ? { ...inputStyle, ...inputErrorStyle } : inputStyle}
              placeholder="e.g. 50"
              min="0"
              step="0.01"
            />
            {errors.price_per_unit && <p style={errorTextStyle}>{errors.price_per_unit}</p>}
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="location">
              Location <span style={requiredIndicatorStyle}>*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={errors.location ? { ...inputStyle, ...inputErrorStyle } : inputStyle}
              placeholder="e.g. Nairobi, Kiambu"
            />
            {errors.location && <p style={errorTextStyle}>{errors.location}</p>}
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="harvest_date">
              Harvest Date (Optional)
            </label>
            <input
              type="date"
              id="harvest_date"
              name="harvest_date"
              value={formData.harvest_date}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={checkboxContainerStyle}>
            <input
              type="checkbox"
              id="organic"
              name="organic"
              checked={formData.organic}
              onChange={handleChange}
              style={checkboxStyle}
            />
            <label htmlFor="organic" style={{ ...labelStyle, marginBottom: '0' }}>Organic Produce</label>
          </div>

          <div style={buttonContainerStyle}>
            <button
              type="button"
              onClick={() => navigate('/marketplace')}
              style={secondaryButtonStyle}
              onMouseEnter={e => Object.assign(e.target.style, secondaryButtonHoverStyle)}
              onMouseLeave={e => {
                e.target.style.backgroundColor = secondaryButtonStyle.backgroundColor;
                e.target.style.transform = 'none';
                e.target.style.boxShadow = secondaryButtonStyle.boxShadow;
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                ...primaryButtonStyle,
                ...(isSubmitting ? primaryButtonDisabledStyle : {})
              }}
              onMouseEnter={e => !isSubmitting && Object.assign(e.target.style, primaryButtonHoverStyle)}
              onMouseLeave={e => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = primaryButtonStyle.backgroundColor;
                  e.target.style.transform = 'none';
                  e.target.style.boxShadow = primaryButtonStyle.boxShadow;
                }
              }}
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