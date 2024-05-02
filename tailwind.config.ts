import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "26": "6.5rem",
      },
      colors: {

      },
      fontFamily: {
        poppins: ["var(--font-Poppins)"],
        inter: ["var(--font-Inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  daisyui: {
    themes: [
    {
      mytheme: {
        ...require("daisyui/src/theming/themes")["light"],
      
        "primary": "#000080",
        "--primary_dark":"#00002B",
        "--primary_mid":"#000055",
        "--primary_light":"#AAAAD5",
        "--primary_superlight":"#CCCCE6",
        "--fore_dark":"#1A201F",
        "secondary": "#005bff",
        "--nav-bg":"#FAFAFA" ,  
        "--fore_light":"#85818E"         

      },
    },
  ],
  },
};
export default config;
