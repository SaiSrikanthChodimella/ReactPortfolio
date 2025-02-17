import Git from "../assets/Icons/Git.png";
import ReactJS from "../assets/Icons/ReactJS.png";
import TailWind from "../assets/Icons/TailwindCSS.png";
import Gmail from "../assets/Icons/Gmail.png";
import Linkedin from "../assets/Icons/Linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <FooterSection title="About This Portfolio">
            <p className="text-lg font-light leading-relaxed text-gray-300">
              This portfolio is a refined showcase of my technical journey,
              built using the latest in web technologies like{" "}
              <span className="font-semibold text-blue-400">React</span> and{" "}
              <span className="font-semibold text-blue-400">Tailwind CSS</span>.
              It reflects my passion for creating innovative solutions that push
              the limits of modern development.
            </p>
          </FooterSection>

          {/* Development Tools Section */}
          <FooterSection title="Development Tools">
            <div className="flex gap-6 items-center">
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
            <div className="flex gap-6 items-center">
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
            <p className="mt-6 text-gray-300">
              <a
                href="mailto:saisrikanthchodimella@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                saisrikanthchodimella@gmail.com
              </a>
            </p>
          </FooterSection>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sai Srikanth Chodimella. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const FooterSection = ({ title, children }) => (
  <div className="space-y-8">
    <h5 className="text-xl font-semibold text-gray-100 tracking-tight">
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
    className="p-3 rounded-xl hover:bg-gray-800 transition-colors duration-300"
  >
    <img
      src={src}
      alt={alt}
      className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity"
    />
  </a>
);
