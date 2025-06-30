// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        colors: {
            'main-color': '#231e64',
            'accent-color': '#03d3b0',
            'secondary-color': '#ecb44b',
            'enfasis-color': '#7ed3a5',
          },
        fontFamily: {
            questrial: ['Questrial', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'), // <-- ¡AÑADIR ESTA LÍNEA!
    ],
  }