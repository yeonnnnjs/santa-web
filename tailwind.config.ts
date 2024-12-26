const config = {
  content: [
    "./src/generator/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      line: ["var(--font-LINE)"],
    },
    screens: {
      xs: "340px",
      sm: "480px",
      filter: "530px",
      md: "640px",
      lg: "768px",
      xl: "1100px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        rainbow: "rainbow 2s linear infinite",
      },
      keyframes: {
        rainbow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
