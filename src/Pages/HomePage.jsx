import AboutMe from "./AboutMe.jsx";
import WorkExperience from "./WorkExperience.jsx";
import Skills from "./Skills.jsx";
import Certifications from "./Certifications.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";

const HomePage = () => {
  return (
    <div className="space-y-6">
      <AboutMe />
      <WorkExperience />
      <Skills />
      <Certifications />
      <Projects />
      <Education />
    </div>
  );
};

export default HomePage;
