/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hijau1: "#334B35",
        hijau2: "#678551",
        hijau3: "#263C28",
        kuning1: "#FFD100",
        kuning2: "#F7C35F",
        abu1: "#454545",
        abu2: "#D9D9D9",
        placeholder: "#D4C5C5",
      },
    },
  },
  plugins: [],
};
