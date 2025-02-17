import GitHub from "../assets/Icons/GitHub.png";
import ReactJS from "../assets/Icons/ReactJS.png";
import TailWind from "../assets/Icons/TailwindCSS.png";
import Gmail from "../assets/Icons/Gmail.png";
import Linkedin from "../assets/Icons/Linkedin.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-gray-700/40 backdrop-blur-md shadow-lg rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* About Section */}
          <FooterSection title="Crafting Digital Excellence">
            <p className="text-gray-300 text-[15px] leading-relaxed font-light">
              A meticulously designed portfolio powered by{" "}
              <span className="text-[#2997FF] font-medium">React 18</span> and{" "}
              <span className="text-[#2997FF] font-medium">Tailwind CSS</span>.
              Engineered for performance, accessibility, and aesthetics.
            </p>
          </FooterSection>

          {/* Development Stack */}
          <FooterSection title="Core Technologies">
            <div className="flex gap-6 items-center">
              <FooterIconLink
                href="https://github.com/SaiSrikanthChodimella"
                src={GitHub}
                alt="GitHub Profile"
              />
              <FooterIconLink
                href="https://tailwindcss.com/"
                src={TailWind}
                alt="Tailwind CSS"
              />
              <FooterIconLink
                href="https://react.dev/"
                src={ReactJS}
                alt="React Library"
              />
            </div>
          </FooterSection>

          {/* Contact Section */}
          <FooterSection title="Let's Connect">
            <div className="flex gap-6 items-center">
              <FooterIconLink
                href="mailto:saisrikanthchodimella@gmail.com"
                src={Gmail}
                alt="Email Contact"
              />
              <FooterIconLink
                href="https://www.linkedin.com/in/sai-srikanth-chodimella/"
                src={Linkedin}
                alt="LinkedIn Profile"
              />
            </div>
            <p className="mt-6 text-gray-300">
              <a
                href="mailto:saisrikanthchodimella@gmail.com"
                className="text-[#2997FF] hover:text-[#66B2FF] transition-colors duration-300 font-medium"
              >
                saisrikanthchodimella@gmail.com
              </a>
            </p>
          </FooterSection>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-gray-700/50 mt-16"></div>

        {/* Copyright Section */}
        <div className="pt-8 text-center">
          <p className="text-gray-400 text-sm tracking-wide font-light">
            &copy; {new Date().getFullYear()} Sai Srikanth Chodimella.
            <span className="mx-2">•</span> Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}

const FooterSection = ({ title, children }) => (
  <div className="space-y-6">
    <h5 className="text-[17px] font-semibold text-gray-100 tracking-wide">
      {title}
    </h5>
    {children}
  </div>
);

const FooterIconLink = ({ href, src, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-lg"
  >
    <img
      src={src}
      alt={alt}
      className="w-7 h-7 opacity-90 hover:opacity-100 transition-opacity"
    />
  </a>
);
