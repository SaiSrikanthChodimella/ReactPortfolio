import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./Components/MainLayout.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";

import AboutMe from "./Pages/AboutMe.jsx";
import Projects from "./Pages/Projects.jsx";
import WorkExperience from "./Pages/WorkExperience.jsx";
import Skills from "./Pages/Skills.jsx";
import Certifications from "./Pages/Certifications.jsx";
import Education from "./Pages/Education.jsx";
import HomePage from "./Pages/HomePage.jsx"; // New HomePage component

const App = () => {
  return (
    <Router basename="/ReactPortfolio">
      <MainLayout>
        <Navbar />
        <div className="flex-grow p-6 md:p-8 lg:p-12">
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </MainLayout>
    </Router>
  );
};

export default App;
