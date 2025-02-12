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

const TechStack = () => (
  <div className="py-2 text-white">
    <SectionTitle title="Tech Stack" />
    <InfiniteScrollContainer>
      {duplicatedTechStack.map((tech, index) => (
        <TechCard key={index} icon={tech.icon} name={tech.name} />
      ))}
    </InfiniteScrollContainer>
  </div>
);

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
);

const InfiniteScrollContainer = ({ children }) => (
  <div className="overflow-hidden">
    <div className="flex animate-infinite-scroll space-x-4">{children}</div>
  </div>
);

const TechCard = ({ icon, name }) => (
  <div className="w-28 h-28 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 transform transition-transform hover:scale-105">
    <img src={icon} alt={name} className="w-16 h-16 object-contain" />
    <p className="text-lg font-semibold mt-2">{name}</p>
  </div>
);

export default TechStack;
