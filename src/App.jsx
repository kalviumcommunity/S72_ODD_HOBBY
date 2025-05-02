import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import MoodBasedHobbyGenerator from './page/MoodBasedHobbyGenerator';
import AddEntityPage from './page/AddEntityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mood" element={<MoodBasedHobbyGenerator />} />
        <Route path="/add-entity" element={<AddEntityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
