import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch, FaSeedling, FaEdit, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';
import '../App.css'; 

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
    const base = 'badge';
    switch (status.toLowerCase()) {
      case 'planted':
        return `${base} badge-blue`;
      case 'growing':
        return `${base} badge-green`;
      case 'harvested':
        return `${base} badge-yellow`;
      case 'failed':
        return `${base} badge-red`;
      default:
        return `${base} badge-gray`;
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader" />
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

  return (
    <div className="farmer-crops-container">
      <div className="header">
        <h1 className="title">
          <FaSeedling className="title-icon" />
          My Crops
        </h1>
        <Link
          to="/farmer/crops/add"
          onMouseEnter={() => setHoverAdd(true)}
          onMouseLeave={() => setHoverAdd(false)}
          className={`btn ${hoverAdd ? 'btn-hover' : ''}`}
        >
          <FaPlus className="btn-icon" /> Add New Crop
        </Link>
      </div>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search crops by name, variety or status..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredCrops.length === 0 ? (
        <div className="no-crops-message">
          <FaSeedling className="no-crops-icon" />
          <h3 className="no-crops-title">No crops found</h3>
          <p className="no-crops-text">
            {searchTerm ? 'No crops match your search.' : 'Get started by adding your first crop.'}
          </p>
          <Link
            to="/farmer/crops/add"
            onMouseEnter={() => setHoverAdd(true)}
            onMouseLeave={() => setHoverAdd(false)}
            className={`btn ${hoverAdd ? 'btn-hover' : ''}`}
          >
            <FaPlus className="btn-icon" /> Add Crop
          </Link>
        </div>
      ) : (
        <div>
          {filteredCrops.map((crop) => (
            <div key={crop._id} className="crop-card">
              <div className="crop-card-header">
                <div>
                  <h2 className="crop-name">
                    {crop.name} - {crop.variety}
                  </h2>
                  <div className="crop-details">
                    <div>Planted: {formatDate(crop.plantingDate)}</div>
                    {crop.harvestDate && <div>Harvest: {formatDate(crop.harvestDate)}</div>}
                    <div>Area: {crop.area} {crop.areaUnit}</div>
                  </div>
                </div>
                <div className="crop-card-actions">
                  <div className={getStatusStyle(crop.status)}>{crop.status}</div>
                  <div className="crop-btns">
                    <Link
                      to={`/farmer/crops/${crop._id}`}
                      onMouseEnter={() => setHoverCropBtn(prev => ({ ...prev, [crop._id]: 'details' }))}
                      onMouseLeave={() => setHoverCropBtn(prev => ({ ...prev, [crop._id]: null }))}
                      className={`crop-btn ${hoverCropBtn[crop._id] === 'details' ? 'btn-details-hover' : ''}`}
                    >
                      <FaEdit className="crop-btn-icon" /> Details
                    </Link>
                    <Link
                      to={`/farmer/crops/${crop._id}/diary`}
                      onMouseEnter={() => setHoverCropBtn(prev => ({ ...prev, [crop._id]: 'diary' }))}
                      onMouseLeave={() => setHoverCropBtn(prev => ({ ...prev, [crop._id]: null }))}
                      className={`crop-btn ${hoverCropBtn[crop._id] === 'diary' ? 'btn-diary-hover' : ''}`}
                    >
                      <FaCalendarAlt className="crop-btn-icon" /> Diary
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
