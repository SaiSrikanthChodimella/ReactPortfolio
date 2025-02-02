import Siemens from "../assets/Siemens_Healthineers.png";
import Accenture from "../assets/Accenture.png";

function WorkExperience() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-8 text-white rounded-xl shadow-lg transition-transform hover:scale-102 hover:shadow-2xl bento-box">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-8 md:mb-12 bento-box">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Professional Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Showcasing my journey through innovation and performance
            optimization
          </p>
        </header>

        {/* Experience Cards */}
        <div className="space-y-6">
          <ExperienceCard
            logo={Siemens}
            role="Software Engineer / Work Student"
            duration="Apr 2022 – Sep 2024"
            location="Forchheim, Germany"
            points={[
              "Developed features and modernized WinForms applications in an Agile environment, enhancing performance and user experience.",
              "Built a Digital Twin communication module to simulate real-world systems.",
              "Improved code readability and maintainability by applying SOLID and Clean coding principles.",
              "Integrated MVVM / MVC and various other Design patterns to increase code modularity and scalability.",
              "Resolved critical bugs, improving application stability, and expanding unit test coverage with NUnit and Moq.",
              "Utilized Azure DevOps and Git for CI/CD and version control.",
            ]}
          />

          <ExperienceCard
            logo={Accenture}
            role="Software Engineer"
            duration="Nov 2018 - Jul 2021"
            location="Hyderabad, India"
            points={[
              "Developed new Web pages for handling vouchers and discount campaigns.",
              "Built Automated reporting solutions to track and share sales figures across multiple retail locations.",
              "Automated repetitive tasks, saving up to 10 hours per week in manual effort.",
              "Designed and implemented secure Web APIs to support functionality for new retail shops.",
              "Rewrote SQL stored procedures and queries to improve performance and readability.",
              "Developed C# components to implement new business logic in a three-tier application, integrating with SQL Server through ADO.NET and Entity Framework.",
              "Enhanced code readability and maintainability by rewriting existing logic using LINQ.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ logo, role, duration, location, points }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg bento-box">
      {/* Card Header */}
      <div className="flex items-center gap-4 mb-4">
        {logo && <img src={logo} alt="Company Logo" className="h-10" />}
        <div className="text-slate-900">
          <p className="text-base md:text-lg font-semibold">{role}</p>
          <p className="text-xs md:text-sm text-gray-600">
            {duration} | {location}
          </p>
        </div>
      </div>

      {/* Card Content */}
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
export default WorkExperience;
