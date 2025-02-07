import Git from "../assets/Icons/Git.png";
import ReactJS from "../assets/Icons/ReactJS.png";
import TailWind from "../assets/Icons/TailwindCSS.png";
import Gmail from "../assets/Icons/Gmail.png";
import Linkedin from "../assets/Icons/Linkedin.png";

const FooterSection = ({ title, children }) => (
  <div className="space-y-3">
    <h5 className="text-lg font-semibold text-gray-300">{title}</h5>
    {children}
  </div>
);

const FooterIconLink = ({ href, src, alt, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    aria-label={ariaLabel}
    className="hover:scale-110 transition-transform"
  >
    <img src={src} alt={alt} className="w-8 h-8" />
  </a>
);

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 rounded-sm shadow-md text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <FooterSection title="About This Page">
          <p>
            Welcome to my portfolio! Built with{" "}
            <strong className="text-yellow-400">React.js Tailwind</strong>, this
            site showcases my projects and skills. Let's connect!
          </p>
        </FooterSection>

        <FooterSection title="Resources">
          <div className="flex space-x-4">
            <FooterIconLink
              href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
              src={Git}
              alt="Git"
              ariaLabel="Git"
            />
            <FooterIconLink
              href="https://tailwindui.com/"
              src={TailWind}
              alt="Tailwind"
              ariaLabel="Tailwind"
            />
            <FooterIconLink
              href="https://react.dev/"
              src={ReactJS}
              alt="ReactJS"
              ariaLabel="ReactJS"
            />
          </div>
        </FooterSection>

        <FooterSection title="Contact">
          <div className="flex space-x-4">
            <FooterIconLink
              href="mailto:saisrikanthchodimella@gmail.com"
              src={Gmail}
              alt="Gmail"
              ariaLabel="Gmail"
            />
            <FooterIconLink
              href="https://www.linkedin.com/in/sai-srikanth-chodimella/"
              src={Linkedin}
              alt="LinkedIn"
              ariaLabel="LinkedIn"
            />
          </div>
          <p className="mt-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:saisrikanthchodimella@gmail.com"
              className="text-blue-400 hover:underline"
            >
              saisrikanthchodimella@gmail.com
            </a>
          </p>
        </FooterSection>
      </div>

      <hr className="border-gray-700 my-4" />

      <p className="text-center text-xs">
        &copy; {new Date().getFullYear()} Sai Srikanth Chodimella. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer;
