import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calendar from './pages/Calendar';
import Volunteer from './pages/Volunteer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FestivalList from './pages/FestivalList';
import Homepage from './pages/Homepage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Function to set user as logged in
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const isVolunteerPage = location.pathname === '/volunteer';
  return (
    <Router>
      {!isVolunteerPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/folklore" element={<FestivalList />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/volunteer"
          element={isLoggedIn ? <Volunteer /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
