import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "1200px",
      },
    },
    extend: {
      colors: {
        divider: "#E5E5E5",
        primary: "#212121",
        secondary: "#616161",
        hover: "#1C8C52",
      },
      fontFamily: {
        primary: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [scrollbarHide],
} satisfies Config;
