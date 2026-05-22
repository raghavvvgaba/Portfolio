import Button from '../ui/Button';

const ProfileCard = () => {
  const profileImage = "https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4By1zZ2Xi6Tek9fBHLtco7GlAYs2M8NU41n0hz";
  const githubUrl = "https://github.com/raghavvvgaba";

  return (
    <div
      className="relative overflow-hidden flex flex-col items-center rounded-3xl w-full px-5 py-8 sm:px-8 sm:py-10"
      style={{
        background: 'linear-gradient(to bottom right, #111827, #000000)',
        border: '1px solid rgba(252, 238, 12, 0.4)',
      }}
    >
      {/* Dot grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(3, 216, 243, 0.5) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 70%)',
        }}
      />

      {/* Circular Profile Image with glowing ring */}
      <div className="relative mb-5 mt-2 group">
        <div
          className="absolute -inset-1.5 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"
          style={{ background: 'linear-gradient(135deg, #FCEE0C, #f59e0b)' }}
        />
        <div
          className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden transition-all duration-300"
          style={{ border: '2px solid transparent' }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(252, 238, 12, 0.8)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
        >
          <img
            src={profileImage}
            alt="Raghav"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Display Name */}
      <h2
        className="text-2xl sm:text-3xl font-bold text-white mb-1"
        style={{ fontFamily: '"Rajdhani", sans-serif' }}
      >
        RAGHAV
      </h2>

      {/* Handle */}
      <p className="text-sm sm:text-base text-gray-400 mb-1">@raghavvvgaba</p>

      {/* Bio Box */}
      <div
        className="w-full rounded-xl py-3 px-4 sm:py-4 sm:px-5 mb-5 sm:mb-6 text-center"
        style={{ background: 'rgba(31, 41, 55, 0.6)' }}
      >
        <p className="text-sm sm:text-base text-cp-cyan">Making computers smarter, and having lots of fun doing it</p>
      </div>

      {/* GitHub Button */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex mb-4 sm:mb-6"
      >
        <Button
          size="sm"
          className="group relative hover:shadow-2xl !px-4 !py-2 !text-sm"
          style={{ boxShadow: '0 0 20px rgba(252, 238, 12, 0.4)' }}
        >
          <span className="relative z-10 flex items-center gap-1.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </span>
        </Button>
      </a>
    </div>
  );
};

export default ProfileCard;
