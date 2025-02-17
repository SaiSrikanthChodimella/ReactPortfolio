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

export default function Education() {
  return (
    <section className="bg-gray-50/50 py-20 px-6 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-900 mb-4">
            Academic Journey
            <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A strong educational foundation fueling innovation and technical
            excellence
          </p>
        </div>

        <div className="grid gap-12">
          {universities.map((uni, index) => (
            <UniversityCard key={index} {...uni} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/80 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10 p-10">
        {/* University Image */}
        <div className="lg:w-1/3 flex flex-col items-center">
          <div className="relative w-64 h-64 rounded-xl bg-gray-50 p-6 shadow-inner border border-gray-100/50">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-6 flex gap-3">
            <span className="px-4 py-1.5 bg-gray-100/50 text-gray-600 text-sm font-medium rounded-full border border-gray-200/50">
              {duration}
            </span>
            <span className="px-4 py-1.5 bg-gray-100/50 text-gray-600 text-sm font-medium rounded-full border border-gray-200/50">
              {location}
            </span>
          </div>
        </div>

        {/* University Details */}
        <div className="lg:w-2/3 space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
              {name}
            </h2>
            <h3 className="text-xl font-medium text-gray-600">{degree}</h3>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-colors duration-300"
          >
            Visit University
            <svg
              className="w-4 h-4 ml-2"
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
        </div>
      </div>
    </div>
  );
}
