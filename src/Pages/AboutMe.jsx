import myImage from "../assets/ProfileImage.png";
import TechStack from "../Components/TechStack";

export default function AboutMe() {
  return (
    <div className="bg-gray-50/90 py-20 backdrop-blur-lg min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-all duration-300" />
            <div className="relative z-10 bg-white rounded-2xl shadow-lg p-6 border border-gray-100/50">
              <ProfileImage />
            </div>
          </div>

          <div className="space-y-8">
            <NameTitle />
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100/50">
              <AboutDescription />
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100/50">
            <ProfessionalQuote />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100/50">
            <KeySkills />
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100/50">
          <CallToAction />
        </div>

        {/* Tech Stack */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100/50">
          <TechStack />
        </div>
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <img
      src={myImage}
      alt="Sai Srikanth Chodimella"
      className="w-full h-auto object-cover rounded-xl border-4 border-gray-100 hover:border-blue-600 transition-all duration-300"
    />
  );
}

function ProfessionalQuote() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
        Development Philosophy
      </h2>
      <div className="space-y-6">
        <blockquote className="text-gray-600 text-lg leading-relaxed border-l-4 border-blue-600 pl-6">
          "I architect solutions that combine technical excellence with
          practical value, creating digital experiences that are both powerful
          and intuitive."
        </blockquote>
        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100/50">
          <p className="text-gray-600 italic">
            "Simplicity is the ultimate sophistication."
            <span className="block text-sm text-gray-500 mt-2">
              — Leonardo da Vinci
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function NameTitle() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
        Sai Srikanth Chodimella
      </h1>
      <div className="flex flex-wrap gap-3">
        <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full">
          .NET Developer
        </span>
        <span className="px-4 py-1.5 bg-gray-100/50 text-gray-600 text-sm font-medium rounded-full border border-gray-200/50">
          Full Stack Developer
        </span>
      </div>
    </div>
  );
}

function AboutDescription() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
        Technical Profile
      </h2>
      <p className="text-gray-900 text-lg leading-relaxed">
        Full-stack developer with 5+ years experience delivering enterprise
        solutions across Microsoft technologies. Specialized in:
      </p>
      <ul className="space-y-6">
        {[
          ".NET Software Development & Architecture – Expertise in designing and building scalable, high-performance applications",
          "Legacy System Modernization – Transforming outdated systems into modern, maintainable solutions",
          "Performance Optimization & Testing – Enhancing application efficiency and reliability through rigorous testing and tuning",
          "Enterprise Solutions Development – Delivering robust, industry-compliant applications using Microsoft technologies",
        ].map((item, index) => {
          const [highlight, description] = item.split(" – ");

          return (
            <li key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                  {highlight}
                </h3>
                <p className="text-gray-600 mt-1 leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function KeySkills() {
  const skills = [
    { name: "C# & .NET", level: "Expert" },
    { name: "Frontend Development", level: "Advanced" },
    { name: "Backend Development", level: "Expert" },
    { name: "Testing", level: "Advanced" },
    { name: "Database Design", level: "Advanced" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
        Core Competencies
      </h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-base">
              <span className="text-gray-600">{skill.name}</span>
              <span className="text-blue-600 font-medium">{skill.level}</span>
            </div>
            <div className="h-2 bg-gray-100/50 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${skill.level === "Expert" ? "90%" : "75%"}` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CallToAction() {
  const links = [
    {
      href: "https://www.linkedin.com/in/sai-srikanth-chodimella/",
      text: "Connect on LinkedIn",
    },
    {
      href: "https://github.com/SaiSrikanthChodimella",
      text: "Explore GitHub Repos",
    },
    {
      href: "https://dev.azure.com/srikanthchodimella/MonsterBuilder",
      text: "Explore Azure Repos",
    },
    {
      href: "https://roadmap.sh/r/my-roadmap-as-net-developer",
      text: "View Development Roadmap",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 text-center"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}
