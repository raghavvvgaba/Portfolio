import React from 'react';
import { skills } from '../data/skills.jsx';
import SkillCard from './SkillCard';

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
          background: 'linear-gradient(135deg, rgba(0,6,14,0.4) 0%, rgba(10,14,26,0.4) 50%, rgba(17,19,24,0.4) 100%)'
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

      <div className="relative max-w-7xl mx-auto">
        <div className="relative inline-block">
          <h2
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-4"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
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
        <p className="text-lg text-white mt-6 max-w-2xl">
          Technologies I use to craft exceptional digital experiences
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <SkillCard key={category.id} category={category} skillsList={skills[category.id] || []} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
