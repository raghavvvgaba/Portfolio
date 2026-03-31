import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const featuredProjects = projects.filter(p => p.id !== 'diffscribe');

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: '#121212' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-6"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            FEATURED PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cp-cyan to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/all-projects"
            className="px-8 py-3 bg-cp-yellow text-black text-sm font-bold uppercase transition-all duration-300 hover:scale-105 hover:bg-cp-cyan hover:text-black"
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'
            }}
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
