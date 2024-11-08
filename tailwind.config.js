/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'antonio': ['Antonio', 'sans-serif'],
        'spartan' : ['League+Spartan', 'sans-serif'],
      },
      boxShadow: {
        'text-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'custom-bg': "url('/assets/background.png')",
      },
      colors: {
        'color-bg': '#070724',
        'color-hover': '#EDA249',
            },
      boxShadow: {
        'custom-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', 
      },
    },
  },
  plugins: [],
}
