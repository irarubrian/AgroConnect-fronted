import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CropDiary = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addButtonHover, setAddButtonHover] = useState(false);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/crops', {
          headers: { 'x-access-token': token }
        });
        setCrops(res.data.crops);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  if (loading) return <div style={{ fontSize: '18px', padding: '20px' }}>Loading...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#2e7d32' }}>My Crop Diary</h1>
        <Link
          to="/crops/add"
          style={{
            backgroundColor: addButtonHover ? '#2e7d32' : '#4caf50',
            color: 'white',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={() => setAddButtonHover(true)}
          onMouseLeave={() => setAddButtonHover(false)}
        >
          Add New Crop
        </Link>
      </div>

      {crops.length === 0 ? (
        <div style={{ backgroundColor: '#fff8e1', borderLeft: '5px solid #fbc02d', color: '#795548', padding: '20px', borderRadius: '4px' }}>
          <p>You haven't added any crops yet. Start by adding your first crop!</p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {crops.map((crop) => (
            <div key={crop.id} style={{
              backgroundColor: '#f4f6f5',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              padding: '20px'
            }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#2e7d32' }}>
                {crop.crop_type} - {crop.variety}
              </h2>
              <p style={{ marginBottom: '8px', color: '#555' }}>
                <strong>Planted:</strong> {new Date(crop.planting_date).toLocaleDateString()}
              </p>
              <p style={{ marginBottom: '8px', color: '#555' }}>
                <strong>Stage:</strong> {crop.growth_stage}
              </p>
              <p style={{ marginBottom: '15px', color: '#555' }}>
                <strong>Soil:</strong> {crop.soil_type}
              </p>
              <Link
                to={`/crops/${crop.id}`}
                style={{
                  color: '#388e3c',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => (e.target.style.color = '#1b5e20')}
                onMouseOut={(e) => (e.target.style.color = '#388e3c')}
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CropDiary;
