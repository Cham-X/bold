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
        bggreen: "#65E4A3",
        gray: "#777777",
        lightgreen:"#4FE9A4",
      },
       keyframes: {
        fadeInUp: {
          '0%': { opacity: "0", transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
