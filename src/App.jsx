import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Volunteer from "./pages/Volunteer";
import Login from "./pages/Login";
import FestivalList from "./pages/FestivalList"; // Import the FestivalList component

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {/* Render Navbar only if not on the Login page */}
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/folklore" element={<FestivalList />} /> {/* Add route for FestivalList */}
      </Routes>
    </>
  );
};

// Wrapping App in Router to manage routing
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
