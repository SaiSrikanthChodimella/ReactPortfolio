import Siemens from "../assets/Siemens_Healthineers.png";
import Accenture from "../assets/Accenture.png";

const experiences = [
  {
    logo: Siemens,
    role: "Software Engineer / Work Student",
    duration: "Apr 2022 – Sep 2024",
    location: "Forchheim, Germany",
    points: [
      "Developed features and modernized WinForms applications in an Agile environment, enhancing performance and user experience.",
      "Built a Digital Twin communication module to simulate real-world systems.",
      "Improved code readability and maintainability by applying SOLID and Clean coding principles.",
      "Integrated MVVM / MVC and various other Design patterns to increase code modularity and scalability.",
      "Resolved critical bugs, improving application stability, and expanding unit test coverage with NUnit and Moq.",
      "Utilized Azure DevOps and Git for CI/CD and version control.",
    ],
  },
  {
    logo: Accenture,
    role: "Software Engineer",
    duration: "Nov 2018 - Jul 2021",
    location: "Hyderabad, India",
    points: [
      "Developed new Web pages for handling vouchers and discount campaigns.",
      "Built Automated reporting solutions to track and share sales figures across multiple retail locations.",
      "Automated repetitive tasks, saving up to 10 hours per week in manual effort.",
      "Designed and implemented secure Web APIs to support functionality for new retail shops.",
      "Rewrote SQL stored procedures and queries to improve performance and readability.",
      "Developed C# components to implement new business logic in a three-tier application, integrating with SQL Server through ADO.NET and Entity Framework.",
      "Enhanced code readability and maintainability by rewriting existing logic using LINQ.",
    ],
  },
];

function WorkExperience() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-12 rounded-3xl shadow-2xl bento-box">
      <div className="max-w-5xl mx-auto bento-box">
        <Header />
        <div className="space-y-8 bento-box">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
        Professional Experience
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mt-4">
        Showcasing my journey through innovation and performance optimization
      </p>
    </header>
  );
}

function ExperienceCard({ logo, role, duration, location, points }) {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-gray-800 rounded-3xl shadow-2xl p-6 md:p-8 transform transition-all duration-100 hover:scale-105 hover:shadow-3xl">
      <CardHeader
        logo={logo}
        role={role}
        duration={duration}
        location={location}
      />
      <CardContent points={points} />
    </div>
  );
}

function CardHeader({ logo, role, duration, location }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      {logo && (
        <img src={logo} alt="Company Logo" className="h-12 rounded-lg" />
      )}
      <div className="text-white">
        <p className="text-xl md:text-2xl font-semibold">{role}</p>
        <p className="text-sm md:text-base text-gray-300">
          {duration} | {location}
        </p>
      </div>
    </div>
  );
}

function CardContent({ points }) {
  return (
    <ul className="list-disc pl-6 space-y-3 text-gray-200">
      {points.map((point, index) => (
        <li key={index} className="text-sm md:text-base">
          {point}
        </li>
      ))}
    </ul>
  );
}

export default WorkExperience;
