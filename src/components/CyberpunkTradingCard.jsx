const CyberpunkTradingCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0" style={{ 
        background: '#000000',
        backgroundImage: `
          linear-gradient(135deg, rgba(197, 0, 60, 0.03) 25%, transparent 25%),
          linear-gradient(225deg, rgba(197, 0, 60, 0.03) 25%, transparent 25%),
          linear-gradient(45deg, rgba(197, 0, 60, 0.03) 25%, transparent 25%),
          linear-gradient(315deg, rgba(197, 0, 60, 0.03) 25%, transparent 25%)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 10px 0, 10px -10px, 0px 10px'
      }} />

      <div className="absolute top-20 left-20 text-cp-cyan opacity-30 font-mono text-xs">
        [SYS:ONLINE]
      </div>
      <div className="absolute top-40 right-32 text-cp-red opacity-30 font-mono text-xs">
        {'{NET:SECURE}'}
      </div>
      <div className="absolute bottom-32 left-40 text-cp-yellow opacity-30 font-mono text-xs">
        [PWR:NORMAL]
      </div>
      <div className="absolute bottom-40 right-20 text-cp-cyan opacity-30 font-mono text-xs">
        {'{DATA:SYNC}'}
      </div>

      <div className="relative" style={{ 
        width: '400px',
        height: '640px'
      }}>
        <div 
          className="absolute inset-0 animate-neon-pulse"
          style={{
            boxShadow: '0 0 20px rgba(197, 0, 60, 0.5), inset 0 0 20px rgba(197, 0, 60, 0.3)',
            clipPath: 'polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))'
          }}
        />

        <div 
          className="relative h-full"
          style={{
            background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
            clipPath: 'polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))',
            border: '2px solid #C5003C'
          }}
        >
          <div 
            className="absolute top-8 left-8 right-8 h-0.5"
            style={{
              background: 'linear-gradient(90deg, transparent, #03D8F3, transparent)',
              boxShadow: '0 0 10px #03D8F3'
            }}
          />
          <div 
            className="absolute bottom-8 left-8 right-8 h-0.5"
            style={{
              background: 'linear-gradient(90deg, transparent, #03D8F3, transparent)',
              boxShadow: '0 0 10px #03D8F3'
            }}
          />

          <div className="absolute top-6 left-6">
            <div 
              className="px-3 py-1 border border-cp-cyan bg-black/50"
              style={{
                boxShadow: '0 0 10px rgba(3, 216, 243, 0.5), inset 0 0 5px rgba(3, 216, 243, 0.3)'
              }}
            >
              <span className="font-mono text-cp-cyan text-sm font-bold">LVL.99</span>
            </div>
          </div>

          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <div 
              className="px-6 py-2"
              style={{
                background: '#0a0a0a',
                border: '1px solid #C5003C',
                borderBottom: '3px solid #C5003C',
                clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)'
              }}
            >
              <span className="font-mono text-cp-red text-xs font-bold tracking-widest">ELITE RUNNER</span>
            </div>
          </div>

          <div className="absolute top-20 left-6 right-6 h-48 relative">
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, #C5003C 0%, #03D8F3 100%)',
                clipPath: 'polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))',
                opacity: '0.8'
              }}
            />
            <div 
              className="absolute inset-0.5 bg-black"
              style={{
                clipPath: 'polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))'
              }}
            />
            
            <div className="absolute inset-1 flex items-center justify-center overflow-hidden" style={{
              clipPath: 'polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))'
            }}>
              <img
                src="/src/assets/Profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-black flex items-center justify-center"><span class="text-cp-cyan font-mono text-xs">NO_SIGNAL</span></div>';
                }}
              />
            </div>

            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cp-cyan" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cp-cyan" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cp-red" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cp-red" />
          </div>

          <div className="absolute top-72 left-6 right-6">
            <div 
              className="py-4 px-6"
              style={{
                background: '#0a0a0a',
                borderLeft: '4px solid #C5003C',
                borderRight: '4px solid #C5003C',
                boxShadow: '0 0 15px rgba(197, 0, 60, 0.3)'
              }}
            >
              <span 
                className="text-3xl font-black tracking-wider uppercase"
                style={{ 
                  fontFamily: '"Orbitron", "Rajdhani", sans-serif',
                  color: '#C5003C',
                  textShadow: '0 0 20px rgba(197, 0, 60, 0.8), 0 0 40px rgba(197, 0, 60, 0.4)',
                  letterSpacing: '0.15em'
                }}
              >
                RAGHAV
              </span>
            </div>
          </div>

          <div className="absolute top-[340px] left-6 right-6">
            <div 
              className="p-4 border"
              style={{
                background: 'rgba(0, 0, 0, 0.8)',
                borderColor: '#03D8F3',
                borderWidth: '1px'
              }}
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-2 h-2 bg-cp-cyan rounded-full animate-pulse" />
                <div className="flex-1 h-px bg-gradient-to-r from-cp-cyan to-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #03D8F3 0%, transparent 100%)' }} />
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-400">CLASS:</span>
                  <span className="text-cp-red font-bold">CYBER RUNNER</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">FACTION:</span>
                  <span className="text-cp-yellow font-bold">NIGHT CITY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">SPECIAL:</span>
                  <span className="text-cp-cyan font-bold">HACKING</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">RANK:</span>
                  <span className="text-white font-bold">ELITE</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-800">
                <p className="text-gray-300 text-xs leading-relaxed">
                  <span className="text-cp-orange font-bold">SKILL:</span> Advanced cybernetic enhancement specialist. 
                  <span className="text-cp-red font-bold">SPEED</span> and 
                  <span className="text-cp-cyan font-bold">STEALTH</span> expert. 
                  Neutralizes threats with <span className="text-cp-yellow font-bold">PRECISION</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 left-6 w-16 h-32">
            <div 
              className="h-full border-2 border-cp-orange relative flex items-end justify-center"
              style={{
                boxShadow: 'inset 0 0 10px rgba(255, 165, 0, 0.3)',
                background: 'rgba(0, 0, 0, 0.6)'
              }}
            >
              <div 
                className="w-full bg-gradient-to-t from-cp-orange to-cp-yellow"
                style={{ 
                  height: '85%',
                  boxShadow: '0 0 15px rgba(255, 165, 0, 0.6)'
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-between py-2">
                <div className="w-full h-px bg-black/50" />
                <div className="w-full h-px bg-black/50" />
                <div className="w-full h-px bg-black/50" />
                <div className="w-full h-px bg-black/50" />
              </div>
              <div 
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 font-mono font-bold text-xl"
                style={{ color: '#FFA500', textShadow: '0 0 10px rgba(255, 165, 0, 0.8)' }}
              >
                85
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 right-6 w-16 h-32">
            <div 
              className="h-full border-2 border-green-500 relative flex items-end justify-center"
              style={{
                boxShadow: 'inset 0 0 10px rgba(34, 197, 94, 0.3)',
                background: 'rgba(0, 0, 0, 0.6)'
              }}
            >
              <div 
                className="w-full bg-gradient-to-t from-green-600 to-green-400"
                style={{ 
                  height: '92%',
                  boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)'
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-between py-2">
                <div className="w-full h-px bg-black/50" />
                <div className="w-full h-px bg-black/50" />
                <div className="w-full h-px bg-black/50" />
                <div className="w-full h-px bg-black/50" />
              </div>
              <div 
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 font-mono font-bold text-xl"
                style={{ color: '#22c55e', textShadow: '0 0 10px rgba(34, 197, 94, 0.8)' }}
              >
                92
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div 
              className="w-12 h-12 flex items-center justify-center"
              style={{
                background: '#0a0a0a',
                border: '2px solid #C5003C',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                boxShadow: '0 0 15px rgba(197, 0, 60, 0.5)'
              }}
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#FCEE0C" 
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>

          <div className="absolute top-12 right-4 text-cp-cyan opacity-50 font-mono text-xs animate-pulse">
            ●
          </div>
          <div className="absolute top-14 right-4 text-cp-red opacity-50 font-mono text-xs animate-pulse" style={{ animationDelay: '0.5s' }}>
            ●
          </div>
          <div className="absolute top-16 right-4 text-cp-yellow opacity-50 font-mono text-xs animate-pulse" style={{ animationDelay: '1s' }}>
            ●
          </div>

          <div className="absolute bottom-0 left-0 w-16 h-16" style={{ 
            background: 'linear-gradient(135deg, rgba(3, 216, 243, 0.2) 0%, transparent 50%)',
            clipPath: 'polygon(0 100%, 0 16px, 16px 0, 100% 100%)'
          }} />
          <div className="absolute bottom-0 right-0 w-16 h-16" style={{ 
            background: 'linear-gradient(-135deg, rgba(197, 0, 60, 0.2) 0%, transparent 50%)',
            clipPath: 'polygon(100% 100%, 100% 16px, 16px 0, 0 100%)'
          }} />
        </div>
      </div>
    </div>
  );
};

export default CyberpunkTradingCard;