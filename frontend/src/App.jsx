import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MoodBasedHobbyGenerator from './pages/MoodBasedHobbyGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mood" element={<MoodBasedHobbyGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
