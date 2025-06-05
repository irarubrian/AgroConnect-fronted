import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; 

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
          axios.get(`https://agroconnect-backend-13.onrender.com/crops/${id}`, {
            headers: { 'x-access-token': token }
          }),
          axios.get(`https://agroconnect-backend-13.onrender.com/crops/${id}/activities`, {
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

  if (loading) return <div className="loading">Loading...</div>;
  if (!crop) return <div className="not-found">Crop not found</div>;

  return (
    <div className="crop-details-container">
      <div className="crop-card">
        <div className="card-content">
          <div className="card-header">
            <div>
              <h1 className="crop-title">{crop.crop_type} - {crop.variety}</h1>
              <p className="details-label">
                <span className="details-value">Planted:</span> {new Date(crop.planting_date).toLocaleDateString()}
              </p>
              {crop.harvest_date && (
                <p className="details-label">
                  <span className="details-value">Harvest:</span> {new Date(crop.harvest_date).toLocaleDateString()}
                </p>
              )}
              <p className="details-label">
                <span className="details-value">Stage:</span> {crop.growth_stage}
              </p>
              <p className="details-label">
                <span className="details-value">Soil:</span> {crop.soil_type}
              </p>
              <p className="details-label">
                <span className="details-value">Irrigation:</span> {crop.irrigation_method}
              </p>
            </div>
            <Link
              to={`/crops/${id}/edit`}
              className="edit-button"
            >
              Edit
            </Link>
          </div>
          
          {crop.notes && (
            <div className="notes-container">
              <h3 className="notes-title">Notes:</h3>
              <p className="notes-content">{crop.notes}</p>
            </div>
          )}
        </div>
      </div>

      <div className="activities-header">
        <h2 className="activities-title">Activities</h2>
        <Link
          to={`/crops/${id}/activities/add`}
          className="add-activity-button"
        >
          Add Activity
        </Link>
      </div>

      {activities.length === 0 ? (
        <div className="empty-state">
          <p>No activities recorded yet.</p>
        </div>
      ) : (
        <div className="activities-table">
          <table>
            <thead>
              <tr>
                <th className="table-header">Date</th>
                <th className="table-header">Activity</th>
                <th className="table-header">Details</th>
                <th className="table-header">Cost</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity.id} className="table-row">
                  <td className="table-cell">
                    {new Date(activity.date).toLocaleDateString()}
                  </td>
                  <td className="table-cell">
                    {activity.activity_type}
                  </td>
                  <td className="table-cell">
                    <div>
                      <p className="activity-description">{activity.description}</p>
                      {activity.products_used && (
                        <p className="products-used">Products: {activity.products_used}</p>
                      )}
                    </div>
                  </td>
                  <td className="table-cell">
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