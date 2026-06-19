/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0A0E17',
          soft: '#0F1420',
          card: '#131927',
          line: '#1E2536',
        },
        cyan: {
          glow: '#00D9FF',
        },
        violet: {
          glow: '#7B61FF',
        },
        ink: {
          DEFAULT: '#F0F4F8',
          dim: '#8B96A8',
          faint: '#566075',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-line': 'linear-gradient(to right, #1E2536 1px, transparent 1px), linear-gradient(to bottom, #1E2536 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
