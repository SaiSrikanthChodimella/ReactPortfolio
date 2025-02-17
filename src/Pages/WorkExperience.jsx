import Siemens from "../assets/Siemens_Healthineers.png";
import Accenture from "../assets/Accenture.png";

const experiences = [
  {
    logo: Siemens,
    role: "Software Engineer / Work Student",
    duration: "Apr 2022 – Sep 2024",
    location: "Forchheim, Germany",
    points: [
      "Implemented a Recently Used Files menu to enhance workflow efficiency",
      "Redesigned forms for a fully responsive user interface",
      "Refactored and optimized code using SOLID principles, MVVM/MVC, and design patterns, improving maintainability and scalability",
      " and resolved critical bugs while increasing unit test coverage with NUnit and Moq, enhancing stability.",
      "Developed a Digital Twin communication module to support real-world system simulations for better testing and validation.",
      "Optimized 3D CAD models to improve rendering efficiency and seamless integration with simulations.",
    ],
  },
  {
    logo: Accenture,
    role: "Software Engineer",
    duration: "Nov 2018 - Jul 2021",
    location: "Hyderabad, India",
    points: [
      "Developed Web pages to manage vouchers and discount campaigns, improving promotional workflows.",
      "Built an Automated reporting system to track and share sales figures across multiple retail locations",
      "Automated repetitive tasks, reducing manual effort by 10 hours per week.",
      "Designed and implemented secure Web APIs to support new retail shop integrations.",
      "Optimized SQL stored procedures and queries for better performance and readability.",
      "Developed C# components for a three-tier application, integrating with SQL Server using ADO.NET and Entity Framework.",
      "Improved code maintainability by rewriting existing logic using LINQ.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="bg-gray-50/90 py-24 px-6 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <Header />
        <div className="mt-16 grid gap-12">
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
    <header className="text-center mb-20">
      <h1 className="text-5xl font-semibold text-gray-900 mb-4">
        Career Highlights & Achievements
        <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
      </h1>
      <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
        Driving innovation through technical expertise, problem-solving, and
        continuous learning
      </p>
    </header>
  );
}

function ExperienceCard({ logo, role, duration, location, points }) {
  return (
    <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Company Logo Section */}
        <div className="md:w-1/3 p-10 bg-gray-50 border-r border-gray-200 flex flex-col items-center">
          <div className="relative w-48 h-48 rounded-2xl bg-white shadow-lg p-6 transform transition-all duration-300 group-hover:scale-105">
            <img
              src={logo}
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm font-medium text-gray-900 bg-gray-100 rounded-full px-4 py-2">
              {duration}
            </p>
            <p className="text-sm text-gray-500 font-medium">{location}</p>
          </div>
        </div>

        {/* Role Details */}
        <div className="md:w-2/3 p-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">{role}</h2>
          <ul className="space-y-8">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start space-x-6 animate-fade-in"
              >
                <div className="flex-shrink-0 mt-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {point}
                  {/* {index % 2 === 0 && (
                    <span className="ml-4 px-3 py-1.5 bg-blue-100/50 text-blue-600 text-sm font-medium rounded-full">
                      {index === 0
                        ? "Agile"
                        : index === 2
                        ? "SOLID"
                        : index === 4
                        ? "Azure DevOps"
                        : ".NET"}
                    </span>
                  )} */}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
