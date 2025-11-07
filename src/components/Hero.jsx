import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [timestamp, setTimestamp] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const heroRef = useRef(null);

  const texts = [
    'Enter the neon-lit corridors of tomorrow.',
    'Connect to the grid.',
    'Execute your potential.'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    if (displayText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setDisplayText('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentTextIndex]);

  // Update timestamp
  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date();
      const year = 2077;
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      setTimestamp(`${year}-${month}-${day} ${hours}:${minutes}:${seconds} Z`);
    };

    updateTimestamp();
    const interval = setInterval(updateTimestamp, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (action) => {
    if (action === 'connect') {
      // Create particle effect
      createParticleEffect(event.target);
    }
  };

  const createParticleEffect = (element) => {
    const rect = element.getBoundingClientRect();
    const particleCount = 8;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.left = rect.left + rect.width / 2 + 'px';
      particle.style.top = rect.top + rect.height / 2 + 'px';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.backgroundColor = '#03D8F3';
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '9999';
      particle.style.boxShadow = '0 0 10px #03D8F3';

      document.body.appendChild(particle);

      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 2 + Math.random() * 3;
      const lifetime = 1000;

      animateParticle(particle, angle, velocity, lifetime);
    }
  };

  const animateParticle = (particle, angle, velocity, lifetime) => {
    const startTime = Date.now();
    const startX = parseFloat(particle.style.left);
    const startY = parseFloat(particle.style.top);

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / lifetime;

      if (progress >= 1) {
        particle.remove();
        return;
      }

      const distance = velocity * elapsed * 0.1;
      const x = startX + Math.cos(angle) * distance;
      const y = startY + Math.sin(angle) * distance;

      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.opacity = 1 - progress;

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  };

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="hero-bg absolute inset-0 z-0"></div>

      {/* City Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#03D8F3" stroke-width="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#FCEE0C', stopOpacity: 0.8}} />
              <stop offset="50%" style={{stopColor: '#03D8F3', stopOpacity: 0.6}} />
              <stop offset="100%" style={{stopColor: '#55EAD4', stopOpacity: 0.4}} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <g stroke="url(#neonGlow)" stroke-width="1" fill="none" opacity="0.5">
            <path d="M0,300 L600,250 L1200,350 L1920,280" />
            <path d="M0,600 L800,550 L1400,650 L1920,580" />
            <path d="M0,900 L400,850 L1000,950 L1920,880" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-cp-teal text-xs font-mono tracking-widest uppercase animate-pulse">
            // SYSTEM STATUS: ONLINE
          </span>
        </div>

        <h1 className="hero-title glitch-text text-6xl lg:text-8xl font-bold mb-8 tracking-wider uppercase font-ui text-cp-yellow">
          METROPOLIS
          <span className="block text-cp-cyan">NEXUS</span>
        </h1>

        <p className="hero-subtitle text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto font-ui leading-relaxed">
          {displayText}
          <span className="animate-pulse">_</span>
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            className="btn-cp btn-cp-primary btn-lg text-lg px-8 py-4"
            onClick={() => handleButtonClick('connect')}
          >
            <span>CONNECT</span>
          </button>
          <button className="btn-cp btn-cp-secondary btn-lg text-lg px-8 py-4">
            <span>SYNC SYSTEMS</span>
          </button>
        </div>
      </div>

      {/* Timestamp Display */}
      <div className="absolute bottom-8 right-8 text-cp-cyan font-mono text-sm">
        <span>{timestamp}</span>
      </div>
    </section>
  );
}