import { useState, useEffect } from 'react';
import './CyberpunkLogo.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section for highlighting
      const sections = ['home', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Vignette overlay covering entire top section when scrolled */}
      <div
        className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-40 transition-opacity duration-700 ease-out"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%)',
          opacity: scrolled ? 1 : 0,
        }}
      />

      {/* Cyberpunk Logo - Responsive positioning */}
      <div className="fixed top-6 left-16 sm:left-6 z-50 select-none">
        <svg
          viewBox="0 0 1800 240"
          xmlns="http://www.w3.org/2000/svg"
          className="cp-logo"
          aria-label="Cyberpunk style logo"
        >
          <defs>
            {/* Noise for subtle distortion */}
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="1"
                result="noise"
              />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>

            {/* Glitch slices */}
            <clipPath id="slice-top">
              <rect x="0" y="0" width="1800" height="80" />
            </clipPath>
            <clipPath id="slice-mid">
              <rect x="0" y="80" width="1800" height="80" />
            </clipPath>
            <clipPath id="slice-bot">
              <rect x="0" y="160" width="1800" height="80" />
            </clipPath>
          </defs>

          {/* Base text */}
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            className="cp-text base"
          >
            RAGHAV GABA
          </text>

          {/* Glitch layers */}
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            className="cp-text glitch cyan"
            clipPath="url(#slice-top)"
          >
            RAGHAV GABA
          </text>

          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            className="cp-text glitch magenta"
            clipPath="url(#slice-mid)"
          >
            RAGHAV GABA
          </text>

          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            className="cp-text glitch yellow"
            clipPath="url(#slice-bot)"
          >
            RAGHAV GABA
          </text>
        </svg>
      </div>

      {/* Desktop Navigation - Top Right */}
      <nav className="hidden md:flex md:fixed md:top-6 md:right-3 md:z-50">
        <div
          className="relative border-2"
          style={{
            borderColor: '#FCEE0C',
            clipPath: 'polygon(25px 0, 100% 0, 100% 100%, 0 100%)',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="flex items-center justify-start h-14 px-6" style={{ paddingLeft: '40px' }}>
            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-5 font-bold text-xs uppercase tracking-wide transition-all duration-200 ${
                    activeSection === link.id
                      ? 'bg-[#FCEE0C] text-black'
                      : 'text-white hover:bg-[#FCEE0C] hover:text-black'
                  }`}
                  style={{ fontFamily: '"Arial Black", "Impact", sans-serif', fontWeight: 800 }}
                >
                  {link.label}
                </a>
              ))}

              {/* Separator */}
              <div className="w-px h-6 bg-white opacity-30"></div>

              {/* GitHub Icon */}
              <a
                href="https://github.com/raghavvvgaba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FCEE0C] transition-all duration-200 hover:bg-[#FCEE0C]/10 p-2 rounded"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* X (Twitter) Icon */}
              <a
                href="https://x.com/raghavvvgaba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FCEE0C] transition-all duration-200 hover:bg-[#FCEE0C]/10 p-2 rounded"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom Fixed */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-inset-bottom">
        <div
          className="relative border-t-2 mx-2 mb-2"
          style={{
            borderColor: '#FCEE0C',
            clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
            backgroundColor: 'rgba(0, 0, 0, 0.98)',
          }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            {/* Navigation Links */}
            <div className="flex items-center justify-around flex-1 space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`
                    flex flex-col items-center justify-center
                    px-4 py-2 rounded-sm
                    transition-all duration-200
                    group relative
                    ${activeSection === link.id
                      ? 'text-[#FCEE0C]'
                      : 'text-white hover:text-[#FCEE0C]'
                    }
                  `}
                >
                  {/* Active indicator bar */}
                  <div
                    className={`
                      absolute -top-2 left-1/2 -translate-x-1/2
                      w-12 h-1 transition-all duration-300
                      ${activeSection === link.id
                        ? 'bg-[#FCEE0C] opacity-100'
                        : 'bg-[#FCEE0C] opacity-0 group-hover:opacity-50'
                      }
                    `}
                  />

                  {/* Label */}
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ fontFamily: '"Arial Black", "Impact", sans-serif', fontWeight: 800 }}
                  >
                    {link.label}
                  </span>

                  {/* Active dot indicator */}
                  <div
                    className={`
                      w-1 h-1 rounded-full mt-1 transition-all duration-300
                      ${activeSection === link.id
                        ? 'bg-[#FCEE0C] scale-100'
                        : 'bg-transparent scale-0'
                      }
                    `}
                  />
                </a>
              ))}

              {/* Separator */}
              <div className="w-px h-8 bg-white opacity-20 mx-2"></div>

              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                {/* GitHub Icon */}
                <a
                  href="https://github.com/raghavvvgaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FCEE0C] transition-all duration-200 hover:bg-[#FCEE0C]/10 p-2 rounded"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                {/* X (Twitter) Icon */}
                <a
                  href="https://x.com/raghavvvgaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FCEE0C] transition-all duration-200 hover:bg-[#FCEE0C]/10 p-2 rounded"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile safe area padding for iOS */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </nav>

      {/* Add padding to bottom of page to prevent content from being hidden behind mobile nav */}
      <style jsx>{`
        @media (max-width: 767px) {
          body {
            padding-bottom: 80px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
