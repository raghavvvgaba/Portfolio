import { useState, useEffect, useRef, forwardRef } from 'react';
import { FaMouse } from 'react-icons/fa';
import ProfileCard from './ProfileCard';
import Button from '../ui/Button';

const Hero = forwardRef((props, ref) => {
  const [hasGlitched, setHasGlitched] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = ' this is Raghav';
  const timerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setHasGlitched(true), 500);
  }, []);

  useEffect(() => {
    if (!hasGlitched) return;

    const TYPE_SPEED = 80;
    const DELETE_SPEED = 40;
    const PAUSE_AFTER_TYPE = 2000;
    const PAUSE_AFTER_DELETE = 600;

    let i = 0;
    let direction = 'type';

    const tick = () => {
      if (direction === 'type') {
        if (i <= fullText.length) {
          setTypedText(fullText.slice(0, i));
          i++;
          timerRef.current = setTimeout(tick, TYPE_SPEED);
        } else {
          direction = 'delete';
          timerRef.current = setTimeout(tick, PAUSE_AFTER_TYPE);
        }
      } else {
        if (i >= 0) {
          setTypedText(fullText.slice(0, i));
          i--;
          timerRef.current = setTimeout(tick, DELETE_SPEED);
        } else {
          direction = 'type';
          timerRef.current = setTimeout(tick, PAUSE_AFTER_DELETE);
        }
      }
    };

    timerRef.current = setTimeout(tick, 200);

    return () => clearTimeout(timerRef.current);
  }, [hasGlitched]);
 
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
          background: 'linear-gradient(135deg, rgba(0,6,14,0.4) 0%, rgba(10,14,26,0.4) 50%, rgba(17,19,24,0.4) 100%)'
        }}
      />

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
            className={`order-1 flex justify-center sm:justify-center lg:justify-start transition-all duration-700 ${
              hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0s' }}
          >
            <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
              <ProfileCard />
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
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight transition-all"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontWeight: 900,
                  animationDelay: '0.2s'
                }}
              >
                Hey,
                <span>{typedText}</span>
                <span
                  className="inline-block w-1 sm:w-1.5 h-6 sm:h-8 md:h-10 lg:h-12 bg-cp-cyan ml-1 align-middle"
                  style={{ animation: 'pulse 0.8s ease-in-out infinite' }}
                />
              </h1>
            </div>

            {/* Description */}
            <div
              className={`mb-6 sm:mb-8 lg:mb-10 transition-all duration-700 delay-300 ${
                hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-semibold mb-2 sm:mb-3 transition-all" style={{ textShadow: '0 0 20px rgba(0, 0, 0, 0.8)', animationDelay: '0.3s' }}>
                Full stack developer
              </p>
              <p className="text-base sm:text-lg md:text-xl text-cp-cyan font-semibold tracking-wide transition-all" style={{ animationDelay: '0.4s' }}>
                I build scalable and high-impact web applications, focusing on modern UI, real-time systems, and production-ready backend architecture.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div
              className={`flex flex-row gap-2 sm:gap-3 justify-center sm:justify-start transition-all duration-700 delay-500 ${
                hasGlitched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
                  <a
                    href="/RaghavGaba.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button
                      size="sm"
                      className="group relative hover:shadow-2xl !px-4 !py-2 !text-sm sm:!px-5 sm:!py-2.5 sm:!text-base hover:!bg-[#03D8F3] hover:!text-black"
                      style={{ boxShadow: '0 0 20px rgba(3, 216, 243, 0.4)' }}
                    >
                      <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Resume / CV
                      </span>
                    </Button>
                  </a>

                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('contact')}
                    size="sm"
                    className="group relative !px-4 !py-2 !text-sm sm:!px-5 sm:!py-2.5 sm:!text-base"
                    style={{ boxShadow: '0 0 15px rgba(3, 216, 243, 0.3)' }}
                  >
                    <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact
                    </span>
                  </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button onClick={() => scrollToSection('skills')} className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer scale-110 transition-transform duration-300">
        <div className="flex flex-col items-center space-y-2">
          <FaMouse size={20} style={{ color: '#03D8F3', textShadow: '0 0 10px rgba(3, 216, 243, 0.6)' }} />
          <div className="w-0.5 h-8 sm:h-12 bg-cp-cyan/60" style={{ boxShadow: '0 0 10px rgba(3, 216, 243, 0.6)' }}></div>
        </div>
      </button>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
