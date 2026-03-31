/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ai-bg": "#0B1120",
        "ai-primary": "#2563EB",
        "ai-accent": "#06B6D4",
        "ai-glow": "#38BDF8",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-ai":
          "linear-gradient(135deg, #2563EB 0%, #06B6D4 50%, #0B1120 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(37, 99, 235, 0.5)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.5)",
        "glow-intense": "0 0 40px rgba(56, 189, 248, 0.8)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "scan": "scan 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(37, 99, 235, 0.8)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "scan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};
