import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4EF",
        "paper-deep": "#EDEAE2",
        ink: "#16130F",
        "ink-soft": "#241F19",
        "ink-mute": "#37312A",
        smoke: "#655E55",
        "smoke-light": "#8D8579",
        ember: "#E4322B",
        "ember-deep": "#C22420",
        "ember-warm": "#FF6B3D",
        line: "rgba(22,19,15,0.14)",
        "line-strong": "rgba(22,19,15,0.28)",
        "line-dark": "rgba(246,244,239,0.16)",
        "line-dark-strong": "rgba(246,244,239,0.32)",
      },
      fontFamily: {
        sans: ["var(--font-display)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.9rem, 6.2vw, 5.6rem)",
          { lineHeight: "0.98", letterSpacing: "-0.03em", fontWeight: "800" },
        ],
        "display-lg": [
          "clamp(2.1rem, 4.2vw, 3.6rem)",
          { lineHeight: "1.04", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
        "display-md": [
          "clamp(1.6rem, 2.6vw, 2.25rem)",
          { lineHeight: "1.1", letterSpacing: "-0.015em", fontWeight: "700" },
        ],
      },
      borderRadius: {
        xs: "2px",
        btn: "6px",
        card: "14px",
        media: "20px",
      },
      boxShadow: {
        lift: "0 24px 48px -24px rgba(22, 19, 15, 0.28)",
        "lift-sm": "0 12px 28px -16px rgba(22, 19, 15, 0.24)",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "gradient-ember": "linear-gradient(100deg, #E4322B 0%, #FF6B3D 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
