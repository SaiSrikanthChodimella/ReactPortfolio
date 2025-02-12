import Monsters from "../assets/Project.png";
import UnderGoing from "../assets/Under_Construction.png";
import Resume from "../assets/Resume.png";
import Programming from "../assets/Programming.png";

const projectData = [
  {
    img: Monsters,
    title: "Project Monster Builder",
    description:
      "Currently optimizing application performance and testing new UI component libraries.",
    details: [
      "Developed RESTful API for backend and a Blazor web app with Bootstrap for frontend UI/UX.",
      "Built APIs with ASP.NET Core Minimal API.",
      "Implemented Unit and Integration tests using xUnit and Moq.",
      "Integrated OAuth 2.0 and OpenID for Authentication/Authorization.",
      "Used Entity Framework Core for Azure SQL Database.",
    ],
    links: [
      {
        text: "Project Repo",
        href: "https://dev.azure.com/srikanthchodimella/MonsterBuilder",
        color: "blue",
      },
      {
        text: "Live Page",
        href: "https://monsterbuildermanager.azurewebsites.net",
        color: "green",
      },
    ],
  },
  {
    img: Resume,
    title: "Portfolio Web Page in .NET Ecosystem",
    description:
      "Utilized Microsoft Technologies to build this Portfolio Web Page.",
    details: [
      "Utilized Bootstrap for quick and responsive design.",
      "Utilized Animate.CSS for smooth animations.",
      "Sourcecode hosted on Azure DevOps.",
      "Deployed on Azure App Service.",
    ],
    links: [
      {
        text: "Portfolio Repo",
        href: "https://dev.azure.com/srikanthchodimella/MonsterBuilder/_git/Portfolio%20WebSite",
        color: "blue",
      },
      {
        text: "Live Page",
        href: "https://saisrikanthchodimella.azurewebsites.net/",
        color: "green",
      },
    ],
  },
  {
    img: Programming,
    title: "C# .NET Notes",
    description: "A C# .NET Handbook",
    details: [
      "Built using React Java Script",
      "Utilized Taiwlind CSS 4.0.3 ",
      "in Beta Phase",
      "Hosted on GitHub Pages",
    ],
    links: [
      {
        text: "Site Repo",
        href: "https://github.com/SaiSrikanthChodimella/LearnCSharp",
        color: "blue",
      },
      {
        text: "Live Page",
        href: "https://saisrikanthchodimella.github.io/LearnCSharp/",
        color: "green",
      },
    ],
  },
  {
    img: UnderGoing,
    title: "New Project Coming Soon",
    description: "Currently in development phase.",
    details: [
      "Exciting new features on the way.",
      "Optimizing current development processes.",
      "New UI/UX features being designed.",
    ],
    links: [],
  },
];

function ProjectCard({ project }) {
  return (
    <div className="flex-shrink-0 w-full sm:w-80 md:w-96 bg-gradient-to-r from-slate-800 to-gray-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 flex flex-col">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-48 object-cover bento-box"
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
        <ul className="space-y-2 text-gray-300 flex-grow">
          {project.details.map((detail, index) => (
            <li key={index}>
              <span className="text-sky-400">•</span> {detail}
            </li>
          ))}
        </ul>
        {project.links.length > 0 && (
          <div className="flex justify-center gap-4 mt-4">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl`}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="p-8 bg-gradient-to-r from-slate-900 to-gray-900 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-102 hover:shadow-3xl bento-box">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 mb-8 bento-box">
        Projects
      </h2>
      <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-gray-800 bento-box">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
