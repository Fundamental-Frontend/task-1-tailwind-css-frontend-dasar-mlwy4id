import { Config } from "tailwindcss";

export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#16A34A",
        accent: "#6B7280",
        background: {
          DEFAULT: "#F8FAFC",
          hero: "#1E293B",
          footer: "#111827"
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
