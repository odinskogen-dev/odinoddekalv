import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ODIN_ identity — derived from the 4PLANET system
        ink: "#000000",
        paper: "#FFFFFF",
        // Electric Blue — the single accent. Used sparingly.
        blue: {
          DEFAULT: "#2E2EFF",
          soft: "rgba(46,46,255,0.08)",
          line: "rgba(46,46,255,0.16)",
        },
        // Editorial neutrals (warm-cool greys for field-note depth)
        stone: {
          100: "#F5F5F4",
          200: "#E9E9E7",
          300: "#D6D6D2",
          500: "#7A7A76",
          700: "#3D3D3A",
        },
      },
      fontFamily: {
        // DM Sans — primary editorial typeface (loaded via next/font in layout)
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        // IBM Plex Mono — field-note labels, metadata, captions, dates
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Tighter editorial display scale
        "display-xl": ["clamp(3rem, 9vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "label": ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.18em" }],
      },
      maxWidth: {
        reading: "42rem", // comfortable article measure
        editorial: "84rem",
      },
      letterSpacing: {
        label: "0.18em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
