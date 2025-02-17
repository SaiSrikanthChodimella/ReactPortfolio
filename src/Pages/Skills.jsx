import { useState } from "react";

const skillsData = [
  {
    title: "Programming Languages",
    items: ["C#", "SQL", "JavaScript", "XAML", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: [
      ".NET 8",
      ".NET Framework(4.x)",
      "React JS",
      "Bootstrap",
      "Tailwind",
      "Angular JS (Beginner)",
    ],
  },
  {
    title: ".NET Technologies",
    items: [
      "ASP.NET Core",
      "Entity Framework Core",
      "LINQ",
      "WPF",
      "Windows Forms",
      "MAUI",
      "Blazor",
    ],
  },
  { title: "Testing Frameworks", items: ["xUnit", "NUnit", "Moq"] },
  {
    title: "Development Tools & Libraries",
    items: [
      "Visual Studio",
      "SQL Server Management / Azure Data Studio",
      "CI/CD with Azure DevOps",
      "Azure Cloud Services",
      "Postman",
      "Git",
    ],
  },
  {
    title: "Spoken Languages",
    items: ["English (IELTS 7.0 – C1)", "German (Beginner)"],
  },
];

export default function SkillsSection() {
  const [openSkill, setOpenSkill] = useState(null);
  const toggleSkill = (index) =>
    setOpenSkill(openSkill === index ? null : index);

  return (
    <section className="bg-gray-50/50 py-20 px-6 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A diverse skillset driving impactful and future-ready digital
            solutions
          </p>
        </div>

        <div className="space-y-6">
          {skillsData.map((skill, index) => (
            <SkillItem
              key={index}
              skill={skill}
              isOpen={openSkill === index}
              onClick={() => toggleSkill(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill, isOpen, onClick }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/80">
      <button
        onClick={onClick}
        className="w-full text-left p-6 flex justify-between items-center focus:outline-none group"
      >
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
            {skill.title}
          </h3>
          {!isOpen && (
            <div className="flex flex-wrap gap-2">
              {skill.items.slice(0, 3).map((item, i) => (
                <span
                  key={i}
                  className="text-sm text-gray-600 bg-gray-100/50 px-3 py-1.5 rounded-full border border-gray-200/50"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="text-gray-500 group-hover:text-gray-700 transition-colors">
          <svg
            className={`w-6 h-6 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="p-6 pt-0 border-t border-gray-100/50">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skill.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start pl-3 space-x-3 text-gray-600"
              >
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
