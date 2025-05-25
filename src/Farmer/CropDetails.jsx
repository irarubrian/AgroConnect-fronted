import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CropDetails = () => {
  const { id } = useParams();
  const [crop, setCrop] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCropData = async () => {
      try {
        const token = localStorage.getItem('token');
        const [cropRes, activitiesRes] = await Promise.all([
          axios.get(`http://localhost:5000/crops/${id}`, {
            headers: { 'x-access-token': token }
          }),
          axios.get(`http://localhost:5000/crops/${id}/activities`, {
            headers: { 'x-access-token': token }
          })
        ]);
        
        setCrop(cropRes.data.crop);
        setActivities(activitiesRes.data.activities);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCropData();
  }, [id]);

  // Styles
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 16px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '32px',
    overflow: 'hidden'
  };

  const cardContentStyle = {
    padding: '24px'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '8px'
  };

  const textStyle = {
    color: '#4b5563',
    marginBottom: '4px'
  };

  const boldTextStyle = {
    ...textStyle,
    fontWeight: '600'
  };

  const notesContainerStyle = {
    marginTop: '16px'
  };

  const notesTitleStyle = {
    fontWeight: '600',
    marginBottom: '8px'
  };

  const buttonStyle = {
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const buttonHoverStyle = {
    backgroundColor: '#059669',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const sectionHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  };

  const sectionTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1a1a1a'
  };

  const emptyStateStyle = {
    backgroundColor: '#fef3c7',
    borderLeft: '4px solid #f59e0b',
    color: '#92400e',
    padding: '16px',
    marginBottom: '24px'
  };

  const tableStyle = {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  };

  const tableHeaderStyle = {
    backgroundColor: '#f9fafb',
    textAlign: 'left',
    padding: '12px 24px',
    fontSize: '12px',
    fontWeight: '500',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const tableCellStyle = {
    padding: '16px 24px',
    fontSize: '14px',
    color: '#1a1a1a',
    borderBottom: '1px solid #e5e7eb'
  };

  const tableRowStyle = {
    ':hover': {
      backgroundColor: '#f9fafb'
    }
  };

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    fontSize: '18px',
    color: '#6b7280'
  };

  const notFoundStyle = {
    ...loadingStyle,
    color: '#ef4444'
  };

  if (loading) return <div style={loadingStyle}>Loading...</div>;
  if (!crop) return <div style={notFoundStyle}>Crop not found</div>;

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={cardContentStyle}>
          <div style={headerStyle}>
            <div>
              <h1 style={titleStyle}>{crop.crop_type} - {crop.variety}</h1>
              <p style={textStyle}>
                <span style={boldTextStyle}>Planted:</span> {new Date(crop.planting_date).toLocaleDateString()}
              </p>
              {crop.harvest_date && (
                <p style={textStyle}>
                  <span style={boldTextStyle}>Harvest:</span> {new Date(crop.harvest_date).toLocaleDateString()}
                </p>
              )}
              <p style={textStyle}>
                <span style={boldTextStyle}>Stage:</span> {crop.growth_stage}
              </p>
              <p style={textStyle}>
                <span style={boldTextStyle}>Soil:</span> {crop.soil_type}
              </p>
              <p style={textStyle}>
                <span style={boldTextStyle}>Irrigation:</span> {crop.irrigation_method}
              </p>
            </div>
            <Link
              to={`/crops/${id}/edit`}
              style={buttonStyle}
              onMouseEnter={e => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={e => {
                e.target.style.backgroundColor = buttonStyle.backgroundColor;
                e.target.style.transform = 'none';
                e.target.style.boxShadow = 'none';
              }}
            >
              Edit
            </Link>
          </div>
          
          {crop.notes && (
            <div style={notesContainerStyle}>
              <h3 style={notesTitleStyle}>Notes:</h3>
              <p style={textStyle}>{crop.notes}</p>
            </div>
          )}
        </div>
      </div>

      <div style={sectionHeaderStyle}>
        <h2 style={sectionTitleStyle}>Activities</h2>
        <Link
          to={`/crops/${id}/activities/add`}
          style={buttonStyle}
          onMouseEnter={e => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseLeave={e => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
            e.target.style.transform = 'none';
            e.target.style.boxShadow = 'none';
          }}
        >
          Add Activity
        </Link>
      </div>

      {activities.length === 0 ? (
        <div style={emptyStateStyle}>
          <p>No activities recorded yet.</p>
        </div>
      ) : (
        <div style={tableStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Date</th>
                <th style={tableHeaderStyle}>Activity</th>
                <th style={tableHeaderStyle}>Details</th>
                <th style={tableHeaderStyle}>Cost</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity.id} style={tableRowStyle}>
                  <td style={tableCellStyle}>
                    {new Date(activity.date).toLocaleDateString()}
                  </td>
                  <td style={tableCellStyle}>
                    {activity.activity_type}
                  </td>
                  <td style={tableCellStyle}>
                    <div>
                      <p style={{ color: '#1a1a1a', marginBottom: '4px' }}>{activity.description}</p>
                      {activity.products_used && (
                        <p style={{ color: '#6b7280', fontSize: '13px' }}>Products: {activity.products_used}</p>
                      )}
                    </div>
                  </td>
                  <td style={tableCellStyle}>
                    {activity.cost ? `$${activity.cost.toFixed(2)}` : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CropDetails;