import { useState } from 'react';

const ProjectCard = ({ project, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (featured) {
    return (
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: '#1a1a1a',
          border: '2px solid #03D8F3'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cp-cyan/30">
          <span className="text-cp-cyan text-xs font-mono">MODULE_HIGHLIGHT</span>
          <span className="text-gray-400 text-xs font-mono">{new Date().toLocaleDateString('de-DE')}</span>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Badge */}
          <div className="inline-block mb-4 px-4 py-2 bg-cp-yellow text-black text-xs font-bold uppercase tracking-wider">
            {project.status}
          </div>

          {/* Title */}
          <h3
            className="text-3xl font-black text-cp-cyan mb-3 uppercase"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-base mb-4 leading-relaxed">
            {project.summary}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-semibold text-cp-cyan bg-cp-cyan/10 border border-cp-cyan/30 uppercase"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-cp-yellow text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'
                }}
              >
                View Live
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-transparent text-cp-cyan text-xs font-bold uppercase tracking-wider border border-cp-cyan transition-all duration-300 hover:bg-cp-cyan hover:text-black"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'
                }}
              >
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Image Background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
    );
  }

  return (
    <div
      className="relative group cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: '#1a1a1a',
        border: '1px solid #333'
      }}
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div
          className="w-full h-full hidden items-center justify-center bg-gray-900"
          style={{ display: 'none' }}
        >
          <span className="text-cp-cyan font-mono text-xs">{project.title.toUpperCase()}</span>
        </div>
      </div>

      {/* Banner */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-cp-cyan text-xs font-mono">NEWS_</span>
          <div className="w-2 h-2 bg-cp-cyan rotate-45"></div>
        </div>
        <h3
          className="text-lg font-bold text-white uppercase"
          style={{ fontFamily: '"Rajdhani", sans-serif' }}
        >
          {project.title}
        </h3>
      </div>

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <p className="text-gray-300 text-sm mb-4">{project.summary}</p>
          <div className="flex gap-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-cp-yellow text-black text-xs font-bold uppercase text-center transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'
                }}
              >
                View Live
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-transparent text-cp-cyan text-xs font-bold uppercase text-center border border-cp-cyan transition-all duration-300 hover:bg-cp-cyan hover:text-black"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'
                }}
              >
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
