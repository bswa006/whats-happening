import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "colors-color-accesspass-bg-default": "rgba(255, 255, 255, 1)",
        "colors-color-general-bg-default": "rgba(255, 168, 0, 1)",
        "colors-color-general-bg-header": "rgba(255, 168, 0, 1)",
        "colors-color-general-bg-subtle": "rgba(250, 245, 242, 1)",
        "colors-color-general-bg-subtle2": "rgba(255, 255, 255, 1)",
        "colors-color-general-bg-surface1": "rgba(252, 224, 36, 1)",
        "colors-color-general-bg-surface2": "rgba(252, 88, 36, 1)",
        "colors-color-general-border-default": "rgba(0, 0, 0, 1)",
        "colors-color-general-button-primary-bg": "rgba(255, 255, 255, 1)",
        "colors-color-general-button-primary-disabled":
          "rgba(255, 255, 255, 1)",
        "colors-color-general-button-primary-hover": "rgba(255, 255, 255, 1)",
        "colors-color-general-button-primary-text": "rgba(255, 255, 255, 1)",
        "colors-color-general-card-bg": "rgba(250, 245, 242, 1)",
        "colors-color-general-card-text": "rgba(18, 18, 18, 1)",
        "colors-color-general-card-textbutton": "rgba(0, 122, 255, 1)",
        "colors-color-general-general-icon-default": "rgba(18, 18, 18, 1)",
        "colors-color-general-label-default": "rgba(255, 255, 255, 1)",
        "colors-color-general-label-defaulttext": "rgba(18, 18, 18, 1)",
        "colors-color-general-label-selected": "rgba(0, 0, 0, 1)",
        "colors-color-general-label-selectedtext": "rgba(255, 255, 255, 1)",
        "colors-color-general-state-active": "rgba(255, 255, 255, 1)",
        "colors-color-general-state-disabled": "rgba(255, 255, 255, 1)",
        "colors-color-general-state-error": "rgba(255, 255, 255, 1)",
        "colors-color-general-state-hover": "rgba(255, 255, 255, 1)",
        "colors-color-general-state-success": "rgba(255, 255, 255, 1)",
        "colors-color-general-state-warning": "rgba(255, 255, 255, 1)",
        "colors-color-general-text-inverse": "rgba(255, 255, 255, 1)",
        "colors-color-general-text-primary": "rgba(18, 18, 18, 1)",
        "colors-color-general-text-secondary": "rgba(255, 255, 255, 1)",
      },
      boxShadow: {
        "general-drawer-shadow": "0px -6px 0px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
