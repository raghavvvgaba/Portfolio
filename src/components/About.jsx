const About = () => {
  const highlights = [
    "5+ years building scalable web applications",
    "Specialized in React ecosystem and modern JavaScript",
    "Passionate about performance optimization and UX",
    "Experience with AI/ML integration and Web3 technologies",
    "Open-source contributor and tech community advocate"
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-4"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-cp-cyan"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="relative">
            <div
              className="relative p-1"
              style={{
                background: 'linear-gradient(135deg, #FCEE0C 0%, #03D8F3 100%)',
                clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
              }}
            >
              <div
                className="relative overflow-hidden bg-black p-2"
                style={{
                  clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                }}
              >
                <img
                  src="/src/assets/Profile.jpg"
                  alt="Raghav Gaba"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="w-full h-96 hidden items-center justify-center bg-black"
                  style={{ display: 'none' }}
                >
                  <span className="text-cp-cyan font-mono text-sm">PROFILE IMAGE</span>
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cp-cyan"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cp-yellow"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cp-yellow"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cp-cyan"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Bio */}
            <div
              className="p-6 relative overflow-hidden"
              style={{
                background: '#121212',
                borderLeft: '4px solid #FCEE0C'
              }}
            >
              <div className="relative z-10">
                <h3
                  className="text-2xl font-black text-cp-yellow mb-4 uppercase"
                  style={{ fontFamily: '"Rajdhani", sans-serif' }}
                >
                  System.Bio
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Welcome to my portfolio. I'm a <span className="text-cp-cyan font-semibold">full-stack developer</span>
                    with a passion for building <span className="text-cp-cyan font-semibold">modern digital experiences</span>
                    that push the boundaries of web technology.
                  </p>
                  <p>
                    My approach combines <span className="text-cp-yellow font-semibold">clean design</span> with
                    <span className="text-cp-cyan font-semibold"> scalable architecture</span>, creating applications that
                    are not only visually striking but also engineered for performance and efficiency.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects,
                    or designing the next generation of user interfaces.
                  </p>
                </div>
              </div>

              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cp-cyan/5 rounded-full blur-3xl"></div>
            </div>

            {/* Highlights */}
            <div
              className="p-6 relative overflow-hidden"
              style={{
                background: '#121212',
                borderLeft: '4px solid #03D8F3'
              }}
            >
              <h3
                className="text-xl font-black text-cp-cyan mb-4 uppercase"
                style={{ fontFamily: '"Rajdhani", sans-serif' }}
              >
                Core.Achievements
              </h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-cp-yellow mt-1 flex-shrink-0 text-lg">▸</span>
                    <span className="text-gray-300 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-cp-yellow text-black text-sm font-bold uppercase tracking-widest border-none transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                }}
              >
                Get In Touch
              </button>
              <button
                className="px-8 py-4 bg-transparent text-cp-cyan text-sm font-bold uppercase tracking-widest border-2 border-cp-cyan transition-all duration-300 hover:scale-105 hover:bg-cp-cyan hover:text-black"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                }}
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
