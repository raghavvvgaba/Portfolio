import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to="/"
              className="text-cp-cyan hover:text-cp-yellow transition-colors duration-200 flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span className="text-sm uppercase tracking-wide font-semibold">Back to Home</span>
            </Link>
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            ALL PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cp-cyan to-transparent mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
