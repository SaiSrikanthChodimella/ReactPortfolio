import React, { useState } from "react";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { title: "About", ref: refs.aboutRef },
    { title: "Experience", ref: refs.experienceRef },
    { title: "Skills", ref: refs.skillsRef },
    { title: "Certifications", ref: refs.certificationsRef },
    { title: "Projects", ref: refs.projectsRef },
    { title: "Education", ref: refs.educationRef },
    { title: "Contact", ref: refs.contactRef },
  ];

  return (
    <>
      {/* Blur Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)} // Close menu when clicking outside
        />
      )}

      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection(refs.aboutRef)} // Scroll to top (About section)
              className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Sai Srikanth Chodimella
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navigationLinks.map((item) => (
                <button
                  key={item.title}
                  onClick={() => {
                    scrollToSection(item.ref);
                    setIsOpen(false); // Close mobile menu after clicking
                  }}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 focus:outline-none transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed inset-x-0 top-16 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            } z-50`}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navigationLinks.map((item) => (
                <button
                  key={item.title}
                  onClick={() => {
                    scrollToSection(item.ref);
                    setIsOpen(false); // Close mobile menu after clicking
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors w-full text-left"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
