import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import MoodBasedHobbyGenerator from './page/MoodBasedHobbyGenerator';
import AddHobbies from './page/AddHobbiesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mood" element={<MoodBasedHobbyGenerator />} />
        <Route path="/add-hobbies" element={<AddHobbies />} />
      </Routes>
    </Router>
  );
}

export default App;
