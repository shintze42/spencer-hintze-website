const Projects = () => {
  const projects = [
    {
      title: 'RAG Model',
      description: 'Built a custom RAG model combining semantic search with LLM generation. Implements vector embeddings for efficient document retrieval.',
      link: '#',
      type: 'GitHub Repository',
      tags: ['AI', 'Machine Learning', 'Python'],
    },
    {
      title: 'Strategic Management Capstone',
      description: 'Comprehensive strategy analysis for a real company. Presented to executive leadership with actionable recommendations. Applied frameworks including Porter\'s Five Forces, SWOT, and value chain analysis.',
      link: '#',
      type: 'BYU Academic Project',
      tags: ['Strategy', 'Business', 'Analysis'],
    },
    {
      title: 'Personal Portfolio Website',
      description: 'This very website! Built using Cursor with vibe coding alongside modern React, Vite, and Tailwind CSS. Responsive design with smooth animations. Deployed on Netlify with continuous deployment.',
      link: '#',
      type: 'Web Application',
      tags: ['React', 'Tailwind CSS', 'Vite'],
    },
    {
      title: 'Zoey Cloud Employee',
      description: 'Autonomous AI agent built at Signals for customer support automation. Handles 300+ daily calls with intelligent routing and response. Improved deflection rates and customer satisfaction metrics.',
      link: '#',
      type: 'AI Agent',
      tags: ['AI', 'Automation', 'Productivity'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl">
            A collection of my recent work and projects. Each project represents 
            a unique challenge and learning experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-lg border border-gray-700 p-8 hover:border-white transition-all duration-300 hover:shadow-xl hover:shadow-white/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  )}
                </div>
                
                <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide">
                  {project.type}
                </p>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
