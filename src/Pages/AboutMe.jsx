import myImage from "../assets/ProfileImage.png";
import TechStack from "../Components/TechStack";

export default function AboutMe() {
  return (
    <div className="bg-gradient-to-r from-sky-900 to-indigo-900 p-6 md:p-12 rounded-3xl shadow-2xl bento-box">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center bento-box">
        {/* Left Section: Profile Image and Quote */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 bento-box">
          <ProfileImage />
          <ProfessionalQuote />
        </div>

        {/* Right Section: Information and Skills */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 bento-box">
          <NameTitle />
          <AboutDescription />
          <KeySkills />
          <CallToAction />
        </div>
      </div>

      {/* Tech Stack Component */}
      <div className="mt-12 bg-gradient-to-r from-slate-900 to-gray-900 rounded-3xl shadow-2xl bento-box">
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
        className="w-64 h-64 object-cover rounded-3xl shadow-2xl transform transition-all duration-100 hover:scale-105 hover:shadow-3xl border-4 border-opacity-25"
      />
    </div>
  );
}

function ProfessionalQuote() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-3xl shadow-2xl transform transition-all duration-100 hover:scale-105 hover:shadow-3xl">
      <blockquote className="text-gray-200 italic text-center text-lg">
        "I believe in keeping things <strong>neat</strong>,{" "}
        <strong>clean</strong>, and <strong>straightforward</strong> — it makes
        things less complicated and more enjoyable."
      </blockquote>
      <div className="bg-white bg-opacity-10 p-6 rounded-2xl shadow-md mt-4 transform transition-all duration-100 hover:scale-105 hover:shadow-2xl">
        <blockquote className="text-lg italic text-center">
          "Simplicity is the key to brilliance."
        </blockquote>
        <cite className="block text-sm text-center mt-2">— Bruce Lee</cite>
      </div>
    </div>
  );
}

function NameTitle() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-3xl shadow-2xl transform transition-all duration-100 hover:scale-105 hover:shadow-3xl md:col-span-2">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
        Sai Srikanth Chodimella
      </h1>
    </div>
  );
}

function AboutDescription() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-3xl shadow-2xl transform transition-all duration-100 hover:scale-105 hover:shadow-3xl">
      <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-4">
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
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-3xl shadow-2xl transform transition-all duration-100 hover:scale-105 hover:shadow-3xl">
      <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-4">
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
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-3xl shadow-2xl transform transition-all duration-100 hover:scale-105 hover:shadow-3xl md:col-span-2">
      <div className="flex flex-wrap gap-4 justify-center">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-8 py-3 rounded-2xl shadow-lg transform transition-all duration-100 hover:scale-110 hover:shadow-2xl"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}
