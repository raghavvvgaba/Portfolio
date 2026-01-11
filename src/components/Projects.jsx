import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: '#121212' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider"
              style={{ fontFamily: '"Rajdhani", sans-serif' }}
            >
              FEATURED PROJECTS
            </h2>
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 text-cp-cyan">
                <span className="text-sm font-mono">MODULE_NEWS</span>
                <div className="w-8 h-0.5 bg-cp-cyan"></div>
              </div>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cp-cyan to-transparent"></div>
        </div>

        {/* Featured Project (Large Card) */}
        {projects.length > 0 && (
          <div className="mb-12">
            <ProjectCard project={projects[0]} featured />
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.open('https://github.com', '_blank')}
            className="px-12 py-4 bg-transparent text-cp-cyan text-sm font-bold uppercase tracking-widest border-2 border-cp-cyan transition-all duration-300 hover:scale-105 hover:bg-cp-cyan hover:text-black"
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}
          >
            More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
