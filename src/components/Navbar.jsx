import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CyberpunkLogo.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isProjectsPage = location.pathname === '/all-projects';

  useEffect(() => {
    if (isProjectsPage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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
  }, [isProjectsPage]);

  const navLinks = [
    { id: 'home', label: 'Home', href: '/#home' },
    { id: 'projects', label: 'Projects', href: '/#projects' },
    { id: 'contact', label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      {/* Logo */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 z-50 select-none">
        <svg
          viewBox="0 0 1800 240"
          xmlns="http://www.w3.org/2000/svg"
          className="cp-logo"
          aria-label="Cyberpunk style logo"
        >
          <defs>
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
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
          <text x="50%" y="60%" textAnchor="middle" className="cp-text base">RAGHAV GABA</text>
          <text x="50%" y="60%" textAnchor="middle" className="cp-text glitch cyan" clipPath="url(#slice-top)">RAGHAV GABA</text>
          <text x="50%" y="60%" textAnchor="middle" className="cp-text glitch magenta" clipPath="url(#slice-mid)">RAGHAV GABA</text>
          <text x="50%" y="60%" textAnchor="middle" className="cp-text glitch yellow" clipPath="url(#slice-bot)">RAGHAV GABA</text>
        </svg>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block md:fixed md:top-5 md:right-5 md:z-50">
        <div
          className="relative px-2 py-2"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(3, 216, 243, 0.15)',
            clipPath: 'polygon(14px 0, 100% 0, 100% 100%, 0 100%, 0 14px)',
          }}
        >
          {/* Top edge light reflection */}
          <div
            className="absolute top-0 left-4 right-4 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(3, 216, 243, 0.3), transparent)' }}
          />

          <div className="flex items-center gap-2 px-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="relative px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  color: activeSection === link.id ? '#FCEE0C' : 'rgba(255,255,255,0.6)',
                }}
              >
                {activeSection === link.id && (
                  <div
                    className="absolute inset-x-2 bottom-0 h-0.5"
                    style={{
                      background: '#FCEE0C',
                      boxShadow: '0 0 8px rgba(252, 238, 12, 0.6)',
                    }}
                  />
                )}
                {link.label}
              </a>
            ))}

            <div className="w-px h-6 mx-2" style={{ background: 'rgba(255,255,255,0.1)' }} />

            <a
              href="https://github.com/raghavvvgaba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-all duration-300 hover:text-[#FCEE0C] hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(252,238,12,0.4)]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://x.com/raghavvvgaba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-all duration-300 hover:text-[#FCEE0C] hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(252,238,12,0.4)]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-3">
        <div
          className="relative px-2 py-2"
          style={{
            background: 'rgba(10, 10, 15, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(3, 216, 243, 0.12)',
            borderRadius: '20px',
          }}
        >
          {/* Top edge light reflection */}
          <div
            className="absolute top-0 left-6 right-6 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(3, 216, 243, 0.25), transparent)' }}
          />

          <div className="flex items-center justify-around">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="relative flex flex-col items-center py-1.5 px-3 transition-all duration-300"
                style={{ minWidth: '56px' }}
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-wider transition-all duration-300"
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    color: activeSection === link.id ? '#FCEE0C' : 'rgba(255,255,255,0.5)',
                    textShadow: activeSection === link.id ? '0 0 8px rgba(252, 238, 12, 0.4)' : 'none',
                  }}
                >
                  {link.label}
                </span>

                {activeSection === link.id && (
                  <div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{
                      background: '#FCEE0C',
                      boxShadow: '0 0 6px rgba(252, 238, 12, 0.8)',
                    }}
                  />
                )}
              </a>
            ))}

            {/* Social icons */}
            <div className="flex items-center gap-1 ml-1">
              <a
                href="https://github.com/raghavvvgaba"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-all duration-300"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://x.com/raghavvvgaba"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-all duration-300"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom padding for mobile nav spacing */}
      <style>{`
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
