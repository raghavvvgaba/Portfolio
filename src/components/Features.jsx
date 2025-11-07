import { useEffect, useRef } from 'react';

const features = [
  {
    title: 'Neural Link',
    status: 'ACTIVE',
    statusType: 'success',
    description: 'Direct neural interface integration with quantum encryption protocols.',
    stats: {
      'LATENCY': '0.02ms',
      'BANDWIDTH': '1.2TB/s'
    }
  },
  {
    title: 'Data Matrix',
    status: 'SCANNING',
    statusType: 'warn',
    description: 'Multi-dimensional data analysis with predictive algorithms.',
    stats: {
      'PROCESSED': '42.7M',
      'ACCURACY': '99.8%'
    }
  },
  {
    title: 'Security Grid',
    status: 'BREACH',
    statusType: 'error',
    description: 'Advanced threat detection with autonomous defense protocols.',
    stats: {
      'THREATS': '3 ACTIVE',
      'SHIELDS': '87%'
    }
  }
];

export default function Features() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // CSS animations will handle the entrance
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-cp-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cp-yellow mb-4 uppercase tracking-wider font-ui">
            SYSTEM MODULES
          </h2>
          <p className="text-cp-cyan text-lg font-mono">
            // ADVANCED INTERFACE COMPONENTS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="hud-card rounded-lg overflow-hidden"
            >
              <div className="hud-card-header flex justify-between items-center p-6 border-b border-cp-cyan/30 bg-gradient-to-r from-cp-deep to-transparent">
                <h3 className="text-cp-yellow font-bold text-lg uppercase tracking-wider font-ui">
                  {feature.title}
                </h3>
                <span className={`status-pill status-${feature.statusType}`}>
                  {feature.status}
                </span>
              </div>
              <div className="p-6">
                <div className="grid-bg h-16 mb-6 rounded-lg"></div>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed font-ui">
                  {feature.description}
                </p>
                <div className="text-xs font-mono text-cp-teal space-y-2">
                  {Object.entries(feature.stats).map(([key, value]) => (
                    <div key={key}>
                      <span className="uppercase">{key}:</span>{' '}
                      <span className="text-cp-yellow font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}