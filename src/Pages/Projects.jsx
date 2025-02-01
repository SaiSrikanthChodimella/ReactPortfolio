import Monsters from "../assets/Project.png";
import UnderGoing from "../assets/Under_Construction.png";

function Projects() {
  return (
    <div className="text-white bg-gradient-to-r from-slate-900 to-gray-900 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-4xl text-center font-bold mb-8">Projects</h2>
      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Bento Box Card 1: Project Monster Builder */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src={Monsters}
            alt="Project Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Project Monster Builder
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Currently optimizing application performance and testing new UI
              component libraries.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start space-x-2">
                <span className="text-indigo-600">•</span>
                <p>
                  Developed <strong>RESTful API</strong> for backend and a{" "}
                  <strong>Blazor</strong> web app with{" "}
                  <strong>Bootstrap</strong> for frontend UI/UX.
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-indigo-600">•</span>
                <p>
                  Built APIs with <strong>ASP.NET Core Minimal API</strong>.
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-indigo-600">•</span>
                <p>
                  Implemented <strong>Unit</strong> and{" "}
                  <strong>Integration</strong> tests using{" "}
                  <strong>xUnit</strong> and <strong>Moq</strong>.
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-indigo-600">•</span>
                <p>
                  Integrated <strong>OAuth 2.0</strong> and{" "}
                  <strong>OpenID</strong> for Authentication/Authorization.
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-indigo-600">•</span>
                <p>
                  Used <strong>Entity Framework Core</strong> for{" "}
                  <strong>Azure SQL Database</strong>.
                </p>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Project Repo Link
              </a>
              <a
                href="https://monsterbuildermanager.azurewebsites.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Monster Builder Page
              </a>
            </div>
          </div>
        </div>

        {/* Bento Box Card 2: New Project Coming Soon */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src={UnderGoing}
            alt="Under Construction"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              New Project Coming Soon
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Currently in development phase.
            </p>
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-gray-700">
                Stay tuned for updates!
              </h5>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-600">•</span>
                  <p>Exciting new features on the way.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-600">•</span>
                  <p>Optimizing current development processes.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-600">•</span>
                  <p>New UI/UX features being designed.</p>
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
