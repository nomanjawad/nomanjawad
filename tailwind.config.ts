import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b346c",
        secondary: "#010812",
        accent: "#cec7d1",
      },
      backgroundImage: {
        customgradient:
          "linear-gradient(180deg, rgba(11,52,108,1) 0%, rgba(1,8,18,1) 90%)",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
