import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddCrop = () => {
  const [formData, setFormData] = useState({
    crop_type: '',
    variety: '',
    planting_date: '',
    harvest_date: '',
    growth_stage: 'planting',
    soil_type: '',
    irrigation_method: '',
    notes: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {
    crop_type,
    variety,
    planting_date,
    harvest_date,
    growth_stage,
    soil_type,
    irrigation_method,
    notes
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://agroconnect-backend-13.onrender.com/crops', formData, {
        headers: { 'x-access-token': token }
      });
      navigate('/crops');
    } catch (err) {
      setError(err.response?.data?.message || 'Error adding crop');
    }
  };

  // Styles
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '32px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const headerStyle = {
    fontSize: '28px',
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '32px',
    paddingBottom: '16px',
    borderBottom: '1px solid #eee'
  };

  const errorStyle = {
    backgroundColor: '#fee2e2',
    border: '1px solid #ef4444',
    color: '#b91c1c',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '24px',
    fontSize: '14px'
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

  const inputFocusStyle = {
    outline: 'none',
    borderColor: '#3b82f6',
    backgroundColor: '#fff',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '12px'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical'
  };

  const buttonStyle = {
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const buttonHoverStyle = {
    backgroundColor: '#059669',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
    marginBottom: '24px'
  };

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  if (mediaQuery.matches) {
    gridStyle.gridTemplateColumns = '1fr 1fr';
  }

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Add New Crop</h1>
      {error && <div style={errorStyle}>{error}</div>}
      <form onSubmit={onSubmit}>
        <div style={gridStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Crop Type</label>
            <input
              type="text"
              name="crop_type"
              value={crop_type}
              onChange={onChange}
              required
              style={{ ...inputStyle, ':focus': inputFocusStyle }}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Variety</label>
            <input
              type="text"
              name="variety"
              value={variety}
              onChange={onChange}
              style={{ ...inputStyle, ':focus': inputFocusStyle }}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Planting Date</label>
            <input
              type="date"
              name="planting_date"
              value={planting_date}
              onChange={onChange}
              required
              style={{ ...inputStyle, ':focus': inputFocusStyle }}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Harvest Date (Estimated)</label>
            <input
              type="date"
              name="harvest_date"
              value={harvest_date}
              onChange={onChange}
              style={{ ...inputStyle, ':focus': inputFocusStyle }}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Growth Stage</label>
            <select
              name="growth_stage"
              value={growth_stage}
              onChange={onChange}
              style={selectStyle}
            >
              <option value="planting">Planting</option>
              <option value="germination">Germination</option>
              <option value="vegetative">Vegetative</option>
              <option value="flowering">Flowering</option>
              <option value="fruiting">Fruiting</option>
              <option value="harvest">Harvest</option>
            </select>
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Soil Type</label>
            <input
              type="text"
              name="soil_type"
              value={soil_type}
              onChange={onChange}
              style={{ ...inputStyle, ':focus': inputFocusStyle }}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Irrigation Method</label>
            <input
              type="text"
              name="irrigation_method"
              value={irrigation_method}
              onChange={onChange}
              style={{ ...inputStyle, ':focus': inputFocusStyle }}
            />
          </div>
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Notes</label>
          <textarea
            name="notes"
            value={notes}
            onChange={onChange}
            style={textareaStyle}
          ></textarea>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={e => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={e => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
              e.target.style.transform = 'none';
              e.target.style.boxShadow = buttonStyle.boxShadow;
            }}
          >
            Save Crop
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCrop;