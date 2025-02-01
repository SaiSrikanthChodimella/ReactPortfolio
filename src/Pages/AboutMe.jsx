import myImage from "../assets/ProfilePicture.png";
import TechStack from "../Components/TechStack";

export default function AboutMe() {
  return (
    <div className="bg-sky-800 p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:scale-102 hover:shadow-2xl">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Section: Text Content */}
        <div className="space-y-6">
          {/* Name Title */}
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Sai Srikanth Chodimella
            </h1>
          </div>

          {/* About Me */}
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-100 mb-4">
              About Me
            </h2>
            <p className="text-base md:text-lg text-gray-200">
              Experienced <strong>.NET Developer</strong> with close to{" "}
              <strong>5 years</strong> of expertise in designing and developing
              scalable, high-quality solutions across{" "}
              <strong>
                Web, Microservices, Mobile, and Desktop applications
              </strong>
              . Skilled in delivering innovative projects following
              industry-standard guidelines and best practices.
            </p>
          </div>

          {/* Key Skills */}
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-100 mb-4">
              Key Skills:
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>
                Proficient in <strong>C#</strong>, <strong>.NET</strong>, and{" "}
                <strong>ASP.NET Core</strong>.
              </li>
              <li>
                Good with <strong>Full stack</strong> and{" "}
                <strong>Backend</strong> Development.
              </li>
              <li>
                Experience with <strong>Azure Cloud</strong> Services and{" "}
                <strong>DevOps</strong>.
              </li>
              <li>
                Skilled in building <strong>RESTful APIs</strong> and{" "}
                <strong>Microservices</strong>.
              </li>
              <li>
                Strong knowledge of <strong>Entity Framework Core</strong> and{" "}
                <strong>SQL</strong>.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Image and Buttons */}
        <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
          {/* Profile Image */}
          <img
            src={myImage}
            alt="Sai Srikanth Chodimella"
            className="rounded-lg shadow-2xl border-4 border-slate-800 w-full max-w-xs md:max-w-sm mx-auto transition-transform hover:scale-105"
          />

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/sai-srikanth-chodimella/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-900 text-white px-6 py-2 rounded-md shadow-md transition-transform hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-900 text-white px-6 py-2 rounded-md shadow-md transition-transform hover:scale-105"
            >
              Azure Repo
            </a>
            <a
              href="https://roadmap.sh/r/my-roadmap-as-net-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-900 text-white px-6 py-2 rounded-md shadow-md transition-transform hover:scale-105"
            >
              My Road Map
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Component */}
      <div className="mt-8 bg-gradient-to-r from-slate-900 to-gray-900 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
        <TechStack />
      </div>
    </div>
  );
}
