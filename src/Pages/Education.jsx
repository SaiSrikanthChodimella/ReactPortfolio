import FAU from "../assets/FAULogo.png";
import GITAM from "../assets/GitamLogo.jpg";

function Education() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-8 text-white rounded-xl shadow-lg transition-transform hover:scale-102 hover:shadow-2xl">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
        Education
      </h2>

      {/* FAU University Card */}
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105 mb-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={FAU}
                alt="FAU University"
                className="w-full max-w-md rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                FAU University
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>Sept 2021 - Present</strong>
                <br />
                Erlangen, Germany
                <br />
                <strong>Master's in Artificial Intelligence</strong>
              </p>
              <p className="text-gray-600 mb-4">
                In my Master's program at FAU University, I am currently
                focusing on advanced topics such as{" "}
                <strong>Human-Computer Interaction</strong>,{" "}
                <strong>AI Applications</strong>, and{" "}
                <strong>Mathematics</strong>. I am also incorporating AI tools
                to improve my productivity and efficiency. Currently, I am
                working on a project to build a <strong>SPAM Filter</strong>{" "}
                system, applying machine learning techniques to solve real-world
                problems.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.fau.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-sky-900 text-white px-6 py-2 rounded-md shadow-md hover:scale-105 transition-transform"
                >
                  Visit FAU University
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GITAM University Card */}
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                GITAM University
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>Jul 2014 - May 2018</strong>
                <br />
                Visakhapatnam, India
                <br />
                <strong>
                  Bachelor's in Electronics and Communications Engineering
                </strong>
              </p>
              <p className="text-gray-600 mb-4">
                During my Bachelor's program, I gained hands-on experience with
                <strong> C++</strong>, <strong>RDBMS</strong>,{" "}
                <strong>Data Structures and Algorithms</strong>, and{" "}
                <strong>AutoCAD</strong>. I also completed two internships,
                where I worked on projects involving <strong>RADARs</strong> and{" "}
                <strong>Patch Antennas</strong>, further enhancing my practical
                skills and technical knowledge.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.gitam.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-sky-900 text-white px-6 py-2 rounded-md shadow-md hover:scale-105 transition-transform"
                >
                  Visit GITAM University
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={GITAM}
                alt="GITAM University"
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
