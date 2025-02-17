import Git from "../assets/Icons/Git.png";
import ReactJS from "../assets/Icons/ReactJS.png";
import TailWind from "../assets/Icons/TailwindCSS.png";
import Gmail from "../assets/Icons/Gmail.png";
import Linkedin from "../assets/Icons/Linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <FooterSection title="About This Portfolio">
            <p className="text-gray-400 leading-relaxed">
              A modern showcase of technical expertise, built with{" "}
              <span className="text-blue-400">React</span> and{" "}
              <span className="text-blue-400">Tailwind CSS</span>. Designed to
              demonstrate innovative solutions and professional capabilities.
            </p>
          </FooterSection>

          {/* Resources Section */}
          <FooterSection title="Development Tools">
            <div className="flex gap-3">
              <FooterIconLink
                href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
                src={Git}
                alt="Azure DevOps"
                ariaLabel="Azure DevOps Repository"
              />
              <FooterIconLink
                href="https://tailwindcss.com/"
                src={TailWind}
                alt="Tailwind CSS"
                ariaLabel="Tailwind CSS Framework"
              />
              <FooterIconLink
                href="https://react.dev/"
                src={ReactJS}
                alt="React"
                ariaLabel="React Library"
              />
            </div>
          </FooterSection>

          {/* Contact Section */}
          <FooterSection title="Let's Connect">
            <div className="flex gap-3">
              <FooterIconLink
                href="mailto:saisrikanthchodimella@gmail.com"
                src={Gmail}
                alt="Email"
                ariaLabel="Send Email"
              />
              <FooterIconLink
                href="https://www.linkedin.com/in/sai-srikanth-chodimella/"
                src={Linkedin}
                alt="LinkedIn"
                ariaLabel="LinkedIn Profile"
              />
            </div>
            <p className="mt-4 text-gray-400">
              <a
                href="mailto:saisrikanthchodimella@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                saisrikanthchodimella@gmail.com
              </a>
            </p>
          </FooterSection>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sai Srikanth Chodimella. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const FooterSection = ({ title, children }) => (
  <div className="space-y-6">
    <h5 className="text-base font-semibold text-gray-100 tracking-wide">
      {title}
    </h5>
    {children}
  </div>
);

const FooterIconLink = ({ href, src, alt, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="p-2.5 rounded-xl hover:bg-gray-800/50 transition-colors duration-300"
  >
    <img
      src={src}
      alt={alt}
      className="w-7 h-7 opacity-80 hover:opacity-100 transition-opacity"
    />
  </a>
);
