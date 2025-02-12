import Certificate from "../assets/Certification.png";

function Certifications() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-12 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-102 hover:shadow-3xl bento-box">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bento-box">
        {/* Certificate Image */}
        <div className="flex justify-center bento-box">
          <img
            src={Certificate}
            alt="Certification"
            className="w-full max-w-md rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border-4 border-opacity-25 border-white"
          />
        </div>

        {/* Certification Details */}
        <div className="space-y-6 text-white bento-box">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
            Foundational C# with Microsoft
          </h2>

          <p className="text-base md:text-lg text-gray-300 bento-box">
            This certification validates my proficiency in{" "}
            <strong className="text-sky-400">C#</strong> and the{" "}
            <strong className="text-sky-400">.NET</strong> ecosystem,
            demonstrating my ability to develop robust and scalable
            applications.
          </p>

          <div className="space-y-4 bento-box">
            <h3 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
              Key Features:
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Validates foundational knowledge of{" "}
                <strong className="text-sky-400">C#</strong> programming.
              </li>
              <li>Recognized by industry professionals and employers.</li>
              <li>Demonstrates commitment to continuous learning.</li>
            </ul>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-6 flex justify-center md:justify-start bento-box">
            <a
              href="https://www.freecodecamp.org/certification/Sai_Srikanth_Chodimella/foundational-c-sharp-with-microsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-8 py-3 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
