import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { title: "About Me", path: "/about" },
    { title: "Work Experience", path: "/work-experience" },
    { title: "Skills", path: "/skills" },
    { title: "Certifications", path: "/certifications" },
    { title: "Projects", path: "/projects" },
    { title: "Education", path: "/education" },
  ];

  const renderNavLink = (item, idx, isMobile = false) => (
    <NavLink
      key={idx}
      to={item.path}
      className={({ isActive }) =>
        `block px-4 py-3 text-gray-200 hover:bg-sky-700 hover:text-white transition duration-300 rounded-lg ${
          isActive
            ? "font-semibold bg-gradient-to-r from-sky-600 to-indigo-600 text-white"
            : ""
        } ${isMobile ? "block" : "inline-block"}`
      }
      onClick={() => isMobile && setIsOpen(false)}
    >
      {item.title}
    </NavLink>
  );

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-gray-900 w-full shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 hover:from-sky-500 hover:to-indigo-500 transition duration-300"
          >
            My Portfolio
          </NavLink>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-sky-400 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {navigationLinks.map((item, idx) => renderNavLink(item, idx))}
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <ul className="bg-gradient-to-r from-slate-800 to-gray-800 border-t border-gray-700 rounded-lg shadow-lg py-2">
            {navigationLinks.map((item, idx) => (
              <li key={idx}>{renderNavLink(item, idx, true)}</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
