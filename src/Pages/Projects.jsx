import Monsters from "../assets/Project.png";
import UnderGoing from "../assets/Under_Construction.png";

function Projects() {
  return (
    <div className="p-8 bg-gradient-to-r from-slate-900 to-gray-900 rounded-xl shadow-lg text-white transform transition-transform hover:scale-102 hover:shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Monster Builder */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
          <img
            src={Monsters}
            alt="Project Monster Builder"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Project Monster Builder
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Currently optimizing application performance and testing new UI
              component libraries.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>
                <span className="text-indigo-600">•</span>
                Developed <strong>RESTful API</strong> for backend and a{" "}
                <strong>Blazor</strong> web app with <strong>Bootstrap</strong>{" "}
                for frontend UI/UX.
              </li>
              <li>
                <span className="text-indigo-600">•</span>
                Built APIs with <strong>ASP.NET Core Minimal API</strong>.
              </li>
              <li>
                <span className="text-indigo-600">•</span>
                Implemented <strong>Unit</strong> and{" "}
                <strong>Integration</strong> tests using <strong>xUnit</strong>{" "}
                and <strong>Moq</strong>.
              </li>
              <li>
                <span className="text-indigo-600">•</span>
                Integrated <strong>OAuth 2.0</strong> and{" "}
                <strong>OpenID</strong> for Authentication/Authorization.
              </li>
              <li>
                <span className="text-indigo-600">•</span>
                Used <strong>Entity Framework Core</strong> for{" "}
                <strong>Azure SQL Database</strong>.
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Project Repo Link
              </a>
              <a
                href="https://monsterbuildermanager.azurewebsites.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
              >
                Monster Builder Page
              </a>
            </div>
          </div>
        </div>

        {/* New Project Coming Soon */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
          <img
            src={UnderGoing}
            alt="Under Construction"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              New Project Coming Soon
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Currently in development phase.
            </p>
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-gray-700">
                Stay tuned for updates!
              </h5>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="text-indigo-600">•</span>
                  Exciting new features on the way.
                </li>
                <li>
                  <span className="text-indigo-600">•</span>
                  Optimizing current development processes.
                </li>
                <li>
                  <span className="text-indigo-600">•</span>
                  New UI/UX features being designed.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
