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
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105 mb-8 bento-box">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bento-box">
        <div className="flex flex-col lg:flex-row items-center gap-8 bento-box">
          <div className="w-full lg:w-1/2 bento-box">
            <img
              src={image}
              alt={name}
              className="w-full max-w-md rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {name}
            </h2>
            <p className="text-gray-600 mb-4">
              <strong>{duration}</strong>
              <br />
              {location}
              <br />
              <strong>{degree}</strong>
            </p>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="mt-6">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sky-900 text-white px-6 py-2 rounded-md shadow-md hover:scale-105 transition-transform"
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
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-8 text-white rounded-xl shadow-lg transition-transform hover:scale-102 hover:shadow-2xl bento-box">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
        Education
      </h2>
      {universities.map((uni, index) => (
        <UniversityCard key={index} {...uni} />
      ))}
    </div>
  );
}

export default Education;
