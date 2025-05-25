
import React, { useEffect, useState } from 'react';

export default function AdminListings() {
  const [listings, setListings] = useState([]);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:5000/admin/listings', {
      headers: { 'x-access-token': token }
    })
      .then(res => res.json())
      .then(data => {
        if (data.listings) setListings(data.listings);
        else setListings([]);
      })
      .catch(() => setListings([]));
  }, [token]);

  const updateListingStatus = async (id, action) => {
    setMessage('');
    try {
      const res = await fetch(`http://localhost:5000/admin/listings/${id}/${action}`, {
        method: 'PUT',
        headers: { 'x-access-token': token }
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setListings(listings.filter(l => l.id !== id));
      } else {
        setMessage(data.message || 'Action failed');
      }
    } catch {
      setMessage('Error connecting to server');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pending Listings for Approval</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      {listings.length === 0 ? (
        <p>No pending listings.</p>
      ) : (
        <div className="space-y-4">
          {listings.map(listing => (
            <div key={listing.id} className="border rounded p-4 shadow">
              <h3 className="font-semibold text-lg">{listing.crop_type} {listing.variety && `- ${listing.variety}`}</h3>
              <p>Quantity: {listing.quantity} {listing.unit}</p>
              <p>Price per unit: ${listing.price_per_unit.toFixed(2)}</p>
              <p>Location: {listing.location}</p>
              <p>Harvest Date: {listing.harvest_date || 'N/A'}</p>
              <p>Organic: {listing.organic ? 'Yes' : 'No'}</p>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => updateListingStatus(listing.id, 'approve')}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateListingStatus(listing.id, 'reject')}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}