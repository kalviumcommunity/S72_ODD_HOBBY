import React, { useState, useEffect } from 'react';
import '../styles/AddEntityPage.css';

const AddHobbies = () => {
  const [hobbies, setHobbies] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');

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

  // Handle delete hobby
  const handleDelete = (id) => {
    setHobbies(hobbies.filter(hobby => (hobby._id || hobby.id) !== id));
  };

  // Handle start editing hobby
  const handleEdit = (id, currentName) => {
    setEditingId(id);
    setEditingName(currentName);
  };

  // Handle cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingName('');
  };

  // Handle save edited hobby
  const handleSaveEdit = (id) => {
    if (!editingName.trim()) return;
    setHobbies(hobbies.map(hobby => {
      if ((hobby._id || hobby.id) === id) {
        return { ...hobby, name: editingName };
      }
      return hobby;
    }));
    setEditingId(null);
    setEditingName('');
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
          <li key={hobby._id || hobby.id}>
            {editingId === (hobby._id || hobby.id) ? (
              <>
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  className="add-entity-input"
                />
                <button onClick={() => handleSaveEdit(hobby._id || hobby.id)} className="add-entity-button">
                  Save
                </button>
                <button onClick={handleCancelEdit} className="add-entity-button">
                  Cancel
                </button>
              </>
            ) : (
              <>
                {hobby.name}
                <button onClick={() => handleEdit(hobby._id || hobby.id, hobby.name)} className="add-entity-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(hobby._id || hobby.id)} className="add-entity-button">
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddHobbies;
