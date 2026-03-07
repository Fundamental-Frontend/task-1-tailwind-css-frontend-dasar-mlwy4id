import { Config } from "tailwindcss";

export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#16A34A",
        background: "#F8FAFC",
      },
    },
  },
  plugins: [],
} satisfies Config;
