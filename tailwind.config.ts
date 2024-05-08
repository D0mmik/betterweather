import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "ellipse" : "/ellipse.png"
      },
      colors: {
        "morning" : "#FFC085",
        "midday" : "#BADCFF",
        "afternoon" : "#627685",
        "evening" : "#233B52",
        "blue" : "#24609B"
      }
    },
  },
  plugins: [],
};
export default config;
