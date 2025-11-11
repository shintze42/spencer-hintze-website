import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full border-2 border-gray-700 overflow-hidden hover:border-white transition-colors duration-300 shadow-lg">
              <img 
                src="/profile.JPG" 
                alt="Spencer Hintze" 
                className="w-full h-full object-cover"
                style={{
                  imageRendering: 'auto',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
                loading="eager"
                decoding="auto"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Spencer Hintze
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              AI Product Manager & Strategic Problem Solver
            </p>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Welcome to my portfolio. I build innovative solutions and create 
              meaningful digital experiences. Explore my work, experience, and 
              get in touch to collaborate on exciting projects.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/resume"
                className="inline-block px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all duration-200 hover:scale-105 text-center"
              >
                View Resume
              </Link>
              <Link
                to="/projects"
                className="inline-block px-8 py-3 border-2 border-gray-700 text-white rounded-full font-medium hover:border-white transition-all duration-200 hover:scale-105 text-center"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
            <p>
              I'm a strategic problem solver and AI Product Manager with experience driving measurable impact at fast-growing companies. Currently a Strategic Management student at BYU (3.96 GPA), I've led cross-functional teams to launch AI products that increased sales calls by 7x and improved customer support deflection rates from 17% to 36%. I specialize in building AI agents, scaling enterprise features, and translating complex technical capabilities into business value.
            </p>
          </div>
        </div>
      </section>

      {/* Life & Interests Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Life & Interests
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Family First */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 hover:scale-[1.02]">
              <div className="h-[350px] overflow-hidden">
                <img 
                  src="/family.JPG" 
                  alt="Family" 
                  className="w-full h-full object-cover"
                  style={{
                    imageRendering: 'auto',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  loading="lazy"
                  decoding="auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Family First
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  I have a beautiful wife and daughter, and we're expecting another! Growing up as the oldest of 10 kids prepared me for this incredible journey. Can't wait to see if it's a boy or a girl!
                </p>
              </div>
            </div>

            {/* BYU Pride */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 hover:scale-[1.02]">
              <div className="h-[350px] overflow-hidden">
                <img 
                  src="/byu.JPG" 
                  alt="BYU" 
                  className="w-full h-full object-cover"
                  style={{
                    imageRendering: 'auto',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  loading="lazy"
                  decoding="auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  BYU Pride
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Finishing my senior year at BYU. Nothing beats game days at LaVell Edwards Stadium with friends and family. Grateful to study at an inspired university as our sports teams turn a corner.
                </p>
              </div>
            </div>

            {/* Golf Obsession */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 hover:scale-[1.02]">
              <div className="h-[350px] overflow-hidden">
                <img 
                  src="/golf.JPG" 
                  alt="Golf" 
                  className="w-full h-full object-cover"
                  style={{
                    imageRendering: 'auto',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  loading="lazy"
                  decoding="auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Golf Obsession
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  High school golfer turned weekend warrior. Got close to scratch back in the day. Still chasing that elusive hole-in-one, but I did shoot -1 once on 18 holes... best round ever!
                </p>
              </div>
            </div>

            {/* Building Things */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 hover:scale-[1.02]">
              <div className="h-[350px] overflow-hidden">
                <img 
                  src="/Coding.jpg" 
                  alt="Coding" 
                  className="w-full h-full object-cover"
                  style={{
                    imageRendering: 'auto',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  loading="lazy"
                  decoding="auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Building Things
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Discovered my love for building late in college and now I'm catching up fast. Becoming a product engineer who can handle product sense, design, and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

