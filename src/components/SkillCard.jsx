import React from 'react';

const SkillItem = ({ skill }) => {
  const isImage = typeof skill.icon === 'string';
  const IconComponent = isImage ? null : skill.icon;

  return (
    <div className="group/item relative flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300 hover:bg-cp-cyan/5">
      <div className="relative z-10 flex items-center justify-center">
        {isImage ? (
          <img
            src={skill.icon}
            alt={skill.name}
            loading="lazy"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-all duration-300 group-hover/item:scale-110 group-hover/item:drop-shadow-[0_0_8px_rgba(3,216,243,0.6)]"
            style={{ filter: 'drop-shadow(0 0 3px rgba(252, 238, 12, 0.3))' }}
          />
        ) : (
          <div
            className="text-white transition-all duration-300 group-hover/item:scale-110"
            style={{ filter: 'drop-shadow(0 0 3px rgba(252, 238, 12, 0.3))' }}
          >
            {React.cloneElement(IconComponent, { size: 40, className: 'group-hover/item:drop-shadow-[0_0_8px_rgba(3,216,243,0.6)]' })}
          </div>
        )}
      </div>
      <span
        className="text-xs sm:text-sm font-bold text-white uppercase mt-2 text-center transition-all duration-300 group-hover/item:text-cp-cyan"
        style={{ fontFamily: '"Rajdhani", sans-serif', letterSpacing: '0.05em' }}
      >
        {skill.name}
      </span>
    </div>
  );
};

const SkillCard = ({ category, skillsList }) => {
  return (
    <div className="relative group">
      {/* Hover glow aura */}
      <div
        className="absolute -inset-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg pointer-events-none"
        style={{ background: 'rgba(3, 216, 243, 0.15)' }}
      />

      {/* Main card */}
      <div
        className="relative flex flex-col transition-all duration-500 group-hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, rgba(17, 19, 24, 0.85), rgba(10, 14, 26, 0.9))',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(3, 216, 243, 0.15)',
          clipPath: 'polygon(0 0, 100% 0, 100% 88%, 94% 100%, 0 100%)',
          height: '500px',
        }}
      >
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(3, 216, 243, 0.8) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
        />

        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.04) 2px, rgba(0, 0, 0, 0.04) 4px)',
          }}
        />

        {/* Corner brackets SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#FCEE0C" strokeWidth="0.6" fill="none" opacity="0.7" vectorEffect="non-scaling-stroke">
            {/* Top-left */}
            <path d="M 0,0 L 14,0" />
            <path d="M 0,0 L 0,14" />
            {/* Top-right */}
            <path d="M 100,0 L 86,0" />
            <path d="M 100,0 L 100,14" />
          </g>
          <g stroke="#03D8F3" strokeWidth="0.4" fill="none" opacity="0.4" vectorEffect="non-scaling-stroke">
            {/* Crosshair bottom-right area */}
            <path d="M 65,90 L 75,90 M 70,85 L 70,95" />
          </g>
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1 p-6 pt-8">
          {/* Category Title */}
          <div className="mb-8">
            <h3
              className="text-xl sm:text-2xl font-black text-white uppercase tracking-[0.2em] text-center"
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                textShadow: '0 0 12px rgba(3, 216, 243, 0.4)',
              }}
            >
              {category.title}
            </h3>
            <div className="flex justify-center mt-2">
              <div
                className="h-0.5 w-16"
                style={{
                  background: 'linear-gradient(90deg, transparent, #03D8F3, transparent)',
                }}
              />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {skillsList.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Terminal-style Footer */}
          <div
            className="mt-auto pt-4 flex justify-between items-center"
            style={{ borderTop: '1px solid rgba(3, 216, 243, 0.1)' }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: '#03D8F3',
                  boxShadow: '0 0 6px #03D8F3',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
              <span
                className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                ONLINE
              </span>
            </div>
            <span
              className="text-[10px] sm:text-xs text-gray-600"
              style={{ fontFamily: '"Courier New", monospace' }}
            >
              {String(skillsList.length).padStart(2, '0')}_MODULES
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
