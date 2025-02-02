import Certificate from "../assets/Certification.png";

function Certifications() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-gray-900 p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:scale-102 hover:shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Certificate Image */}
        <div className="flex justify-center">
          <img
            src={Certificate}
            alt="Certification"
            className="w-full max-w-md rounded-lg shadow-2xl transition-transform hover:scale-105"
          />
        </div>

        {/* Certification Details */}
        <div className="space-y-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Foundational C# with Microsoft
          </h2>

          <p className="text-base md:text-lg text-gray-400">
            This certification validates my proficiency in{" "}
            <strong className="text-white">C#</strong> and the{" "}
            <strong className="text-white">.NET</strong> ecosystem,
            demonstrating my ability to develop robust and scalable
            applications.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-300">
              Key Features:
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                Validates foundational knowledge of{" "}
                <strong className="text-white">C#</strong> programming.
              </li>
              <li>Recognized by industry professionals and employers.</li>
              <li>Demonstrates commitment to continuous learning.</li>
            </ul>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="https://www.freecodecamp.org/certification/Sai_Srikanth_Chodimella/foundational-c-sharp-with-microsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-900 text-white px-6 py-2 rounded-md shadow-md transition-transform hover:scale-105"
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
