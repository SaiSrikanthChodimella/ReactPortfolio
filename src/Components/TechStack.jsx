import React from "react";
import CSharp from "../assets/Icons/CSharp.png";
import HTML from "../assets/Icons/HTML.png";
import CSS from "../assets/Icons/CSS.png";
import NET from "../assets/Icons/NET_Core.png";
import MS_SQL from "../assets/Icons/MS_SQL_Server.png";
import JS from "../assets/Icons/JS.png";
import Tailwind from "../assets/Icons/TailwindCSS.png";
import Azure from "../assets/Icons/Azure.png";
import DevOps from "../assets/Icons/Azure_DevOps.png";
import Visual_Studio from "../assets/Icons/VisualStudio.png";
import Git from "../assets/Icons/Git.png";
import ReactIcon from "../assets/Icons/ReactJS.png";
import XUnit from "../assets/Icons/Xunit.png";
import NUnit from "../assets/Icons/Nunit.png";
import Moq from "../assets/Icons/Moq.png";

function TechStack() {
  const techStack = [
    { icon: CSharp, name: "C#" },
    { icon: HTML, name: "HTML" },
    { icon: CSS, name: "CSS" },
    { icon: NET, name: ".NET" },
    { icon: MS_SQL, name: "MS SQL" },
    { icon: JS, name: "JavaScript" },
    { icon: Tailwind, name: "Tailwind" },
    { icon: Azure, name: "Azure" },
    { icon: DevOps, name: "AzureDevOps" },
    { icon: Visual_Studio, name: "VisualStudio" },
    { icon: Git, name: "Git" },
    { icon: ReactIcon, name: "React" },
    { icon: XUnit, name: "XUnit" },
    { icon: NUnit, name: "NUnit" },
    { icon: Moq, name: "Moq" },
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="py-12 overflow-hidden text-white">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        {/* Scrolling Cards */}
        <div className="flex animate-infinite-scroll">
          {duplicatedTechStack.map((tech, index) => (
            <div
              key={index}
              className="bg-sky-900 flex-shrink-0 w-32 h-32 rounded-lg shadow-lg flex flex-col items-center justify-center mx-4 p-6 transform transition-transform hover:scale-105"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="mx-auto object-contain"
              />
              <p className="text-lg font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
