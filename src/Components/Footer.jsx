import Git from "../assets/Icons/Git.png";
import ReactJS from "../assets/Icons/ReactJS.png";
import TailWind from "../assets/Icons/TailwindCSS.png";
import Gmail from "../assets/Icons/Gmail.png";
import Linkedin from "../assets/Icons/Linkedin.png";

const FooterSection = ({ title, children }) => (
  <div>
    <h5 className="text-2xl font-semibold text-gray-300">{title}</h5>
    {children}
  </div>
);

const FooterLink = ({ href, label }) => (
  <li>
    <a href={href} className="hover:text-blue-400 transition">
      {label}
    </a>
  </li>
);

const FooterIconLink = ({ href, src, alt, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    aria-label={ariaLabel}
    className="transition-transform transform hover:scale-110"
  >
    <img src={src} alt={alt} className="w-10 h-10" />
  </a>
);

function Footer() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-8 rounded-xl shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <FooterSection title="About This Page">
          <p className="text-lg text-gray-400">
            Welcome to my portfolio! <br />
            Built with{" "}
            <strong className="text-blue-400">
              .NET 9, Tailwind, and React.js
            </strong>
            , this site showcases my projects, skills, and expertise. Feel free
            to connect with me for any inquiries.
          </p>
        </FooterSection>

        <FooterSection title="Quick Links">
          <ul className="space-y-2 text-lg text-gray-400">
            <FooterLink href="#AboutMe" label="About Me" />
            <FooterLink href="#Skills" label="Skills" />
            <FooterLink href="#Projects" label="Projects" />
            <FooterLink href="#Certifications" label="Certifications" />
          </ul>
        </FooterSection>

        <FooterSection title="Resource Links">
          <div className="flex space-x-6">
            <FooterIconLink
              href="https://dev.azure.com/srikanthchodimella/MonsterBuilder"
              src={Git}
              alt="Git Icon"
              ariaLabel="Git"
            />
            <FooterIconLink
              href="https://tailwindui.com/"
              src={TailWind}
              alt="Tailwind Icon"
              ariaLabel="Tailwind"
            />
            <FooterIconLink
              href="https://react.dev/"
              src={ReactJS}
              alt="ReactJS Icon"
              ariaLabel="ReactJS"
            />
          </div>
        </FooterSection>

        <FooterSection title="Contact Me">
          <div className="flex space-x-6">
            <FooterIconLink
              href="mailto:saisrikanthchodimella@gmail.com"
              src={Gmail}
              alt="Gmail Icon"
              ariaLabel="Gmail"
            />
            <FooterIconLink
              href="https://www.linkedin.com/in/sai-srikanth-chodimella/"
              src={Linkedin}
              alt="LinkedIn Icon"
              ariaLabel="LinkedIn"
            />
          </div>
          <div className="mt-4">
            <p className="text-gray-400">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:saisrikanthchodimella@gmail.com"
                className="text-blue-400 hover:underline"
              >
                saisrikanthchodimella@gmail.com
              </a>
            </p>
            <cite className="text-sm text-gray-400 mt-2">
              Looking forward to your feedback. Have a great day!
            </cite>
          </div>
        </FooterSection>
      </div>

      <hr className="border-gray-700 my-8" />

      <div className="text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Sai Srikanth Chodimella. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
