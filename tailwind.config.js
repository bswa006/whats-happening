/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#F7791E",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        text: {
          primary: "#080808",
          secondary: "#606060",
          black: "#000000",
        },
        "colors-color-accesspass-bg-default":
          "var(--colors-color-accesspass-bg-default)",
        "colors-color-general-bg-default":
          "var(--colors-color-general-bg-default)",
        "colors-color-general-bg-header":
          "var(--colors-color-general-bg-header)",
        "colors-color-general-bg-subtle":
          "var(--colors-color-general-bg-subtle)",
        "colors-color-general-bg-subtle2":
          "var(--colors-color-general-bg-subtle2)",
        "colors-color-general-bg-surface1":
          "var(--colors-color-general-bg-surface1)",
        "colors-color-general-bg-surface2":
          "var(--colors-color-general-bg-surface2)",
        "colors-color-general-border-default":
          "var(--colors-color-general-border-default)",
        "colors-color-general-button-primary-bg":
          "var(--colors-color-general-button-primary-bg)",
        "colors-color-general-button-primary-disabled":
          "var(--colors-color-general-button-primary-disabled)",
        "colors-color-general-button-primary-hover":
          "var(--colors-color-general-button-primary-hover)",
        "colors-color-general-button-primary-text":
          "var(--colors-color-general-button-primary-text)",
        "colors-color-general-card-bg": "var(--colors-color-general-card-bg)",
        "colors-color-general-card-text":
          "var(--colors-color-general-card-text)",
        "colors-color-general-card-textbutton":
          "var(--colors-color-general-card-textbutton)",
        "colors-color-general-general-icon-default":
          "var(--colors-color-general-general-icon-default)",
        "colors-color-general-label-default":
          "var(--colors-color-general-label-default)",
        "colors-color-general-label-defaulttext":
          "var(--colors-color-general-label-defaulttext)",
        "colors-color-general-label-selected":
          "var(--colors-color-general-label-selected)",
        "colors-color-general-label-selectedtext":
          "var(--colors-color-general-label-selectedtext)",
        "colors-color-general-state-active":
          "var(--colors-color-general-state-active)",
        "colors-color-general-state-disabled":
          "var(--colors-color-general-state-disabled)",
        "colors-color-general-state-error":
          "var(--colors-color-general-state-error)",
        "colors-color-general-state-hover":
          "var(--colors-color-general-state-hover)",
        "colors-color-general-state-success":
          "var(--colors-color-general-state-success)",
        "colors-color-general-state-warning":
          "var(--colors-color-general-state-warning)",
        "colors-color-general-text-inverse":
          "var(--colors-color-general-text-inverse)",
        "colors-color-general-text-primary":
          "var(--colors-color-general-text-primary)",
        "colors-color-general-text-secondary":
          "var(--colors-color-general-text-secondary)",
        "system-colors-backgrounds-primary":
          "var(--system-colors-backgrounds-primary)",
        "system-colors-labels-primary": "var(--system-colors-labels-primary)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        input: "12px",
      },
      fontFamily: {
        "public-sans": ["Public Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        button: "6px 4px 0px 0px rgba(0, 0, 0, 1)",
        "general-drawer-shadow": "var(--general-drawer-shadow)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
