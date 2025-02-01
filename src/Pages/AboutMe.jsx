import myImage from "../assets/ProfilePicture.png";
import TechStack from "../Components/TechStack";
import Timeline from "../Components/Timeline";

export default function AboutMe() {
  return (
    <div className="bg-sky-800 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Text Content */}
        <div className="space-y-6">
          {/* Name Title */}
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h1 className="text-5xl font-extrabold leading-tight text-white">
              Sai Srikanth Chodimella
            </h1>
          </div>

          {/* About Me */}
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-indigo-100">About Me</h2>
            <p className="text-lg text-gray-200">
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
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-indigo-100 mb-4">
              Key Skills:
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>
                Proficient in <strong>C# </strong>, <strong>.NET</strong>, and{" "}
                <strong>ASP.NET Core</strong>.
              </li>
              <li>
                Good with <strong>Full stack </strong> and{" "}
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

        {/* Right Section: Image */}
        <div className="text-white flex flex-col items-center bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          {/* Profile Image */}
          <img
            src={myImage}
            alt="Sai Srikanth Chodimella"
            className="rounded-lg shadow-2xl border-4 object-cover transition-transform transform hover:scale-105 hover:shadow-xl w-96 h-96"
          />

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/sai-srikanth-chodimella/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-900 text-lg font-semibold text-white-600 px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-900 text-lg font-semibold text-white-600 px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:scale-105"
            >
              Azure Repo
            </a>
            <a
              href="https://roadmap.sh/r/my-roadmap-as-net-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-900 text-lg font-semibold text-white-600 px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:scale-105"
            >
              My Road Map
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-gradient-to-r from-slate-900 to-gray-900 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
        <TechStack />
      </div>
      {/* Tech Stack Component */}
    </div>
  );
}
