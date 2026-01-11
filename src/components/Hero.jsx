import { useState, useEffect } from 'react';

const Hero = () => {
  const [hasGlitched, setHasGlitched] = useState(false);

  useEffect(() => {
    setTimeout(() => setHasGlitched(true), 500);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: '#FCEE0C'
      }}
    >
      {/* Hero Content */}
      <div className="relative z-10 text-center px-8 py-32 max-w-7xl mx-auto">
        {/* Main Headline */}
        <div
          className={`mb-8 transition-all duration-700 ${
            hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-black text-black uppercase tracking-tight leading-none"
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 900,
              textShadow: '0 0 40px rgba(0,0,0,0.3)'
            }}
          >
            WELCOME TO THE
          </h1>
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-black text-black uppercase tracking-tight leading-none mt-2"
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 900,
              textShadow: '0 0 60px rgba(0,0,0,0.5)',
              WebkitTextStroke: '2px rgba(0,0,0,0.1)'
            }}
          >
            DARK FUTURE
          </h1>
        </div>

        {/* Cyberpunk decorative elements */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <div className="w-16 h-1 bg-black transform -rotate-12"></div>
          <div className="w-2 h-2 bg-black rotate-45"></div>
          <div className="w-16 h-1 bg-black transform rotate-12"></div>
        </div>

        {/* Description */}
        <div
          className={`mb-12 transition-all duration-700 delay-300 ${
            hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed font-medium">
            From games to beyond, keep your feed up to date with the latest news and announcements
          </p>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed mt-4">
            FULL STACK DEVELOPER • CYBERPUNK CREATOR • DIGITAL ARCHITECT
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 delay-500 ${
            hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-12 py-4 bg-black text-white text-lg font-bold uppercase tracking-wider border-none transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}
          >
            <span className="relative z-10">Explore Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cp-cyan to-cp-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-12 py-4 bg-transparent text-black text-lg font-bold uppercase tracking-wider border-2 border-black transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}
          >
            <span className="relative z-10">Get In Touch</span>
          </button>
        </div>

        {/* Animated glitch effect */}
        {hasGlitched && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div
              className="w-96 h-96 bg-cp-cyan/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '3s' }}
            ></div>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-bold uppercase tracking-widest text-black">Scroll</span>
          <div className="w-0.5 h-12 bg-black/60 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
