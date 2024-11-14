import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
         fontFamily: {
        manrope: ['Manrope', 'sans-serif'],  // Add the Manrope font here
      },
      colors: {
        darkgray: "#0A2640",
        bggreen:"#65E4A3",
      },
    },
  },
  plugins: [],
} satisfies Config;
