import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";

import AboutMe from "./Pages/AboutMe.jsx";
import Projects from "./Pages/Projects.jsx";
import WorkExperience from "./Pages/WorkExperience.jsx";
import Skills from "./Pages/Skills.jsx";
import Certifications from "./Pages/Certifications.jsx";
import Education from "./Pages/Education.jsx";
import TechStack from "./Components/TechStack.jsx";

// Smooth fade-in animation when elements come into view
const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 500, friction: 25 },
  });

  return (
    <animated.div ref={ref} style={fadeIn} className="py-24">
      {children}
    </animated.div>
  );
};

const App = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
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

      {/* Background Parallax Effect with smoother, stronger layers */}
      <Parallax pages={3} className="absolute inset-0 -z-10">
        {/* Stronger and smoother background effect */}
        <ParallaxLayer
          offset={0}
          speed={-0.6} // Increased speed for stronger effect
          className="bg-gradient-to-b from-black via-gray-900 to-gray-800 h-screen"
        />
        <ParallaxLayer
          offset={1}
          speed={-0.4} // Slightly slower layer for smoother transition
          className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 h-screen"
        />
        <ParallaxLayer
          offset={2}
          speed={-0.2} // Even slower for smoother, subtle movement
          className="bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 h-screen"
        />
      </Parallax>

      {/* Content - Normal Scrolling */}
      <div className="flex-grow p-6 md:p-8 lg:p-12">
        <div ref={aboutRef}>
          <FadeInSection>
            <AboutMe />
          </FadeInSection>
        </div>

        <div>
          <FadeInSection>
            <TechStack />
          </FadeInSection>
        </div>

        <div ref={experienceRef}>
          <FadeInSection>
            <WorkExperience />
          </FadeInSection>
        </div>

        <div ref={skillsRef}>
          <FadeInSection>
            <Skills />
          </FadeInSection>
        </div>

        <div ref={certificationsRef}>
          <FadeInSection>
            <Certifications />
          </FadeInSection>
        </div>

        <div ref={projectsRef}>
          <FadeInSection>
            <Projects />
          </FadeInSection>
        </div>

        <div ref={educationRef}>
          <FadeInSection>
            <Education />
          </FadeInSection>
        </div>

        <div ref={contactRef}>
          <FadeInSection>
            <Footer />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default App;
