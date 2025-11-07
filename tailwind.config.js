/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glitch: {
          '0%, 90%, 100%': {
            textShadow: '2px 2px 0px #03D8F3, -2px -2px 0px #C5003C, 0 0 20px #FCEE0C',
            transform: 'translate(0)',
          },
          '92%': {
            textShadow: '-2px 2px 0px #03D8F3, 2px -2px 0px #C5003C, 0 0 25px #FCEE0C',
            transform: 'translate(-2px, 2px)',
          },
          '94%': {
            textShadow: '2px -2px 0px #03D8F3, -2px 2px 0px #C5003C, 0 0 25px #FCEE0C',
            transform: 'translate(2px, -2px)',
          },
          '96%': {
            textShadow: '1px 1px 0px #03D8F3, -1px -1px 0px #C5003C, 0 0 20px #FCEE0C',
            transform: 'translate(-1px, 1px)',
          },
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
        scan: {
          '0%': { left: '-100%' },
          '50%, 100%': { left: '100%' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.6s ease-in-out infinite',
        glitch: 'glitch 4s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        'hud-scan': 'hud-scan 3s ease-in-out infinite',
        'telemetry-pulse': 'telemetry-pulse 2s ease-in-out infinite',
        scan: 'scan 3s ease-in-out infinite',
      },
      colors: {
        // Cyberpunk Color Palette
        'cp-yellow': '#FCEE0C',
        'cp-cyan': '#03D8F3',
        'cp-teal': '#55EAD4',
        'cp-red': '#C5003C',
        'cp-deep': '#00060E',
        'cp-surface': '#111318',
        'cp-surface-2': '#1C1F26',
        'cp-black': '#000000',
      },
      fontFamily: {
        'ui': ['Rajdhani', 'system-ui', 'Arial', 'sans-serif'],
        'aux': ['Orbitron', 'Rajdhani', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'neon-yellow': '0 0 10px #FCEE0C, 0 0 20px #FCEE0C, 0 0 30px #FCEE0C',
        'neon-cyan': '0 0 10px #03D8F3, 0 0 20px #03D8F3, 0 0 30px #03D8F3',
        'neon-red': '0 0 10px #C5003C, 0 0 20px #C5003C, 0 0 30px #C5003C',
        'neon-teal': '0 0 10px #55EAD4, 0 0 20px #55EAD4, 0 0 30px #55EAD4',
      },
    }
  },
}