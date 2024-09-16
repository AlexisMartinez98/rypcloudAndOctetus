/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-b": "0 4px 1px -1px rgba(8, 168, 253, 1)",
      },
    },
  },
  plugins: [],
};
