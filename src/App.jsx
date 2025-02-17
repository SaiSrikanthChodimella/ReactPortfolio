import { useRef } from "react";

import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";

import AboutMe from "./Pages/AboutMe.jsx";
import Projects from "./Pages/Projects.jsx";
import WorkExperience from "./Pages/WorkExperience.jsx";
import Skills from "./Pages/Skills.jsx";
import Certifications from "./Pages/Certifications.jsx";
import Education from "./Pages/Education.jsx";

const App = () => {
  // Create refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          aboutRef,
          experienceRef,
          skillsRef,
          certificationsRef,
          projectsRef,
          educationRef,
          contactRef,
        }}
      />
      <div className="flex-grow p-6 md:p-8 lg:p-12">
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={experienceRef}>
          <WorkExperience />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={certificationsRef}>
          <Certifications />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
