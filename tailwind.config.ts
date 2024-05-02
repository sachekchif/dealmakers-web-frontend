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
      colors: {},
      fontFamily: {
        poppins: ["var(--font-Poppins)"],
        // inter: ["var(--font-Inter)"],
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

          "--background_light_base": "#fff",
          "--background_dark_base": "#00171F",
          "--background_light_blue": "#F5FDFF",
          "--foreground_dark_blue": "#181E4B",
          "--foreground_neutral_base": "#404040",
          primary: "#0097C7",
        },
      },
    ],
  },
};
export default config;
