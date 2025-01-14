import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito-sans)", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#EC7520',
          dark: '#EC7520',
        },
        secondary: {
          DEFAULT: '#075561',
          dark: '#95c2c9',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
} satisfies Config;
