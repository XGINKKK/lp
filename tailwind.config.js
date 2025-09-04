/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Roxo Escuro a Lilás
        primary: {
          '50': '#F3F0FF',
          '400': '#A855F7',
          '500': '#7C3AED', // Cor principal - roxo
          '600': '#6D28D9',
          '900': '#4C1D95',
        },
        // Secondary - Lilás Suave
        secondary: {
          '400': '#C084FC',
          '500': '#A855F7', // Cor secundária - lilás
          '600': '#9333EA',
        },
        // Accent - Lilás Claro
        accent: {
          '400': '#DDD6FE',
          '500': '#C4B5FD', // Cor de destaque - lilás claro
          '600': '#A78BFA',
        },
        // Dark - Tons escuros profissionais
        dark: {
          '800': '#1A1A1A',
          '900': '#111111',
          '950': '#0B0B0B',
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