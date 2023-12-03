/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        accent: "#94a3b8",
        primary: "#cbd5e1",
        secondary: "#64748b",
        bgcolor: "#e2e8f0",
        white: "#feeddb",
        black: "#010a15"
      },
      'jelly-bean': {
        '50': '#ebfdff',
        '100': '#ccf9ff',
        '200': '#9ef2ff',
        '300': '#57e9ff',
        '400': '#0fd7ff',
        '500': '#00c0eb',
        '600': '#0098c2',
        '700': '#0183a7',
        '800': '#0b667f',
        '900': '#0e566c',
        '950': '#023a4b',
      },
      'slate': {
        '50': '#f8fafc',
        '100': '#f1f5f9',
        '200': '#e2e8f0',
        '300': '#cbd5e1',
        '400': '#94a3b8',
        '500': '#64748b',
        '600': '#475569',
        '700': '#334155',
        '800': '#1e293b',
        '900': '#0f172a',
        '950': '#020617',
      },
    },
  },
  plugins: [],
}
