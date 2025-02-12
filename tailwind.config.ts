import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paper: "var(--paper)",
        smallPaper: "#1f1f1f",
        primaryText: "#ffffff",
        secondaryText: "#B3B3B3",
        hoverColor: "#2a2a2a",
      },
    },
  },
  plugins: [],
} satisfies Config;
