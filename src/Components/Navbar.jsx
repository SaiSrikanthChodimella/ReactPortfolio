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

  const handleScroll = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsOpen(false), 200); // Close menu after delay
    }
  };

  return (
    <>
      {/* Blur Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="fixed w-full z-50 bg-black backdrop-blur-md border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => handleScroll(refs.aboutRef)}
              className="text-[18px] font-semibold tracking-wide text-white hover:text-gray-300 transition-all duration-300"
            >
              Sai Srikanth Chodimella
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navigationLinks.map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleScroll(item.ref)}
                  className="text-[14px] font-medium text-white hover:text-gray-300 transition-all duration-300"
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2 text-white hover:text-gray-300 transition-all duration-300"
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
            className={`md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            } z-50 rounded-b-xl`}
          >
            <div className="px-6 py-4 space-y-2">
              {navigationLinks.map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleScroll(item.ref)}
                  className="block px-3 py-2 text-[15px] font-medium text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full text-left"
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
