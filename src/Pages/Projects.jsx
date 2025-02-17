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

export default function Projects() {
  return (
    <section className="bg-gray-50/90 py-24 px-6 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-semibold text-gray-900 mb-4">
            Projects
            <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building cutting-edge solutions with modern engineering and
            innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-gray-900 hover:text-white rounded-2xl hover:bg-gray-900 transition-all duration-300 group"
          >
            Explore All Projects
            <svg
              className="w-5 h-5 ml-3 opacity-0 group-hover:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200/80 h-full flex flex-col overflow-hidden">
      <div className="p-6 bg-gray-50 border-b border-gray-200/50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-48 object-contain mx-auto transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{project.description}</p>
        </div>

        <ul className="space-y-4 flex-grow">
          {project.details.map((detail, index) => (
            <li
              key={index}
              className="flex items-start space-x-4 text-gray-600"
            >
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
              </div>
              <span className="flex-1">{detail}</span>
            </li>
          ))}
        </ul>

        {project.links.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-2.5 text-sm font-medium text-gray-900 rounded-xl bg-gray-100/50 hover:bg-gray-100 transition-colors border border-gray-200/50"
              >
                {link.text}
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 p-4 rounded-xl border-2 border-dashed border-gray-200/80">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Exciting updates in development
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
