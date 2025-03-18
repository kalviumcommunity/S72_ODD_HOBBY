import React from 'react';
import '/styles/LandingPage.css';
import Button from '../components/button';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Odd Hobby Generator</h1>
        <p>Discover quirky and unconventional hobbies at the press of a button!</p>
        <Button />
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
