/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors from UI-DESIGN-SPEC.md
        primary: '#FFD700',
        'primary-dark': '#FFC125',
        secondary: '#FFF500',
        tertiary: '#F0E68C',
        'background-dark': '#1A1A1A',
        'background-nav': '#2D2D2D',
        'accent-cyan': '#00FFFF',
        'accent-cyan-dark': '#00CED1',
        'accent-red': '#FF0033',

        // Legacy cyberpunk colors (keep for compatibility)
        'cp-yellow': '#FCEE0C',
        'cp-cyan': '#03D8F3',
        'cp-teal': '#55EAD4',
        'cp-red': '#C5003C',
        'surface': '#111318',
        'surface-2': '#1C1F26',
        'deep': '#00060E',
        'ink': '#000000'
      },
      fontFamily: {
        ui: ["Rajdhani","system-ui","Arial","sans-serif"],
        aux:["Orbitron","Rajdhani","sans-serif"],
        mono:["ui-monospace","SFMono-Regular","Menlo","monospace"],
        display: ['Inter', 'sans-serif'],
        body: ['Arial', 'sans-serif']
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', fontWeight: '900' }],
        'heading-xl': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-lg': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-md': ['24px', { lineHeight: '1.4', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.7', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.8', fontWeight: '400' }],
        'nav': ['14px', { lineHeight: '1.4', fontWeight: '600' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      boxShadow: {
        'neon-out': '0 0 8px rgba(3,216,243,.35)',
        'neon-in' : 'inset 0 0 6px rgba(252,238,12,.35)',
        'glow': '0 4px 12px rgba(0, 255, 255, 0.3)',
        'nav': '0 2px 4px rgba(0,0,0,0.3)',
        'sm': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'md': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        'lg': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        'button': '0 2px 4px rgba(0,0,0,0.2)',
      },
      borderWidth: { 1: '1px', 2: '2px' },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'md': '6px',
        'lg': '12px',
        'full': '9999px',
      },
      keyframes: {
        scan: { '0%': { backgroundPosition: '0% 0%' }, '100%': { backgroundPosition: '0% 100%' } },
        glitch: {
          '0%,100%': { transform: 'none' },
          '20%': { transform: 'skew(-2deg)' },
          '40%': { transform: 'skew(2deg)' },
          '60%': { transform: 'skew(-1deg)' },
          '80%': { transform: 'skew(1deg)' }
        },
        underline: { '0%': { width: '0%' }, '100%': { width: '100%' } },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(10px)' },
        },
        'hud-scan': {
          '0%': { left: '-100%' },
          '50%, 100%': { left: '100%' },
        },
        'telemetry-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        scan: 'scan 1.8s linear infinite',
        glitch: 'glitch .6s ease-in-out both',
        underline: 'underline .25s cubic-bezier(0.2,0.8,0.2,1) forwards',
        wiggle: 'wiggle 0.6s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        'hud-scan': 'hud-scan 3s ease-in-out infinite',
        'telemetry-pulse': 'telemetry-pulse 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      skew: { 6: '6deg' }
    }
  },
  plugins: [
    // Notched corners as utility classes
    function({ addUtilities }) {
      const u = {
        '.notch': {
          position: 'relative',
          clipPath: 'polygon(0% 8px,8px 0%,calc(100% - 8px) 0%,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0% calc(100% - 8px))'
        },
        '.hud-border': {
          border: '1px solid #FCEE0C',
          boxShadow: 'inset 0 0 0 1px rgba(3,216,243,.25)'
        },
        '.edge-glow': {
          textShadow: '0 0 1px rgba(252,238,12,.6), 0 0 6px rgba(3,216,243,.35)'
        },
        '.focus-ring': {
          outline: '2px solid #00FFFF',
          outlineOffset: '2px',
        }
      };
      addUtilities(u);
    }
  ]
}
