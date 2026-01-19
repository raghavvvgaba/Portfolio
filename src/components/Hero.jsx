import { useState, useEffect, forwardRef } from 'react';
import { FaMouse } from 'react-icons/fa';
import CyberpunkTradingCard from './CyberpunkTradingCard';

const Hero = forwardRef((props, ref) => {
  const [hasGlitched, setHasGlitched] = useState(false);
  const [particles] = useState(
    Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 2
    }))
  );

  useEffect(() => {
    setTimeout(() => setHasGlitched(true), 500);
  }, []);
 
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark overlay matching Skills section */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,6,14,0.7) 0%, rgba(10,14,26,0.7) 50%, rgba(17,19,24,0.7) 100%)'
        }}
      />

      {/* Layer 2A: Front Grid (z-index: 10, closest) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block"
           style={{ perspective: '600px' }}>
        <div className="absolute inset-0 w-[100vw] h-[100vh] transform-origin-center"
             style={{
               transform: 'rotateX(75deg) translateY(25%) translateZ(0px)',
               backgroundImage: `
                 linear-gradient(to right, rgba(3, 216, 243, 0.4) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(3, 216, 243, 0.4) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px',
               animation: 'grid-scroll 6s linear infinite',
               opacity: 0.5,
               maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
               WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
             }}
        />
      </div>

      {/* Layer 2B: Middle Grid (z-index: 9, mid-depth) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block"
           style={{ perspective: '600px' }}>
        <div className="absolute inset-0 w-[100vw] h-[100vh] transform-origin-center"
             style={{
               transform: 'rotateX(75deg) translateY(25%) translateZ(-100px)',
               backgroundImage: `
                 linear-gradient(to right, rgba(3, 216, 243, 0.25) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(3, 216, 243, 0.25) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px',
               animation: 'grid-scroll 8s linear infinite',
               opacity: 0.3
             }}
        />
      </div>

      {/* Layer 2C: Back Grid (z-index: 8, furthest) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block"
           style={{ perspective: '600px' }}>
        <div className="absolute inset-0 w-[100vw] h-[100vh] transform-origin-center"
             style={{
               transform: 'rotateX(75deg) translateY(25%) translateZ(-200px)',
               backgroundImage: `
                 linear-gradient(to right, rgba(3, 216, 243, 0.12) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(3, 216, 243, 0.12) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px',
               animation: 'grid-scroll 12s linear infinite',
               opacity: 0.15
             }}
        />
      </div>

      {/* Layer 3: Neon Glow Orbs (z-index: 20) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full blur-2xl bg-cp-cyan/10"
             style={{
               boxShadow: '0 0 40px rgba(3, 216, 243, 0.6), 0 0 80px rgba(3, 216, 243, 0.5)',
               animation: 'neon-flicker 4s ease-in-out infinite'
             }}
        />
        <div className="absolute bottom-[15%] right-[10%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full blur-xl bg-cp-yellow/10"
             style={{
               boxShadow: '0 0 30px rgba(252, 238, 12, 0.5), 0 0 60px rgba(252, 238, 12, 0.3)',
               animation: 'neon-flicker 1s ease-in-out infinite reverse'
             }}
        />
        <div className="absolute top-[40%] right-[15%] w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full blur-lg bg-cp-red/10"
             style={{
               boxShadow: '0 0 20px rgba(197, 0, 60, 0.5), 0 0 40px rgba(197, 0, 60, 0.3)',
               animation: 'neon-flicker 6s ease-in-out infinite'
             }}
        />
      </div>

      {/* Layer 5: Floating Tech Particles (z-index: 25) */}
      {particles.map((particle, i) => (
        <div key={particle.id}
             className="absolute rounded-full bg-white/20"
             style={{
               width: `${particle.size}px`,
               height: `${particle.size}px`,
               top: `${particle.y}%`,
               left: `${particle.x}%`,
               boxShadow: '0 0 10px rgba(3, 216, 243, 0.8)',
               animation: `particle-float ${6 + i * 0.5}s ease-in-out infinite`,
               transform: `rotate(${Math.random() * 360}deg)`,
               willChange: 'transform'
             }}
        />
      ))}

      {/* Layer 4: Scanline Overlay (z-index: 30) */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 4px)',
             opacity: '0.4'
           }}
      />

      {/* Hero Content - Split Layout */}
      <div className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 lg:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Cyberpunk Trading Card */}
          <div
            className={`order-1 flex justify-center -ml-20 sm:justify-center lg:justify-start sm:ml-0 transition-all duration-700 ${
              hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0s' }}
          >
            <div className="w-[280px] sm:w-[320px] lg:w-[360px]">
              <CyberpunkTradingCard />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="order-2 text-center sm:text-left lg:text-left mr-4 sm:mr-0 lg:mr-0">
            {/* Main Headline */}
            <div
              className={`mb-6 transition-all duration-700 ${
                hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-cp-cyan uppercase tracking-widest mb-2 transition-all"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontWeight: 700,
                  textShadow: '0 0 20px rgba(3, 216, 243, 0.5)',
                  animationDelay: '0.15s'
                }}
              >
                Hey, this is
              </h2>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none transition-all"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontWeight: 900,
                  textShadow: '0 0 40px rgba(252, 238, 12, 0.7), 0 0 80px rgba(3, 216, 243, 0.5), 0 0 120px rgba(197, 0, 60, 0.3)',
                  WebkitTextStroke: '1px rgba(252, 238, 12, 0.3)',
                  animationDelay: '0.2s'
                }}
              >
                Raghav
              </h1>
            </div>

            {/* Description */}
            <div
              className={`mb-6 sm:mb-8 lg:mb-10 transition-all duration-700 delay-300 ${
                hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-medium mb-2 sm:mb-3 transition-all" style={{ textShadow: '0 0 20px rgba(0, 0, 0, 0.8)', animationDelay: '0.3s' }}>
                I am a full stack developer
              </p>
              <p className="text-sm sm:text-base md:text-lg text-cp-cyan/80 font-semibold tracking-wide transition-all" style={{ textShadow: '0 0 15px rgba(3, 216, 243, 0.4)', animationDelay: '0.4s' }}>
                I build scalable and high-impact web applications, focusing on modern UI, real-time systems, and production-ready backend architecture.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-5 transition-all duration-700 delay-500 ml-6 sm:-ml-8 lg:-ml-28 sm:pl-28 ${
                hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
               <button
                  onClick={() => scrollToSection('projects')}
                  className="group relative px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 bg-black text-white text-sm sm:text-base font-bold uppercase tracking-wider border-none transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                    boxShadow: '0 0 20px rgba(3, 216, 243, 0.4)'
                  }}
                >
                  <span className="relative z-10">Explore Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cp-cyan to-cp-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 bg-transparent text-white text-sm sm:text-base font-bold uppercase tracking-wider border-2 border-cp-cyan transition-all duration-300 hover:scale-105 hover:bg-cp-cyan/10 hover:border-cp-yellow"
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                    boxShadow: '0 0 15px rgba(3, 216, 243, 0.3)'
                  }}
                >
                  <span className="relative z-10">Get In Touch</span>
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button onClick={() => scrollToSection('skills')} className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer hover:scale-110 transition-transform duration-300">
        <div className="flex flex-col items-center space-y-2">
          <FaMouse size={20} style={{ color: '#03D8F3', textShadow: '0 0 10px rgba(3, 216, 243, 0.6)' }} />
          <div className="w-0.5 h-8 sm:h-12 bg-cp-cyan/60 animate-pulse" style={{ boxShadow: '0 0 10px rgba(3, 216, 243, 0.6)' }}></div>
        </div>
      </button>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
