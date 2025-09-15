/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Neon Magenta/Rosa
        primary: {
          '50': '#ffeeff',
          '400': '#ff40ff',
          '500': '#d946ef', // Cor principal - magenta neon
          '600': '#c726d9',
          '900': '#7c3aed',
        },
        // Secondary - Rosa Neon
        secondary: {
          '400': '#ff80ff',
          '500': '#ff00ff', // Cor secundária - rosa neon
          '600': '#e91e63',
        },
        // Accent - Roxo Neon
        accent: {
          '400': '#f0a0ff',
          '500': '#a855f7', // Cor de destaque - roxo neon
          '600': '#9333ea',
        },
        // Dark - Tons escuros cyberpunk
        dark: {
          '700': '#2d1b47',
          '800': '#1a0d2e',
          '900': '#0a0a0a',
          '950': '#000000',
        },
        // Neon effects
        neon: {
          'pink': '#ff00ff',
          'magenta': '#e040e0',
          'purple': '#a855f7',
          'glow': '#ff80ff',
          'bright': '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in',
        'slide-up': 'slideUp 0.7s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 87, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 87, 255, 0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};