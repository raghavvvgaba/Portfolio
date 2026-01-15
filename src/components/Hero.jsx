import { useState, useEffect } from 'react';
import CyberpunkTradingCard from './CyberpunkTradingCard';

const Hero = () => {
  const [hasGlitched, setHasGlitched] = useState(false);
  const [particles] = useState(
    Array.from({ length: 12 }).map((_, i) => ({
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none"
           style={{ perspective: '600px' }}>
        <div className="absolute inset-0 w-[200vw] h-[200vw] transform-origin-center"
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none"
           style={{ perspective: '600px' }}>
        <div className="absolute inset-0 w-[200vw] h-[200vw] transform-origin-center"
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none"
           style={{ perspective: '600px' }}>
        <div className="absolute inset-0 w-[200vw] h-[200vw] transform-origin-center"
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
      <div className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full blur-2xl bg-cp-cyan/10"
           style={{
             boxShadow: '0 0 40px rgba(3, 216, 243, 0.6), 0 0 80px rgba(3, 216, 243, 0.5)',
             animation: 'neon-flicker 4s ease-in-out infinite'
           }}
      />
      <div className="absolute bottom-[15%] right-[10%] w-24 h-24 rounded-full blur-xl bg-cp-yellow/10"
           style={{
             boxShadow: '0 0 30px rgba(252, 238, 12, 0.5), 0 0 60px rgba(252, 238, 12, 0.3)',
             animation: 'neon-flicker 1s ease-in-out infinite reverse'
           }}
      />
      <div className="absolute top-[40%] right-[15%] w-20 h-20 rounded-full blur-lg bg-cp-red/10"
           style={{
             boxShadow: '0 0 20px rgba(197, 0, 60, 0.5), 0 0 40px rgba(197, 0, 60, 0.3)',
             animation: 'neon-flicker 6s ease-in-out infinite'
           }}
      />

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
      <div className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Cyberpunk Trading Card */}
          <div
            className={`order-2 lg:order-1 flex justify-center transition-all duration-700 ${
              hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0s' }}
          >
            <CyberpunkTradingCard />
          </div>

          {/* Right Side - Text Content */}
          <div className="order-1 lg:order-2 text-left">
            {/* Main Headline */}
            <div
              className={`mb-6 transition-all duration-700 ${
                hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              <h2
                className={`text-2xl md:text-3xl font-bold text-cp-cyan uppercase tracking-widest mb-2 transition-all ${
                  hasGlitched ? 'animate-glitch-subtle' : ''
                } hover:animate-glitch-hover`}
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontWeight: 700,
                  textShadow: '0 0 20px rgba(3, 216, 243, 0.5)',
                  animationDelay: '0.15s'
                }}
              >
                WELCOME TO THE
              </h2>
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none transition-all ${
                  hasGlitched ? 'animate-glitch-subtle' : ''
                } hover:animate-glitch-hover`}
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontWeight: 900,
                  textShadow: '0 0 40px rgba(252, 238, 12, 0.7), 0 0 80px rgba(3, 216, 243, 0.5), 0 0 120px rgba(197, 0, 60, 0.3)',
                  WebkitTextStroke: '1px rgba(252, 238, 12, 0.3)',
                  animationDelay: '0.2s'
                }}
              >
                DARK FUTURE
              </h1>
            </div>

            {/* Cyberpunk decorative elements */}
            <div
              className={`flex items-center space-x-4 mb-8 transition-all duration-700 delay-200 ${
                hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-1 bg-cp-cyan transform -rotate-12" style={{ boxShadow: '0 0 10px rgba(3, 216, 243, 0.6)' }}></div>
              <div className="w-2 h-2 bg-cp-yellow rotate-45" style={{ boxShadow: '0 0 10px rgba(252, 238, 12, 0.8)' }}></div>
              <div className="w-16 h-1 bg-cp-cyan transform rotate-12" style={{ boxShadow: '0 0 10px rgba(3, 216, 243, 0.6)' }}></div>
            </div>

            {/* Description */}
            <div
              className={`mb-10 transition-all duration-700 delay-300 ${
                hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className={`text-lg md:text-xl text-white leading-relaxed font-medium mb-3 hover:animate-glitch-hover ${
                hasGlitched ? 'animate-glitch-subtle' : ''
              }`} style={{ textShadow: '0 0 20px rgba(0, 0, 0, 0.8)', animationDelay: '0.3s' }}>
                From games to beyond, keep your feed up to date with the latest news and announcements
              </p>
              <p className={`text-base md:text-lg text-cp-cyan/80 font-semibold tracking-wide hover:animate-glitch-hover ${
                hasGlitched ? 'animate-glitch-subtle' : ''
              }`} style={{ textShadow: '0 0 15px rgba(3, 216, 243, 0.4)', animationDelay: '0.4s' }}>
                FULL STACK DEVELOPER • CYBERPUNK CREATOR • DIGITAL ARCHITECT
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-5 transition-all duration-700 delay-500 ${
                hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-10 py-3 bg-black text-white text-base font-bold uppercase tracking-wider border-none transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:animate-glitch-hover"
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
                className="group relative px-10 py-3 bg-transparent text-white text-base font-bold uppercase tracking-wider border-2 border-cp-cyan transition-all duration-300 hover:scale-105 hover:bg-cp-cyan/10 hover:border-cp-yellow hover:animate-glitch-hover"
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
      <button onClick={() => scrollToSection('projects')} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform duration-300">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-bold uppercase tracking-widest text-white" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>Scroll</span>
          <div className="w-0.5 h-12 bg-cp-cyan/60 animate-pulse" style={{ boxShadow: '0 0 10px rgba(3, 216, 243, 0.6)' }}></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
