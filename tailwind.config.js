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
        surface: 'var(--color-surface)',
        surfacealt: 'var(--color-surface-alt)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        accentfg: 'var(--color-accent-fg)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)'
      },
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          /* Default theme: Ocean */
          '--color-text': '#0f172a',
          '--color-background': '#f1f5f9',
          '--color-surface': '#ffffff',
            '--color-surface-alt': '#e2e8f0',
          '--color-border': 'rgba(15,23,42,0.12)',
          '--color-accent': '#0ea5e9',
          '--color-accent-fg': '#ffffff',
          '--color-warning': '#f59e0b',
          '--color-success': '#10b981',
          '--gradient-from': '#0ea5e9',
          '--gradient-via': '#6366f1',
          '--gradient-to': '#0ea5e9',
        },
        "[data-theme='midnight']": {
          '--color-text': '#e2e8f0',
          '--color-background': '#0c111b',
          '--color-surface': '#141b26',
          '--color-surface-alt': '#1d2633',
          '--color-border': 'rgba(226,232,240,0.1)',
          '--color-accent': '#6366f1',
          '--color-accent-fg': '#f8fafc',
          '--color-warning': '#fbbf24',
          '--color-success': '#22c55e',
          '--gradient-from': '#0f766e',
          '--gradient-via': '#6366f1',
          '--gradient-to': '#4338ca'
        },
        "[data-theme='sunset']": {
          '--color-text': '#2d1b18',
          '--color-background': '#fff7ed',
          '--color-surface': '#ffffff',
          '--color-surface-alt': '#ffe6d5',
          '--color-border': 'rgba(124,45,18,0.15)',
          '--color-accent': '#f97316',
          '--color-accent-fg': '#ffffff',
          '--color-warning': '#d97706',
          '--color-success': '#16a34a',
          '--gradient-from': '#f97316',
          '--gradient-via': '#ec4899',
          '--gradient-to': '#f43f5e'
        }
      })
    }),
  ],
}
