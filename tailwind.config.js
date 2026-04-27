/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        stellantis: {
          navy:  '#243882',
          light: '#3a52a8',
          pale:  '#eef0f8',
        },
      },
    },
  },
  plugins: [],
};
