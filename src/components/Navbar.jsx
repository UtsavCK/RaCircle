import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseStyle =
    "uppercase font-semibold text-sm tracking-wide border-b-2";
  const activeStyle = "text-teal-600 border-teal-600";
  const inactiveStyle =
    "text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-400";

  return (
    <nav className="bg-white px-4 py-2 shadow-md w-full">
      <div className="flex justify-center space-x-8">
        <NavLink
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
          to="/calendar"
        >
          Calendar
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
          to="/volunteer"
        >
          Volunteer
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
          to="/folklore"
        >
          Folklore
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
