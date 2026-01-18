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
          <div className="mb-6">
            <h2
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              FEATURED PROJECTS
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cp-cyan to-transparent"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
