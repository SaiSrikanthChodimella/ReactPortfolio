import { useState } from "react";

const skillsData = [
  {
    title: "Programming Languages",
    items: ["C#", "SQL", "XAML", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks",
    items: [".NET 8", ".NET Framework", "Angular (Beginner)"],
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
      "React",
    ],
  },
  {
    title: "Spoken Languages",
    items: ["English (IELTS 7.0 – C1)", "German (Beginner)"],
  },
];

function SkillItem({ skill, isOpen, onClick }) {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-gray-800 rounded-2xl shadow-lg transform transition-all duration-100 hover:scale-105 hover:shadow-2xl">
      <button
        onClick={onClick}
        className="w-full text-left p-6 md:p-8 flex justify-between items-center focus:outline-none"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
          {skill.title}
        </h3>
        <span className="text-2xl md:text-3xl text-gray-300">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="bg-gradient-to-r from-slate-700 to-gray-700 text-gray-200 p-6 md:p-8 pt-0 rounded-b-2xl">
          <ul className="space-y-3 text-base md:text-lg">
            {skill.items.map((item, i) => (
              <li key={i} className="flex items-center">
                <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function SkillsSection() {
  const [openSkill, setOpenSkill] = useState(null);
  const toggleSkill = (index) =>
    setOpenSkill(openSkill === index ? null : index);

  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-12 rounded-3xl shadow-2xl bento-box">
      <div className="max-w-7xl mx-auto px-4 md:px-6 bento-box">
        <h2 className="text-4xl md:text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 mb-8 bento-box">
          Skills & Expertise
        </h2>
        <div className="space-y-6 bento-box">
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
    </div>
  );
}

export default SkillsSection;
