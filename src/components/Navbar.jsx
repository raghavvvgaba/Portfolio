import { useState, useEffect } from 'react';
import './CyberpunkLogo.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Vignette overlay covering entire top section when scrolled */}
      {scrolled && (
        <div
          className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-40 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%)',
          }}
        />
      )}

      {/* Cyberpunk Logo on top-left corner of the page */}
      <div className="fixed top-6 left-6 z-50 select-none">
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

      {/* Compact Navigation Bar - Top Right */}
      <nav className="fixed top-6 right-3 z-50">
        <div
          className="relative border-2 border-yellow-400"
          style={{
            clipPath: 'polygon(25px 0, 100% 0, 100% 100%, 0 100%)',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="flex items-center justify-start h-14 px-5" style={{ paddingLeft: '40px' }}>
            {/* Right Side - Buttons & Icons */}
            <div className="flex items-center space-x-4">
              {/* Home Button */}
              <a
                href="#home"
                className="px-4 py-5 text-white font-bold text-xs uppercase tracking-wide transition-all duration-200 hover:bg-yellow-500 hover:text-black"
                style={{ fontFamily: '"Arial Black", "Impact", sans-serif', fontWeight: 800 }}
              >
                Home
              </a>

              {/* Projects Button */}
              <a
                href="#projects"
                className="px-4 py-5 text-white font-bold text-xs uppercase tracking-wide transition-all duration-200 hover:bg-yellow-500 hover:text-black"
                style={{ fontFamily: '"Arial Black", "Impact", sans-serif', fontWeight: 800 }}
              >
                Projects
              </a>

              {/* Separator */}
              <div className="w-px h-6 bg-white opacity-30"></div>

              {/* GitHub Icon */}
              <a
                href="https://github.com/raghavvvgaba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500 transition-all duration-200 hover:bg-yellow-500/10 p-2 rounded"
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
                className="text-white hover:text-yellow-500 transition-all duration-200 hover:bg-yellow-500/10 p-2 rounded"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
