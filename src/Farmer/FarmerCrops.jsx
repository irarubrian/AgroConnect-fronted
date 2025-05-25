import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch, FaSeedling, FaEdit, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

const FarmerCrops = ({ user }) => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoverAdd, setHoverAdd] = useState(false);
  const [hoverCropBtn, setHoverCropBtn] = useState({});

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/farmer/crops', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCrops(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch crops');
        setLoading(false);
      }
    };

    if (user) fetchCrops();
  }, [user]);

  const filteredCrops = crops.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crop.variety.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crop.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusStyle = (status) => {
    const base = {
      padding: '2px 6px',
      fontSize: '12px',
      fontWeight: 'bold',
      borderRadius: '12px',
    };
    switch (status.toLowerCase()) {
      case 'planted':
        return { ...base, backgroundColor: '#ebf8ff', color: '#2b6cb0' }; // blue
      case 'growing':
        return { ...base, backgroundColor: '#f0fff4', color: '#2f855a' }; // green
      case 'harvested':
        return { ...base, backgroundColor: '#fffff0', color: '#d69e2e' }; // yellow
      case 'failed':
        return { ...base, backgroundColor: '#fff5f5', color: '#e53e3e' }; // red
      default:
        return { ...base, backgroundColor: '#edf2f7', color: '#4a5568' }; // gray
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px 8px 32px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none',
    marginBottom: '20px'
  };

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    color: '#a0aec0'
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '16px',
    padding: '16px'
  };

  const buttonStyle = (hovered, color) => ({
    padding: '8px 12px',
    backgroundColor: hovered ? color.dark : color.light,
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    marginTop: '10px'
  });

  if (loading) {
    return (
      <div style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #38a169',
          borderTop: '4px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        backgroundColor: '#fed7d7',
        padding: '12px',
        borderLeft: '4px solid #f56565',
        marginBottom: '20px',
        color: '#c53030'
      }}>
        {error}
      </div>
    );
  }

  return (
    <div style={{ padding: '24px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '24px'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#2d3748' }}>
          <FaSeedling style={{ marginRight: '8px', color: '#38a169' }} />
          My Crops
        </h1>
        <Link
          to="/farmer/crops/add"
          onMouseEnter={() => setHoverAdd(true)}
          onMouseLeave={() => setHoverAdd(false)}
          style={buttonStyle(hoverAdd, { light: '#38a169', dark: '#2f855a' })}
        >
          <FaPlus style={{ marginRight: '6px' }} /> Add New Crop
        </Link>
      </div>

      <div style={{ position: 'relative' }}>
        <FaSearch style={iconStyle} />
        <input
          type="text"
          placeholder="Search crops by name, variety or status..."
          style={inputStyle}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredCrops.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <FaSeedling style={{ fontSize: '24px', color: '#a0aec0' }} />
          <h3 style={{ fontSize: '18px', marginTop: '10px', color: '#2d3748' }}>No crops found</h3>
          <p style={{ fontSize: '14px', color: '#718096' }}>
            {searchTerm ? 'No crops match your search.' : 'Get started by adding your first crop.'}
          </p>
          <Link
            to="/farmer/crops/add"
            onMouseEnter={() => setHoverAdd(true)}
            onMouseLeave={() => setHoverAdd(false)}
            style={buttonStyle(hoverAdd, { light: '#38a169', dark: '#2f855a' })}
          >
            <FaPlus style={{ marginRight: '6px' }} /> Add Crop
          </Link>
        </div>
      ) : (
        <div>
          {filteredCrops.map((crop) => (
            <div key={crop._id} style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#2d3748' }}>
                    {crop.name} - {crop.variety}
                  </h2>
                  <div style={{ fontSize: '14px', color: '#4a5568' }}>
                    <div>Planted: {formatDate(crop.plantingDate)}</div>
                    {crop.harvestDate && <div>Harvest: {formatDate(crop.harvestDate)}</div>}
                    <div>Area: {crop.area} {crop.areaUnit}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={getStatusStyle(crop.status)}>{crop.status}</div>
                  <div style={{ marginTop: '8px' }}>
                    <Link
                      to={`/farmer/crops/${crop._id}`}
                      onMouseEnter={() => setHoverCropBtn(prev => ({ ...prev, [crop._id]: 'details' }))}
                      onMouseLeave={() => setHoverCropBtn(prev => ({ ...prev, [crop._id]: null }))}
                      style={{
                        marginRight: '8px',
                        color: hoverCropBtn[crop._id] === 'details' ? '#2f855a' : '#38a169',
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                    >
                      <FaEdit style={{ marginRight: '4px' }} /> Details
                    </Link>
                    <Link
                      to={`/farmer/crops/${crop._id}/diary`}
                      onMouseEnter={() => setHoverCropBtn(prev => ({ ...prev, [crop._id]: 'diary' }))}
                      onMouseLeave={() => setHoverCropBtn(prev => ({ ...prev, [crop._id]: null }))}
                      style={{
                        color: hoverCropBtn[crop._id] === 'diary' ? '#2b6cb0' : '#3182ce',
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                    >
                      <FaCalendarAlt style={{ marginRight: '4px' }} /> Diary
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FarmerCrops;
