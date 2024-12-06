import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-xl font-bold text-gray-800">
            RaCircle
          </NavLink>
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/calendar"
              className="ml-20 text-gray-700 hover:text-red-500"
              activeClassName="font-bold text-red-500" // Active styling
            >
              Calendar
            </NavLink>
            <NavLink
              to="/folklore"
              className="text-gray-700 hover:text-red-500"
              activeClassName="font-bold text-red-500"
            >
              Folklores
            </NavLink>
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/login"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <button className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-100 transition">
              Log in
            </button>
          </NavLink>
          <NavLink to="/signup" className="text-white">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Sign up
            </button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
