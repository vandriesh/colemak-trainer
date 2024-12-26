/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'var(--bg-color)',
        'custom-main': 'var(--main-color)',
        'custom-caret': 'var(--caret-color)',
        'custom-sub': 'var(--sub-color)',
        'custom-sub-alt': 'var(--sub-alt-color)',
        'custom-text': 'var(--text-color)',
        'custom-error': 'var(--error-color)',
        'custom-error-extra': 'var(--error-extra-color)',
      },
    },
  },
  plugins: [],
};