/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './components/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f63b82', // Thêm sắc thái 'light'
          DEFAULT: '#1E40AF', // Màu mặc định
          dark: '#1E3A8A', // Thêm sắc thái 'dark'
        },
        secondary: '#9333EA',
        red: '#e10909db'
      },
    },
  },
  plugins: [],
}
