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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          blue: "var(--brand-blue)",
          yellow: "var(--brand-yellow)",
          red: "var(--brand-red)",
        }
      },
      fontFamily: {
        syne: ["Syne", "Arial", "sans-serif"],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      borderRadius: {
        'brand': '1rem',
      },
      boxShadow: {
        'brand': '0 4px 6px rgba(0,0,0,0.1)',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
