import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./Components/MainLayout.jsx";

import Footer from "./Components/Footer.jsx";
import Timeline from "./Components/Timeline.jsx";
import Navbar from "./Components/Navbar.jsx";

import AboutMe from "./Pages/AboutMe.jsx";
import Projects from "./Pages/Projects.jsx";
import WorkExperience from "./Pages/WorkExperience.jsx";
import Skills from "./Pages/Skills.jsx";
import Certifications from "./Pages/Certifications.jsx";
import Education from "./Pages/Education.jsx";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Navbar />
        <div className="p-6 rounded-lg shadow-md">
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route
              path="/"
              element={
                <>
                  <div className="container mx-auto">
                    <AboutMe />
                  </div>

                  <div className="container mx-auto px-6 py-12">
                    <WorkExperience />
                  </div>
                  <div className="container mx-auto px-6 py-12">
                    <Skills />
                  </div>
                  <div className="container mx-auto px-6 py-12">
                    <Certifications />
                  </div>
                  <div className="container mx-auto px-6 py-12">
                    <Projects />
                  </div>
                  <div className="container mx-auto px-6 py-12">
                    <Education />
                  </div>
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </MainLayout>
    </Router>
  );
};

export default App;
