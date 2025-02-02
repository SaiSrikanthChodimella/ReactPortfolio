import myImage from "../assets/ProfileImage.png";
import TechStack from "../Components/TechStack";

export default function AboutMe() {
  return (
    <div className="bg-sky-800 p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:scale-102 hover:shadow-2xl">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Left Section: Centered Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={myImage}
            alt="Sai Srikanth Chodimella"
            className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl md:col-span-2 bento-box"
          />
        </div>

        {/* Right Section: Expanded Bento Box Layout */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Title */}
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl md:col-span-2 bento-box">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              Sai Srikanth Chodimella
            </h1>
          </div>

          {/* About Me */}
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl bento-box">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-100 mb-4">
              About Me
            </h2>
            <p className="text-sm md:text-base text-gray-200">
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
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl bento-box">
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

          {/* Call-to-Action Buttons */}
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl md:col-span-2 bento-box">
            <div className="flex flex-wrap gap-4 justify-center">
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
      </div>

      {/* Tech Stack Component */}
      <div className="mt-8 bg-gradient-to-r from-slate-900 to-gray-900 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl bento-box">
        <TechStack />
      </div>
    </div>
  );
}
