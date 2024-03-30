import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "flower": "url('/images/test-background.jpg')"
      },
      colors: {
        'main': "#007F73",
        'secondary': "#4CCD99",
        'design2': "#f3eee2",
        'design2-secondary': "#ddceac",
        'design2-button': '#724108'
      }
    },
  },
  plugins: [],
};
export default config;
