const Resume = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-12">
            Resume
          </h1>
          
          <div className="space-y-12">
            {/* Professional Experience Section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-4">
                Professional Experience
              </h2>
              <div className="space-y-8">
                {/* Signals AI */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-400 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      AI Product Architect
                    </h3>
                    <span className="text-gray-400 text-sm">
                      Apr 2025 - Present
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">Signals AI</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Built and launched fully autonomous AI lead response agent → 7x increase in monthly sales discovery calls, $10k MRR in first week</li>
                    <li>Improved customer support AI agent for Fortune 500 product line → boosted deflection rate from 17% to 36%, securing $100k+ ARR contract</li>
                    <li>Led implementation for 8 clients representing $216k ARR, expanding to $312k in first 90 days</li>
                  </ul>
                </div>

                {/* Qualtrics */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-400 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      Product Manager Intern
                    </h3>
                    <span className="text-gray-400 text-sm">
                      Sept 2024 - Apr 2025
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">Qualtrics</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Led cross-functional team of 6 developers with UI, UX, and CX teams to launch sampling methodology for Qualtrics Assist AI</li>
                    <li>Scaled improved experience for 46% of enterprise clients including Bank of America, Marriott, Hilton</li>
                    <li>Designed product specifications, UI/UX mockups and requirements for sampling rollout</li>
                    <li>Scoped and rebuilt Data Modeler Feature with data engineer → saved team ~20 hours/week (~$140k annually)</li>
                  </ul>
                </div>

                {/* Cougar Consulting Group */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-400 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      Associate Consultant - DOMO
                    </h3>
                    <span className="text-gray-400 text-sm">
                      Jan 2024 - Apr 2024
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">Cougar Consulting Group</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Collaborated with team of 5 student consultants to re-evaluate DOMO's ideal customer persona (ICP)</li>
                    <li>Conducted quantitative analysis of sales funnel to increase paid conversion among 998 clients</li>
                    <li>Presented findings to company executives who implemented recommendations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-4">
                Education
              </h2>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    Strategic Management
                  </h3>
                  <span className="text-gray-400 text-sm">
                    Present
                  </span>
                </div>
                <p className="text-gray-400">Brigham Young University (BYU) | 3.96 GPA</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
