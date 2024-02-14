const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  //removes unused styles in production
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    extend: {
      colors: {
        'pink-dark-hero': '#C30175',
        'purple-hero': '#430D3F',
        'pink-hero': '#E8B8CF',
        'hero-yellow': '#FFF2CB',
      },
    },
  },
}
