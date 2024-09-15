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
        fondo: {
          DEFAULT: "#f4fcff",
          dark: "#f4fcff",
        },
        azulBebe: {
          DEFAULT: "#d4f0ff",
          dark: "#d4f0ff",
        },
        azulNavbar: {
          DEFAULT: "#003D5B",
          dark: "#003D5B",
        },
        navbarSeleccion: {
          DEFAULT: "#4B7FAC",
          dark: "#4B7FAC",
        },
        rosaBebe: {
          DEFAULT: "#FBD3E9",
          dark: "#FBD3E9",
        },
        rosaFuerte: {
          DEFAULT: "#EF78B4",
          dark: "#EF78B4",
        },
        verdeMenta: {
          DEFAULT: "#A2E1DB",
          dark: "#A2E1DB",
        },
        amarilloClaro: {
          DEFAULT: "#FFF7C0",
          dark: "#FFF7C0",
        },
        melocoton: {
          DEFAULT: "#FBC6A4",
          dark: "#FBC6A4",
        },
        lavanda: {
          DEFAULT: "#E5D4ED",
          dark: "#E5D4ED",
        },
        grisCaliente: {
          DEFAULT: "#F5F5F5",
          dark: "#F5F5F5",
        },
        azulOscuro: {
          DEFAULT: "#4B7FAC",
          dark: "#4B7FAC",
        },
        casiBlanco: {
          DEFAULT: "#FEFEFE",
          dark: "#FEFEFE",
        },
        gris: {
          DEFAULT: "#E9E9E9",
          dark: "#E9E9E9",
        },
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
  darkMode: 'class',
};
