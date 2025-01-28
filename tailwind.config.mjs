/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        "yellow-green": "#d7de21",
      },
      width: {
        fill: "-webkit-fill-available",
      },
      fontFamily: {
        dosis: ["Dosis", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        photo1: 'url("/assets/imgs/psd-ai-2019.jpg")',
        photo2: 'url("/assets/imgs/Artboard-10.png")',
      },
    },
  },
  plugins: [],
};
