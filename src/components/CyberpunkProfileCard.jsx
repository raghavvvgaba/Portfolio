const CyberpunkProfileCard = ({ name, title, role, stats = { power: 95, defense: 82 }, description }) => {
  return (
    <div className="relative w-[400px] h-[650px] flex items-center justify-center p-8" style={{ background: '#000000' }}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(45deg, #1a0000 25%, transparent 25%),
          linear-gradient(-45deg, #1a0000 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #1a0000 75%),
          linear-gradient(-45deg, transparent 75%, #1a0000 75%)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
      }}></div>
      
      {/* Floating HUD Markers */}
      <div className="absolute top-8 left-8 text-cp-cyan opacity-40 text-xs font-mono">[SYS.IDLE]</div>
      <div className="absolute top-8 right-8 text-cp-red opacity-40 text-xs font-mono">{'>_ INIT'}</div>
      <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-cp-yellow opacity-30"></div>
      <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-cp-cyan opacity-30"></div>

      {/* Main Card Frame */}
      <div className="relative" style={{
        width: '320px',
        height: '520px',
        background: '#0a0a0a',
        clipPath: 'polygon(20px 0, calc(100% - 10px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)'
      }}>
        {/* Outer Border Glow */}
        <div className="absolute -inset-[2px]" style={{
          background: 'linear-gradient(135deg, #FF0A0A 0%, #FF0A0A 30%, #00E5FF 50%, #FF0A0A 70%, #FF0A0A 100%)',
          clipPath: 'polygon(22px 0, calc(100% - 8px) 0, 100% 22px, 100% calc(100% - 22px), calc(100% - 22px) 100%, 22px 100%, 0 calc(100% - 22px), 0 22px)',
          filter: 'drop-shadow(0 0 8px rgba(255, 10, 10, 0.6)) drop-shadow(0 0 15px rgba(0, 229, 255, 0.4))',
          zIndex: '-1'
        }}></div>

        {/* Secondary Accent Lines */}
        <div className="absolute top-0 left-[15%] w-[70%] h-[1px] bg-gradient-to-r from-transparent via-cp-cyan to-transparent opacity-60"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cp-cyan to-transparent opacity-40"></div>

        {/* Top Label Plate */}
        <div className="absolute top-[16px] left-1/2 transform -translate-x-1/2 px-4 py-1" style={{
          background: '#111',
          clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)',
          border: '1px solid #333'
        }}>
          <div className="absolute -top-[1px] left-[20%] w-[20%] h-[2px] bg-cp-red shadow-[0_0_8px_#FF0A0A]"></div>
          <div className="absolute -top-[1px] right-[20%] w-[20%] h-[2px] bg-cp-red shadow-[0_0_8px_#FF0A0A]"></div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-cp-cyan font-mono" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
            {role || 'OPERATIVE'}
          </span>
        </div>

        {/* Top Left Numeric Indicator */}
        <div className="absolute top-[20px] left-[15px] px-2 py-1 relative" style={{
          background: 'rgba(0, 229, 255, 0.1)',
          border: '1px solid rgba(0, 229, 255, 0.4)'
        }}>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-cp-cyan" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
          <span className="text-xs font-bold text-cp-cyan font-mono">LVL.99</span>
        </div>

        {/* Portrait Window */}
        <div className="absolute top-[50px] left-[20px] right-[20px] h-[160px] relative">
          <div className="absolute inset-0 p-[1px]" style={{
            background: 'linear-gradient(135deg, #FF0A0A 0%, #00E5FF 100%)',
            clipPath: 'polygon(8px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 4px 100%, 0 calc(100% - 4px), 0 8px)'
          }}>
            <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden" style={{ clipPath: 'polygon(8px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 4px 100%, 0 calc(100% - 4px), 0 8px)' }}>
              <img
                src="/src/assets/Profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-cp-cyan font-mono text-sm">NO SIGNAL</span>';
                }}
              />
            </div>
          </div>
          {/* Portrait Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cp-red"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cp-cyan"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cp-cyan"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cp-red"></div>
        </div>

        {/* Name/Title Panel */}
        <div className="absolute top-[225px] left-[20px] right-[20px] py-3 px-4 text-center" style={{
          background: '#111',
          border: '1px solid #333',
          clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)'
        }}>
          <h2 className="text-2xl font-black uppercase tracking-[0.15em] text-cp-red relative" style={{ 
            fontFamily: '"Rajdhani", sans-serif',
            textShadow: '0 0 10px rgba(255, 10, 10, 0.8), 0 0 20px rgba(255, 10, 10, 0.4)'
          }}>
            {name || 'RAGHAV'}
            <div className="absolute inset-0 opacity-10" style={{
              background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
              mixBlendMode: 'overlay'
            }}></div>
          </h2>
        </div>

        {/* Information Panel */}
        <div className="absolute top-[280px] left-[20px] right-[20px] p-4" style={{
          background: '#0d0d0d',
          border: '1px solid #1a1a1a'
        }}>
          <div className="absolute top-0 left-[20%] w-[2px] h-[2px] bg-cp-red"></div>
          <div className="absolute top-0 right-[20%] w-[2px] h-[2px] bg-cp-red"></div>
          
          {/* Dotted Accent */}
          <div className="flex gap-1 mb-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-[2px] h-[2px] bg-cp-yellow opacity-40"></div>
            ))}
          </div>

          <p className="text-[10px] leading-relaxed text-gray-400 font-mono">
            <span className="text-cp-red font-semibold">SPECIALIZED:</span> Full-stack architect with expertise in <span className="text-cp-orange">React ecosystem</span> and <span className="text-cp-orange">performance optimization</span>. Masters in building scalable, production-ready applications with <span className="text-cp-red">cyber-grade security</span> protocols.
          </p>

          <div className="absolute bottom-0 left-[30%] w-[40%] h-[1px] bg-gradient-to-r from-transparent via-cp-cyan to-transparent opacity-30"></div>
        </div>

        {/* Vertical Stat Meters */}
        <div className="absolute bottom-[45px] left-[15px] flex flex-col items-center">
          <div className="text-xs font-bold text-cp-yellow font-mono mb-1">{stats.power || 95}</div>
          <div className="w-[6px] h-[80px] relative" style={{ background: '#111', border: '1px solid #333' }}>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cp-yellow to-cp-orange" style={{ height: `${stats.power || 95}%`, clipPath: 'polygon(0 100%, 100% 100%, 100% 8px, 50% 0, 0 8px)' }}></div>
            {/* Segmented Lines */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="absolute w-full h-[1px] bg-black opacity-50" style={{ bottom: `${i * 20}%` }}></div>
            ))}
          </div>
          <span className="text-[8px] text-gray-500 font-mono mt-1">PWR</span>
        </div>

        <div className="absolute bottom-[45px] right-[15px] flex flex-col items-center">
          <div className="text-xs font-bold text-green-400 font-mono mb-1">{stats.defense || 82}</div>
          <div className="w-[6px] h-[80px] relative" style={{ background: '#111', border: '1px solid #333' }}>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-green-400" style={{ height: `${stats.defense || 82}%`, clipPath: 'polygon(0 100%, 100% 100%, 100% 8px, 50% 0, 0 8px)' }}></div>
            {/* Segmented Lines */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="absolute w-full h-[1px] bg-black opacity-50" style={{ bottom: `${i * 20}%` }}></div>
            ))}
          </div>
          <span className="text-[8px] text-gray-500 font-mono mt-1">DEF</span>
        </div>

        {/* Bottom Center Emblem */}
        <div className="absolute bottom-[65px] left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center" style={{
          background: '#0a0a0a',
          clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)',
          border: '1px solid #333'
        }}>
          <div className="text-cp-red text-xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
        </div>

        {/* Card Frame Notches */}
        <div className="absolute top-[40%] left-0 w-3 h-8 bg-black" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 80%, 0 20%)' }}></div>
        <div className="absolute top-[40%] right-0 w-3 h-8 bg-black" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 80%, 100% 20%)' }}></div>
      </div>
    </div>
  );
};

export default CyberpunkProfileCard;