import Certificate from "../assets/Certification.png";

export default function Certifications() {
  return (
    <section className="bg-gray-50 py-20 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Certificate Image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-all duration-300" />
          <img
            src={Certificate}
            alt="Microsoft C# Certification"
            className="relative z-10 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-[1.02]"
          />
        </div>

        {/* Certification Details */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Foundational C# Certification
            <span className="block text-2xl text-gray-600 mt-2">
              Microsoft Certified
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Validates core expertise in modern C# development and .NET
            ecosystem, demonstrating professional-grade application development
            capabilities.
          </p>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Key Competencies
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                </div>
                <p className="text-gray-600">
                  Advanced C# programming concepts and patterns
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                </div>
                <p className="text-gray-600">
                  .NET Framework architecture and best practices
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                </div>
                <p className="text-gray-600">
                  Industry-standard development methodologies
                </p>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <a
            href="https://www.freecodecamp.org/certification/Sai_Srikanth_Chodimella/foundational-c-sharp-with-microsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
          >
            View Credential
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
