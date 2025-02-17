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

// Duplicate the array for infinite scrolling
const duplicatedTechStack = [...techStack, ...techStack];

export default function TechStack() {
  return (
    <section className="bg-gray-50/90 backdrop-blur-lg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-900 mb-4">
            Technology Stack & Expertise
            <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Empowering digital innovation with cutting-edge tools and
            technologies
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll gap-8 hover:animation-pause">
            {duplicatedTechStack.map((tech, index) => (
              <TechCard key={index} icon={tech.icon} name={tech.name} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50/90 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50/90 to-transparent" />
        </div>
      </div>
    </section>
  );
}

const TechCard = ({ icon, name }) => (
  <div className="group w-48 h-48 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/80 flex flex-col items-center justify-center p-6">
    <div className="relative w-24 h-24 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50">
      <img
        src={icon}
        alt={name}
        className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <p className="mt-4 text-lg font-medium text-gray-900">{name}</p>
  </div>
);
