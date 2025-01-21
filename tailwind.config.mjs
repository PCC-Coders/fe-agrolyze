const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "agro-green": "#334B35",
        "agro-light-green": "#678551",
        "agro-dark-green": "#263C28",
        "agro-yellow": "#FFD100",
        "agro-light-yellow": "#F7C35F",
        "agro-gray": "#454545",
        "agro-light-gray": "#D9D9D9",
        "agro-placeholder": "#D4C5C5",
      },
    },
  },
  plugins: [flowbite.plugin(), require("flowbite/plugin")],
  darkMode: "media",
};
