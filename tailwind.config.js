/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
darkMode: "class",
  plugins: [
    nextui({
      themes: {
        testing: {
          colors: {
            background: "#eaebea", // or DEFAULT
            foreground: "#10284b", // or 50 to 900 DEFAULT
            primary: {
              100: "#FAD5D6",
              200: "#F6AEB6",
              300: "#E58096",
              400: "#CC5B7F",
              500: "#AA2D61",
              600: "#92205B",
              700: "#7A1654",
              800: "#620E4A",
              900: "#510844",
              foreground: "#FFFFFF",
              DEFAULT: "#2c8dd3",
            },
          green: {
            100: "#E4FAD0",
            200: "#C3F6A3",
            300: "#95E370",
            400: "#68C94A",
            500: "#31A51A",
            600: "#1D8D13",
            700: "#0E760D",
            800: "#085F0D",
            900: "#044F0F",
          },
          blue: {
            50: "#F4FEFA",
            100: "#C8FAF7",
            200: "#93F4F5",
            300: "#5AD6E2",
            400: "#31AEC5",
            500: "#007BA0",
            600: "#005F89",
            700: "#004773",
            800: "#00335C",
            900: "#00244C",
          },
          amber: {
            100: "#F9EAC9",
            200: "#F4D195",
            300: "#DEA85C",
            400: "#BE7D33",
            500: "#934904",
            600: "#7E3802",
            700: "#692902",
            800: "#551C01",
            900: "#461400",
          },
          red: {
            100: "#FCDBD5",
            200: "#FAB0AD",
            300: "#F18187",
            400: "#E36073",
            500: "#D13058",
            600: "#B32354",
            700: "#96184F",
            800: "#790F48",
            900: "#640943",
          },

        },
        },
      },
    }),
  ],
};
