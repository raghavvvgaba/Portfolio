/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

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
        }
      },
      animation: {
        wiggle: 'wiggle 0.6s ease-in-out infinite',
      },
      colors: {
        text: 'var(--color-text)',
        background: 'var(--color-background)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          // '--color-text': '#f0efea',
          // '--color-background': '#0a0805',
          // '--color-primary': '#ded59c',
          // '--color-secondary': '#84741a',
          // '--color-accent': '#ecd136',
          '--color-text': '#f1ddf0',
          '--color-background': '#150814',
          '--color-primary': '#dd9ada',
          '--color-secondary': '#7e2679',
          '--color-accent': '#d258cb',
        },
      })
    }),
  ],
}
