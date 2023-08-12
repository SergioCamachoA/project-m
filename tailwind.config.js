import { nextui } from "@nextui-org/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "85-vh": "85vh",
      },
      width: {
        "85-vw": "85vw",
      },
      fontFamily: {
        sans: ["var(--font-karla)"],
      },
      rotate: {
        270: "270deg",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            foreground: "#cbcbcb",
            background: "#0d0d0d",
            primary: {
              100: "#cbcbcb",
              200: "#E2E2E8",
              300: "#B5B5BC",
              400: "#737379",
              500: "#1e1e20",
              600: "#0d0d0d",
              700: "#0F0F17",
              800: "#090912",
              900: "#05050F",
              foreground: "#cbcbcb",
              DEFAULT: "#0d0d0d",
            },
            secondary: {
              100: "#F8E6CD",
              200: "#F2C99E",
              300: "#DA9A68",
              400: "#B56B3E",
              500: "#853511",
              600: "#72250C",
              700: "#5F1808",
              800: "#4D0D05",
              900: "#3F0603",
              foreground: "#cbcbcb",
              DEFAULT: "#853511",
            },
          },
        },
        light: {
          colors: {
            foreground: "#1e1e20",
            background: "#cbcbcb",
            primary: {
              100: "#cbcbcb",
              200: "#E2E2E8",
              300: "#B5B5BC",
              400: "#737379",
              500: "#1e1e20",
              600: "#0d0d0d",
              700: "#0F0F17",
              800: "#090912",
              900: "#05050F",
              foreground: "#cbcbcb",
              DEFAULT: "#0d0d0d",
            },
            secondary: {
              100: "#F8E6CD",
              200: "#F2C99E",
              300: "#DA9A68",
              400: "#B56B3E",
              500: "#853511",
              600: "#72250C",
              700: "#5F1808",
              800: "#4D0D05",
              900: "#3F0603",
              foreground: "#1e1e20",
              DEFAULT: "#F2C99E",
            },
          },
        },
      },
    }),
  ],
}
