import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; 

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

  return (
    <div className="add-crop-container">
      <h1 className="add-crop-header">Add New Crop</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Crop Type</label>
            <input
              type="text"
              name="crop_type"
              value={crop_type}
              onChange={onChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Variety</label>
            <input
              type="text"
              name="variety"
              value={variety}
              onChange={onChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Planting Date</label>
            <input
              type="date"
              name="planting_date"
              value={planting_date}
              onChange={onChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Harvest Date (Estimated)</label>
            <input
              type="date"
              name="harvest_date"
              value={harvest_date}
              onChange={onChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Growth Stage</label>
            <select
              name="growth_stage"
              value={growth_stage}
              onChange={onChange}
              className="form-select"
            >
              <option value="planting">Planting</option>
              <option value="germination">Germination</option>
              <option value="vegetative">Vegetative</option>
              <option value="flowering">Flowering</option>
              <option value="fruiting">Fruiting</option>
              <option value="harvest">Harvest</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Soil Type</label>
            <input
              type="text"
              name="soil_type"
              value={soil_type}
              onChange={onChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Irrigation Method</label>
            <input
              type="text"
              name="irrigation_method"
              value={irrigation_method}
              onChange={onChange}
              className="form-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Notes</label>
          <textarea
            name="notes"
            value={notes}
            onChange={onChange}
            className="form-textarea"
          ></textarea>
        </div>
        <div className="form-actions">
          <button
            type="submit"
            className="btn"
          >
            Save Crop
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCrop;