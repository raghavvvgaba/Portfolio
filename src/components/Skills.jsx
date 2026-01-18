import React from 'react';
import { skills } from '../data/skills.jsx';

const Skills = () => {
  const categories = [
    {
      id: 'frontend',
      title: 'FRONTEND',
      accent: 'cp-cyan',
      secondary: 'cp-teal',
      glowColor: 'rgba(252, 238, 12, 0.9)'
    },
    {
      id: 'backend',
      title: 'BACKEND',
      accent: 'cp-teal',
      secondary: 'cp-cyan',
      glowColor: 'rgba(252, 238, 12, 0.9)'
    },
    {
      id: 'programming',
      title: 'PROGRAMMING LANGUAGES & DEVOPS',
      accent: 'cp-yellow',
      secondary: 'cp-cyan',
      glowColor: 'rgba(252, 238, 12, 0.9)'
    }
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dark overlay - matching hero section exactly */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,6,14,0.7) 0%, rgba(10,14,26,0.7) 50%, rgba(17,19,24,0.7) 100%)'
        }}
      />

      {/* Scanline Overlay - matching hero section exactly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 4px)',
          opacity: '0.4'
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="relative inline-block">
          <h2
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-4"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            Skills & Tools
          </h2>
          <div
            className="absolute -bottom-2 left-0 w-32 h-0.5"
            style={{
              background: 'linear-gradient(90deg, #FCEE0C, #03D8F3)',
              boxShadow: '0 0 8px rgba(252, 238, 12, 0.5)'
            }}
          ></div>
        </div>
        <p className="text-lg text-gray-400 mt-6 max-w-2xl">
          Technologies I use to craft exceptional digital experiences
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <SkillCard key={category.id} category={category} skillsList={skills[category.id] || []} />
        ))}
      </div>

      {/* SVG Definitions for Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="crispGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur"/>
            <feFlood flood-color="#FCEE0C" flood-opacity="1" result="glow"/>
            <feComposite in="glow" in2="blur" operator="in" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Scanline pattern for background */}
          <pattern id="scanlines" width="100%" height="4" patternUnits="userSpaceOnUse">
            <rect width="100%" height="2" fill="transparent"/>
            <rect width="100%" height="1" y="2" fill="rgba(0,0,0,0.15)"/>
          </pattern>

          {/* Grid pattern for background */}
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="#FCEE0C" opacity="0.1"/>
          </pattern>
        </defs>
      </svg>
    </section>
  );
};

const SkillCard = ({ category, skillsList }) => {
  return (
    <div
      className="relative group cursor-pointer transition-all duration-300"
      style={{
        background: '#111318',
        minHeight: '480px'
      }}
    >
      {/* Scanline Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 4px)',
          opacity: '0.4'
        }}
      />

      {/* HUD Frame - Cyberpunk Border System */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 2, overflow: 'visible' }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#crispGlow)" stroke="#FCEE0C" fill="none" strokeWidth="0.4" vector-effect="non-scaling-stroke">

          {/* === PRIMARY CORNER BRACKETS (Outer Frame) === */}

          {/* Top-Left Corner L-Bracket */}
          <path d="M -0.5,-0.5 L 17.5,-0.5" />
          <path d="M -0.5,-0.5 L -0.5,17.5" />
          {/* Micro L inside top-left corner */}
          <path d="M 1.5,1.5 L 1.5,-0.5 M 1.5,-0.5 L -0.5,1.5" />
          {/* Tick marks on top-left */}
          <path d="M 19.5,-0.5 L 19.5,-2" opacity="0.6" />
          <path d="M -0.5,19.5 L -2,19.5" opacity="0.6" />

          {/* Top-Right Corner L-Bracket */}
          <path d="M 100.5,-0.5 L 82.5,-0.5" />
          <path d="M 100.5,-0.5 L 100.5,17.5" />
          {/* Micro L inside top-right corner */}
          <path d="M 98.5,1.5 L 98.5,-0.5 M 98.5,-0.5 L 100.5,1.5" />
          {/* Tick marks on top-right */}
          <path d="M 80.5,-0.5 L 80.5,-2" opacity="0.6" />
          <path d="M 100.5,19.5 L 102,19.5" opacity="0.6" />

          {/* Bottom-Right Corner L-Bracket (asymmetrical - no micro L) */}
          <path d="M 100.5,100.5 L 100.5,82.5" />
          <path d="M 100.5,100.5 L 82.5,100.5" />
          {/* Tick marks on bottom-right */}
          <path d="M 100.5,80.5 L 102,80.5" opacity="0.6" />
          <path d="M 80.5,100.5 L 80.5,102" opacity="0.6" />

          {/* Bottom-Left Corner L-Bracket */}
          <path d="M -0.5,100.5 L -0.5,82.5" />
          <path d="M -0.5,100.5 L 17.5,100.5" />
          {/* Micro L inside bottom-left corner */}
          <path d="M 1.5,98.5 L 1.5,100.5 M 1.5,100.5 L -0.5,98.5" />
          {/* Tick marks on bottom-left */}
          <path d="M -0.5,80.5 L -2,80.5" opacity="0.6" />
          <path d="M 19.5,100.5 L 19.5,102" opacity="0.6" />

          {/* === BORDER LINES WITH ASYMMETRICAL GAPS === */}

          {/* Top Line - segmented with micro-gap at 65% */}
          <path d="M 19.5,-0.5 L 63.5,-0.5" />
          <path d="M 65.5,-0.5 L 74.5,-0.5" />
          {/* Extra top segment near corners */}
          <path d="M 22.5,-0.5 L 22.5,1" opacity="0.4" />
          <path d="M 71.5,-0.5 L 71.5,1" opacity="0.4" />

          {/* Bottom Line - segmented with gap at 45% */}
          <path d="M 19.5,100.5 L 43.5,100.5" />
          <path d="M 45.5,100.5 L 74.5,100.5" />
          {/* Extra bottom segment details */}
          <path d="M 22.5,100.5 L 22.5,99" opacity="0.4" />
          <path d="M 71.5,100.5 L 71.5,99" opacity="0.4" />

          {/* Left Line - segmented with gap at 72% */}
          <path d="M -0.5,19.5 L -0.5,70.5" />
          <path d="M -0.5,72.5 L -0.5,84.5" />
          {/* Extra left segment details */}
          <path d="M -0.5,22.5 L 1,22.5" opacity="0.4" />
          <path d="M -0.5,71.5 L 1,71.5" opacity="0.4" />

          {/* Right Line - segmented with gap at 62% */}
          <path d="M 100.5,19.5 L 100.5,60.5" />
          <path d="M 100.5,62.5 L 100.5,84.5" />
          {/* Extra right segment details */}
          <path d="M 100.5,22.5 L 99,22.5" opacity="0.4" />
          <path d="M 100.5,63.5 L 99,63.5" opacity="0.4" />

          {/* === INNER OFFSET BORDER (Depth Layer) === */}
          <path
            d="M 3.5,3.5 L 95.5,3.5 L 95.5,95.5 L 3.5,95.5 Z"
            opacity="0.3"
            strokeWidth="0.5"
          />

          {/* === TECHNICAL DETAILS & MARKERS === */}

          {/* Crosshairs - at (20%, 80%) and (80%, 20%) */}
          {/* Bottom-left area crosshair */}
          <path d="M 20,78 L 20,82 M 18,80 L 22,80" opacity="0.5" strokeWidth="0.5" />
          {/* Top-right area crosshair */}
          <path d="M 80,18 L 80,22 M 78,20 L 82,20" opacity="0.5" strokeWidth="0.5" />

          {/* Plus Signs - at (85%, 50%) and (50%, 85%) */}
          <path d="M 85,48 L 85,52 M 83,50 L 87,50" opacity="0.4" strokeWidth="0.6" />
          <path d="M 48,85 L 52,85 M 50,83 L 50,87" opacity="0.4" strokeWidth="0.6" />

          {/* Additional Micro Tick Marks */}
          {/* Along top border */}
          <path d="M 30,8 L 30,7" opacity="0.3" strokeWidth="0.4" />
          <path d="M 70,8 L 70,7" opacity="0.3" strokeWidth="0.4" />
          {/* Along bottom border */}
          <path d="M 35,92 L 35,93" opacity="0.3" strokeWidth="0.4" />
          <path d="M 65,92 L 65,93" opacity="0.3" strokeWidth="0.4" />
          {/* Along left border */}
          <path d="M 8,30 L 7,30" opacity="0.3" strokeWidth="0.4" />
          <path d="M 8,65 L 7,65" opacity="0.3" strokeWidth="0.4" />
          {/* Along right border */}
          <path d="M 92,35 L 93,35" opacity="0.3" strokeWidth="0.4" />
          <path d="M 92,55 L 93,55" opacity="0.3" strokeWidth="0.4" />

          {/* Corner Reinforcement Lines (adds to technical feel) */}
          <path d="M 8,18 L 8,18" opacity="0.3" /> {/* Dot */}
          <path d="M 18,8 L 18,8" opacity="0.3" /> {/* Dot */}
          <path d="M 92,18 L 92,18" opacity="0.3" /> {/* Dot */}
          <path d="M 82,8 L 82,8" opacity="0.3" /> {/* Dot */}
          <path d="M 92,82 L 92,82" opacity="0.3" /> {/* Dot */}
          <path d="M 8,82 L 8,82" opacity="0.3" /> {/* Dot */}
          <path d="M 18,92 L 18,92" opacity="0.3" /> {/* Dot */}
          <path d="M 82,92 L 82,92" opacity="0.3" /> {/* Dot */}

        </g>
      </svg>

      {/* Hover Glow Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${category.glowColor}08 0%, transparent 70%)`,
          zIndex: 1
        }}
      />

      {/* Card Content */}
      <div className="relative p-6 z-10 h-full flex flex-col">
        {/* Header */}
        <h3
          className="text-xl font-bold text-white uppercase tracking-wider text-center pt-4 pb-4 mb-6 border-b border-gray-800"
          style={{
            fontFamily: '"Rajdhani", sans-serif',
            textShadow: `0 0 8px ${category.glowColor}80`,
            letterSpacing: '0.15em'
          }}
        >
          {category.title}
        </h3>

        {/* Skills List */}
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-6">
            {skillsList.map((skill, index) => (
              <SkillItem
                key={index}
                skill={skill}
              />
            ))}
          </div>
        </div>

        {/* Technical Footer Info */}
        <div className="mt-auto pt-4 border-t border-gray-800/50 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div
              className="w-1.5 h-1.5"
              style={{
                background: '#FCEE0C',
                boxShadow: `0 0 6px #FCEE0C`,
                animation: 'pulse 2s infinite'
              }}
            />
            <span
              className="text-xs text-gray-500 uppercase tracking-widest"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Active
            </span>
          </div>
          <span
            className="text-xs text-gray-600 font-mono"
            style={{ fontFamily: '"Courier New", monospace' }}
          >
            {skillsList.length} MODULES
          </span>
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ skill }) => {
  const IconComponent = skill.icon;

  return (
    <div className="group/item flex flex-col items-center justify-center p-4">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {React.cloneElement(IconComponent, { size: 40 })}
      </div>
      <div
        className="text-sm font-bold text-white uppercase mt-3 text-center"
        style={{
          fontFamily: '"Rajdhani", sans-serif',
          letterSpacing: '0.05em'
        }}
      >
        {skill.name}
      </div>
    </div>
  );
};

export default Skills;
