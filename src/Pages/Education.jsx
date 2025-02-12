import FAU from "../assets/FAULogo.png";
import GITAM from "../assets/GitamLogo.jpg";

const universities = [
  {
    name: "FAU University",
    duration: "Sept 2021 - Present",
    location: "Erlangen, Germany",
    degree: "Master's in Artificial Intelligence",
    description:
      "In my Master's program at FAU University, I am currently focusing on advanced topics such as Human-Computer Interaction, AI Applications, and Mathematics. I am also incorporating AI tools to improve my productivity and efficiency. Currently, I am working on a project to build a SPAM Filter system, applying machine learning techniques to solve real-world problems.",
    image: FAU,
    link: "https://www.fau.de/",
  },
  {
    name: "GITAM University",
    duration: "Jul 2014 - May 2018",
    location: "Visakhapatnam, India",
    degree: "Bachelor's in Electronics and Communications Engineering",
    description:
      "During my Bachelor's program, I gained hands-on experience with C++, RDBMS, Data Structures and Algorithms, and AutoCAD. I also completed two internships, where I worked on projects involving RADARs and Patch Antennas, further enhancing my practical skills and technical knowledge.",
    image: GITAM,
    link: "https://www.gitam.edu/",
  },
];

function UniversityCard({
  name,
  duration,
  location,
  degree,
  description,
  image,
  link,
}) {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-gray-800 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl mb-8">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-10 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* University Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={image}
              alt={name}
              className="bg-white w-full max-w-md rounded-2xl shadow-lg border-4 border-opacity-25 border-white"
            />
          </div>

          {/* University Details */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 mb-4">
              {name}
            </h2>
            <p className="text-gray-300 mb-4">
              <strong className="text-sky-400">{duration}</strong>
              <br />
              {location}
              <br />
              <strong className="text-sky-400">{degree}</strong>
            </p>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="mt-6">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-8 py-3 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
              >
                Visit {name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-12 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-102 hover:shadow-3xl bento-box">
      <h2 className="text-4xl md:text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 mb-8 bento-box">
        Education
      </h2>
      {universities.map((uni, index) => (
        <div className="bento-box">
          <UniversityCard key={index} {...uni} />
        </div>
      ))}
    </div>
  );
}

export default Education;
