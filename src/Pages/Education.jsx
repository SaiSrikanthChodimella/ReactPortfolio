import FAU from "../assets/FAULogo.png";
import GITAM from "../assets/GitamLogo.jpg";

function Education() {
  return (
    <div className="text-white bg-gradient-to-r from-slate-900 to-gray-900 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
      {/* Section Title */}
      <h2 className="text-4xl text-center font-bold mb-8">Education</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* FAU University Card */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="p-6 flex flex-col items-center text-center">
            {/* University Logo */}
            <img src={FAU} alt="FAU Logo" />

            {/* University Name */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              FAU University
            </h3>

            {/* University Details */}
            <p className="text-gray-600 mb-4">
              <strong>Sept 2021 - Present</strong>
              <br />
              Erlangen, Germany
              <br />
              Artificial Intelligence
              <br />
              Master's degree
            </p>

            {/* University Link */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.fau.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-900 text-lg font-semibold text-white-600 px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:scale-105"
              >
                University Link
              </a>
            </div>
          </div>
        </div>

        {/* GITAM University Card */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="p-6 flex flex-col items-center text-center">
            {/* University Logo */}
            <img src={GITAM} alt="GITAM University Logo" />

            {/* University Name */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              GITAM University
            </h3>

            {/* University Details */}
            <p className="text-gray-600 mb-4">
              <strong>Jul 2014 - May 2018</strong>
              <br />
              Visakhapatnam, India
              <br />
              Electronics and Communications Engineering
              <br />
              Bachelor's degree
              <br />
              <strong>CGPA 7.03</strong>
            </p>

            {/* University Link */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.gitam.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-900 text-lg font-semibold text-white-600 px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:scale-105"
              >
                University Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
