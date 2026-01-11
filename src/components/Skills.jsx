import { skills } from '../data/skills';

const Skills = () => {
  const categories = [
    {
      id: 'frontend',
      title: 'FRONTEND',
      icon: '🎨',
      color: 'cp-cyan'
    },
    {
      id: 'backend',
      title: 'BACKEND',
      icon: '⚙️',
      color: 'cp-teal'
    },
    {
      id: 'tools',
      title: 'TOOLS & DEVOPS',
      icon: '🛠️',
      color: 'cp-yellow'
    },
    {
      id: 'emerging',
      title: 'EMERGING TECH',
      icon: '🚀',
      color: 'cp-red'
    }
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: '#0f0f0f' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-4"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            Skills & Tools
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Technologies I use to craft exceptional digital experiences
          </p>
          <div className="w-24 h-1 bg-cp-yellow mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-6 relative overflow-hidden group hover:border-cp-cyan transition-all duration-300"
              style={{
                background: '#1a1a1a',
                border: '1px solid #333'
              }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3
                  className="text-base font-bold text-white uppercase tracking-wider"
                  style={{ fontFamily: '"Rajdhani", sans-serif' }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {skills[category.id].map((skill, index) => (
                  <div key={index} className="group/item">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <div>
                          <div
                            className="text-sm font-semibold text-white uppercase"
                            style={{ fontFamily: '"Rajdhani", sans-serif' }}
                          >
                            {skill.name}
                          </div>
                          {skill.description && (
                            <div className="text-xs text-gray-500">{skill.description}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1 bg-gray-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cp-cyan to-cp-teal transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-cp-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Continuous Learning Section */}
        <div
          className="mt-12 p-8 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
            border: '2px solid #FCEE0C'
          }}
        >
          <div className="relative z-10">
            <h3
              className="text-2xl font-black text-cp-yellow mb-4 uppercase"
              style={{ fontFamily: '"Rajdhani", sans-serif' }}
            >
              Continuous Learning
            </h3>
            <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto">
              Technology evolves at quantum speed, and so do I. Constantly exploring new frameworks,
              architectures, and paradigms to stay at the cutting edge of web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-3 py-1 text-xs font-semibold text-cp-cyan bg-cp-cyan/10 border border-cp-cyan/30 uppercase">
                WebAssembly
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-cp-cyan bg-cp-cyan/10 border border-cp-cyan/30 uppercase">
                AI Integration
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-cp-cyan bg-cp-cyan/10 border border-cp-cyan/30 uppercase">
                Edge Computing
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-cp-cyan bg-cp-cyan/10 border border-cp-cyan/30 uppercase">
                JAMstack
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-cp-cyan bg-cp-cyan/10 border border-cp-cyan/30 uppercase">
                Microservices
              </span>
            </div>
          </div>

          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cp-cyan/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
