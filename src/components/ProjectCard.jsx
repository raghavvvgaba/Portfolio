import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden flex flex-col rounded-lg"
      style={{
        background: 'linear-gradient(to bottom right, #111827, #000000)',
        border: '1px solid rgba(252, 238, 12, 0.4)',
        minHeight: '26rem'
      }}
    >
      {/* Image Section (rectangular) */}
      <div
        className="relative overflow-hidden cursor-pointer aspect-video"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <span className="text-cp-cyan font-mono text-sm uppercase tracking-wider">{project.title}</span>
          </div>
        )}

        {/* Dark Overlay - Appears on Hover */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-60' : 'opacity-0'
          }`}
          style={{ background: 'rgba(0, 0, 0, 0.7)' }}
        ></div>

        {/* Icon Overlay - Top Right, Fade in on Hover */}
        <div
          className={`absolute top-4 right-4 flex items-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ background: 'rgba(0, 0, 0, 0.8)', padding: '10px 14px', borderRadius: '8px', backdropFilter: 'blur(4px)' }}
        >
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cp-cyan hover:text-cp-yellow transition-colors duration-200"
              aria-label="View Source Code"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cp-cyan hover:text-cp-yellow transition-colors duration-200"
              aria-label="View Live Demo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3
          className="text-2xl font-bold text-white uppercase mb-2"
          style={{ fontFamily: '"Rajdhani", sans-serif' }}
        >
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Tech Stack - Outlined Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium uppercase border border-cp-cyan/30 text-cp-cyan hover:border-cp-cyan hover:text-cp-cyan transition-colors duration-200 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Row - Status (left) + View Details (right) */}
        <div className="mt-auto flex items-center justify-between">
          {/* Status Badge */}
          <div
            className={`px-3 py-1 text-xs font-bold uppercase ${
              project.status === 'ACTIVE'
                ? 'bg-green-500/20 text-green-400'
                : 'bg-yellow-500/20 text-yellow-400'
            }`}
          >
            {project.status.replace('_', ' ')}
          </div>

          {/* View Details Button */}
          <button
            className="px-6 py-2 bg-cp-yellow text-black text-xs font-bold uppercase transition-all duration-300 hover:scale-105 hover:bg-cp-cyan hover:text-black"
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
