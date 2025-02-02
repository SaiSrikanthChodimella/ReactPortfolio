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
        `block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 rounded-lg ${
          isActive ? "font-semibold bg-blue-50 text-blue-600" : ""
        } ${isMobile ? "block" : "inline-block"}`
      }
      onClick={() => isMobile && setIsOpen(false)}
    >
      {item.title}
    </NavLink>
  );

  return (
    <nav className="bg-white w-full shadow-lg rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink
            to="/"
            className="text-2xl font-bold text-slate-600 hover:text-blue-700 transition duration-300"
          >
            My Portfolio
          </NavLink>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
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

          <div className="hidden md:flex space-x-4">
            {navigationLinks.map((item, idx) => renderNavLink(item, idx))}
          </div>
        </div>

        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <ul className="bg-white border-t border-gray-200 rounded-lg shadow-md py-2">
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
