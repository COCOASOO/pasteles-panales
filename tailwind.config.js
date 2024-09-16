// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: "#f4fcff",
        azulBebe: "#d4f0ff",
        azulNavbar: "#003D5B",
        navbarSeleccion: "#4B7FAC",
        rosaBebe: "#FBD3E9",
        rosaFuerte: "#EF78B4",
        verdeMenta: "#A2E1DB",
        amarilloClaro: "#FFF7C0",
        melocoton: "#FBC6A4",
        lavanda: "#E5D4ED",
        grisCaliente: "#F5F5F5",
        azulOscuro: "#4B7FAC",
        casiBlanco: "#FEFEFE",
        gris: "#E9E9E9",
      },
      fontFamily: {
        fascinate: ['"Fascinate Inline"', 'cursive'],
        guerrilla: ['"Protest Guerrilla"', 'sans-serif'],
        baby: ['baby', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
