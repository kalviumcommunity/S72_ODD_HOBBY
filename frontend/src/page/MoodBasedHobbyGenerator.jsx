import React, { useState } from 'react';

const MoodBasedHobbyGenerator = () => {
  const [selectedHobby, setSelectedHobby] = useState('');
  const [loading, setLoading] = useState(false);

  const moodHobbies = {
    happy: ['Dancing', 'Painting', 'Playing Ukulele'],
    calm: ['Yoga', 'Meditation', 'Gardening'],
    adventurous: ['Hiking', 'Rock Climbing', 'Scuba Diving'],
  };

  const generateHobby = (mood) => {
    setLoading(true);

    setTimeout(() => {
      const hobbies = moodHobbies[mood];
      const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
      setSelectedHobby(randomHobby);
      setLoading(false);
    }, 1000); 
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Select Your Mood</h1>
      <div style={{ fontSize: '2em', margin: '20px' }}>
        <span
          role="img"
          aria-label="happy"
          style={{ margin: '10px', cursor: 'pointer' }}
          onClick={() => generateHobby('happy')}
        >
          😊
        </span>
        <span
          role="img"
          aria-label="calm"
          style={{ margin: '10px', cursor: 'pointer' }}
          onClick={() => generateHobby('calm')}
        >
          😌
        </span>
        <span
          role="img"
          aria-label="adventurous"
          style={{ margin: '10px', cursor: 'pointer' }}
          onClick={() => generateHobby('adventurous')}
        >
          🤩
        </span>
      </div>

      {loading ? (
        <p>Generating a hobby....</p>
      ) : selectedHobby ? (
        <h2>Do this hobby now!: {selectedHobby}</h2>
      ) : (
        <p>Select a mood to generate a hobby!</p>
      )}
    </div>
  );
};

export default MoodBasedHobbyGenerator;
