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
    <div className="bg-sky-900 rounded-lg shadow-md transition-shadow hover:shadow-lg bento-box">
      <button
        onClick={onClick}
        className="w-full text-left p-4 md:p-6 flex justify-between items-center focus:outline-none"
      >
        <h3 className="text-xl md:text-2xl font-semibold">{skill.title}</h3>
        <span className="text-xl md:text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="bg-white text-slate-900 p-4 md:p-6 pt-0">
          <ul className="space-y-2 text-base md:text-lg">
            {skill.items.map((item, i) => (
              <li key={i}>{item}</li>
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
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-8 text-white rounded-xl shadow-lg transition-transform hover:scale-102 hover:shadow-2xl bento-box">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-6">
          Skills & Expertise
        </h2>
        <div className="space-y-4">
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
