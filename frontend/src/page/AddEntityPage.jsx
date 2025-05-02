import React, { useState, useEffect } from 'react';
import '../styles/AddEntityPage.css';

const AddEntityPage = () => {
  const [hobbies, setHobbies] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch hobbies from server or initialize with empty list
  const fetchHobbies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/hobbies');
      if (!response.ok) {
        throw new Error('Failed to fetch hobbies');
      }
      const data = await response.json();
      setHobbies(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHobbies();
  }, []);

  // Handle form submit to add hobby
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
  
    setHobbies([...hobbies, { id: Date.now(), name }]); // Add new hobby
    setName(''); // Clear input field
  };

  return (
    <div className="add-entity-page">
      <h1>Add Your Odd Hobbies</h1>
      <form onSubmit={handleSubmit} className="add-entity-form">
        <input
          type="text"
          placeholder="Enter a hobby"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          className="add-entity-input"
        />
        <button type="submit" disabled={loading} className="add-entity-button">
          Add Hobby
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <h2>Your Hobbies List</h2>
      {loading && <p>Loading...</p>}
      <ul className="hobbies-list">
        {hobbies.map((hobby) => (
          <li key={hobby._id || hobby.id}>{hobby.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddEntityPage;
