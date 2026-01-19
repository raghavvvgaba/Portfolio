export default function CyberpunkProfileCardSVG() {
  return (
    <svg width="360" height="520" viewBox="-20 -20 400 560" xmlns="http://www.w3.org/2000/svg">

      <defs>
        {/* --- HARD GLOW (CONTROLLED) --- */}
        <filter id="edgeGlow">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>

        {/* --- TEXT GLOW (SUBTLE) --- */}
        <filter id="textGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* --- CYAN GLOW --- */}
        <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* --- GRADIENT FOR BLUE POLYGON --- */}
        <linearGradient id="polygonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38e8ff" />
          <stop offset="35%" stopColor="#000000" />
        </linearGradient>

        {/* --- DOT GLOW --- */}
        <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* --- LIGHT NOISE --- */}
        <filter id="microNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.12" />
          </feComponentTransfer>
        </filter>

        {/* --- PORTRAIT CLIP --- */}
        <clipPath id="portraitClip">
          <polygon points="20,18 340,18 340,220 300,258 60,258 20,220" />
        </clipPath>
      </defs>

      {/* === BACKGROUND === */}
      {/* <rect width="360" height="600" fill="#0a0a0d" /> */}

      {/* === PRIMARY CARD BORDER (CLEAN, DEFINED) === */}
      <polygon
        points="20,20 60,0 300,0 340,20 340,500 300,520 60,520 20,500"
        fill="#111216"
        fillOpacity="0.55"
        stroke="#ff3b3b"
        strokeWidth="2"
      />

      {/* === SECONDARY CHAOS OUTLINES (OFFSET, BROKEN) === */}
      <polyline
        points="24,24 64,6 296,6"
        stroke="#ff3b3b"
        strokeWidth="1"
        opacity="0.35"
        fill="none"
      />
      <polyline
        points="336,40 336,160"
        stroke="#38e8ff"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
      />
      <line x1="22" y1="360" x2="22" y2="410" stroke="#ff3b3b" opacity="0.25" />

      {/* === RANDOM BORDER-ADJACENT MARKS === */}
      <line x1="70" y1="14" x2="86" y2="10" stroke="#ff3b3b" opacity="0.4" />
      <line x1="310" y1="512" x2="330" y2="504" stroke="#38e8ff" opacity="0.3" />
      <circle cx="28" cy="260" r="1" fill="#ff3b3b" opacity="0.5" />
      <circle cx="332" cy="300" r="1" fill="#38e8ff" opacity="0.5" />

      {/* === PORTRAIT FRAME (CLEAN) - BEHIND BLUE POLYGON === */}
      <polygon points="20,18 340,18 340,220 300,258 60,258 20,220" fill="#000" stroke="#ff3b3b" strokeWidth="2" />
      <polygon points="22,20 342,20 342,222 302,260 62,260 22,222" fill="none" stroke="#38e8ff" opacity="0.6" />

      <polygon
        points="140,-14 220,-14 230,0 220,14 140,14 130,0"
        fill="#ff3b3b"
        fillOpacity="0.5"
        stroke="#ff3b3b"
        strokeWidth="1.5"
      />
      <text x="180" y="4" textAnchor="middle" fontSize="12" fill="white" letterSpacing="1" filter="url(#textGlow)">
        DEVELOPER
      </text>

      {/* === TITLE (LOCKED, CLEAN, NO JITTER) === */}
      <text
        x="180"
        y="310"
        textAnchor="middle"
        fontSize="28"
        fill="#ff3b3b"
        letterSpacing="3"
      >
        RAGHAV
      </text>

      {/* === CHAOS IN EMPTY MID ZONE === */}
      <line x1="60" y1="320" x2="90" y2="314" stroke="#ff3b3b" opacity="0.25" />
      <line x1="270" y1="342" x2="300" y2="348" stroke="#38e8ff" opacity="0.25" />
      <circle cx="120" cy="310" r="1" fill="#ff3b3b" opacity="0.4" />
      <circle cx="240" cy="352" r="1" fill="#38e8ff" opacity="0.4" />

      {/* === ABILITY PANEL === */}
      <rect x="50" y="330" width="260" height="60" fill="#0f1013" stroke="rgba(255,255,255,0.1)" />
      <text x="180" y="360" textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#b6b6b6">
        Design. Code. Execute.
      </text>

      {/* === STATS (CLEAN ALIGNMENT) === */}
      <rect x="50" y="395" width="12" height="70" fill="#ff9f1c" />
      <rect x="298" y="395" width="12" height="70" fill="#2dff7a" />

      <text x="56" y="490" textAnchor="middle" fontSize="22" fill="#ff9f1c">5</text>
      <text x="304" y="490" textAnchor="middle" fontSize="22" fill="#2dff7a">3</text>

      {/* === RED DOTS BELOW IMAGE BLOCK (LEFT SIDE) === */}
      <circle cx="30" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="30" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="30" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="30" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="42" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="42" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="42" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="42" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="54" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="54" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="54" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="54" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />

      {/* === RED DOTS BELOW IMAGE BLOCK (RIGHT SIDE) === */}
      <circle cx="310" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="310" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="310" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="310" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="298" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="298" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="298" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="298" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="286" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="286" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="286" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="286" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="274" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="274" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="274" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="274" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="262" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="262" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="262" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="262" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="250" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="250" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="250" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="250" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="238" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="238" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="238" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="238" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="226" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="226" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="226" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="226" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="214" cy="240" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="214" cy="252" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="214" cy="264" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="214" cy="276" r="1.5" fill="#ff3b3b" filter="url(#dotGlow)" opacity="0.7" />

      {/* === IMAGE === */}
      <g clipPath="url(#portraitClip)">
        <rect x="20" y="18" width="320" height="240" fill="#0a0a0d" />
        <image
          href="https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4BqlBsvqwAyeZ4YP1CjKkQnIDplaxWVREF7O9d"
          x="20"
          y="18"
          width="320"
          height="240"
          preserveAspectRatio="xMidYMin slice"
        />
        <rect x="20" y="18" width="320" height="240" filter="url(#microNoise)" opacity="0.2" />
      </g>

      {/* === TOP HUD (CLEAN) - ON TOP OF IMAGE === */}
      <polygon
        points="22,18 86,18 86,31 66,38 66,258 46,258 22,258"
        fill="url(#polygonGradient)"
        fillOpacity="0.5"
        stroke="#38e8ff"
        strokeWidth="2"
        filter="url(#cyanGlow)"
      />

      {/* === GLOWING DOTS IN BLUE BOX === */}
      <circle cx="30" cy="30" r="1.5" fill="#38e8ff" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="30" cy="42" r="1.5" fill="#38e8ff" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="30" cy="54" r="1.5" fill="#38e8ff" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="42" cy="30" r="1.5" fill="#38e8ff" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="42" cy="42" r="1.5" fill="#38e8ff" filter="url(#dotGlow)" opacity="0.8" />
      <circle cx="42" cy="54" r="1.5" fill="#38e8ff" filter="url(#dotGlow)" opacity="0.5" />
      <circle cx="54" cy="30" r="1.5" fill="#38e8ff" filter="url(#dotGlow)" opacity="0.6" />
      <circle cx="54" cy="42" r="1.5" fill="#38e8ff" filter="url(#dotGlow)" opacity="0.7" />
      <circle cx="54" cy="54" r="1.5" fill="#38e8ff" filter="url(#dotGlow)" opacity="0.5" />

      <text x="44" y="78" textAnchor="middle" fontSize="28" fill="white">9</text>

      {/* === EXTRA RANDOM HUD DEBRIS === */}
      <line x1="90" y1="480" x2="120" y2="468" stroke="#ff3b3b" opacity="0.2" />
      <line x1="260" y1="460" x2="280" y2="472" stroke="#38e8ff" opacity="0.2" />

    </svg>
  );
}