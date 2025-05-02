import React from 'react';
import '/styles/LandingPage.css';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleAddHobbiesClick = () => {
    navigate('/add-hobbies');
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Odd Hobby Generator</h1>
        <p>Discover quirky and unconventional hobbies at the press of a button!</p>
        <Button />
        <button
          onClick={handleAddHobbiesClick}
          style={{
            backgroundColor: 'orange',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginLeft: '10px',
          }}
        >
          Add your hobbies
        </button>
      </header>
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Generate unique hobbies with a single click.</li>
          <li>Explore fun and creative activities.</li>
        </ul>
      </section>
      <footer className="footer">
        <p>Built with using React, Node.js and MongoDB</p>
      </footer>
    </div>
  );
};

export default LandingPage;
