/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontSize: {
        xxs: ".65rem",
      },
      colors: {
        primaryCyan: "hsl(172, 67%, 45%)",
        primaryCyan100: "hsl(172, 67%, 75%)",
        secondaryCyan900: "hsl(183, 100%, 15%)",
        secondaryCyan700: "hsl(186, 14%, 43%)",
        secondaryCyan500: "hsl(184, 14%, 56%)",
        secondaryCyan300: "hsl(185, 41%, 84%)",
        secondaryCyan100: "hsl(189, 41%, 97%)",
      },
      backgroundImage: {
        dollar: "url(../images/icon-dollar.svg)",
        person: "url(../images/icon-person.svg)",
      },
      backgroundPosition: {
        pos: "5% center"
      }
    },
  },
  plugins: [],
}

