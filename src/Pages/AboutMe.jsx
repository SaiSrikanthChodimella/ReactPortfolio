import myImage from "../assets/ProfileImage.png";
import TechStack from "../Components/TechStack";

export default function AboutMe() {
  return (
    <div className="bg-sky-800 p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:scale-102 hover:shadow-2xl">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Left Section: Profile Image and Quote */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <ProfileImage />
          <ProfessionalQuote />
        </div>

        {/* Right Section: Information and Skills */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <NameTitle />
          <AboutDescription />
          <KeySkills />
          <CallToAction />
        </div>
      </div>

      {/* Tech Stack Component */}
      <div className="mt-8 bg-gradient-to-r from-slate-900 to-gray-900 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl bento-box">
        <TechStack />
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="flex justify-center">
      <img
        src={myImage}
        alt="Sai Srikanth Chodimella"
        className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl"
      />
    </div>
  );
}

function ProfessionalQuote() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
      <blockquote className="text-gray-200 italic text-center">
        "I believe in keeping things <strong>neat</strong>,{" "}
        <strong>clean</strong>, and <strong>straightforward</strong> — it makes
        things less complicated and more enjoyable."
      </blockquote>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4 transition-transform hover:scale-105 hover:shadow-2xl">
        <blockquote className="text-lg italic text-center">
          "Simplicity is the key to brilliance."
        </blockquote>
        <cite className="block text-sm text-gray-700 text-center mt-2">
          — Bruce Lee
        </cite>
      </div>
    </div>
  );
}

function NameTitle() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl md:col-span-2">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white">
        Sai Srikanth Chodimella
      </h1>
    </div>
  );
}

function AboutDescription() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-xl md:text-2xl font-bold text-indigo-100 mb-4">
        About Me
      </h2>
      <p className="text-sm md:text-base text-gray-200">
        Experienced <strong>.NET Developer</strong> with close to{" "}
        <strong>5 years</strong> of expertise in designing and developing
        scalable, high-quality solutions across{" "}
        <strong>Web, Microservices, Mobile, and Desktop applications</strong>.
        Skilled in delivering innovative projects following industry-standard
        guidelines and best practices.
      </p>
    </div>
  );
}

function KeySkills() {
  const skills = [
    "Proficient in C#, .NET, and ASP.NET Core.",
    "Good with Full Stack and Backend Development.",
    "Experience with Azure Cloud Services and DevOps.",
    "Skilled in building RESTful APIs and Microservices.",
    "Strong knowledge of Entity Framework Core and SQL.",
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl md:text-2xl font-semibold text-indigo-100 mb-4">
        Key Skills:
      </h3>
      <ul className="list-disc list-inside text-gray-200 space-y-2">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function CallToAction() {
  const links = [
    {
      href: "https://www.linkedin.com/in/sai-srikanth-chodimella/",
      text: "LinkedIn",
    },
    {
      href: "https://dev.azure.com/srikanthchodimella/MonsterBuilder",
      text: "Azure Repo",
    },
    {
      href: "https://roadmap.sh/r/my-roadmap-as-net-developer",
      text: "My Road Map",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl md:col-span-2">
      <div className="flex flex-wrap gap-4 justify-center">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-900 text-white px-6 py-2 rounded-md shadow-md transition-transform hover:scale-105"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}
