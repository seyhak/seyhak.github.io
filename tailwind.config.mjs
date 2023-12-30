/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  colors: {
    // i dont want to use it in tailwind I just want to use it as notes
    // "dark:text-slate-50 bg-gradient-to-br",
    // "from-blue-200 via-blue-100 to-slate-50",
    // "dark:from-slate-900 dark:via-stone-900 dark:to-blue-950"
  },
  theme: {
    extend: {
      ...defaultTheme,
      fontFamily: {
        barlow: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans]
        // 'sans': ['"Anybody"', '"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: []
}