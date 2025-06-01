const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js", // 👈 Add this line
  ],
  plugins: ["@tailwindcss/postcss"],
}

export default config
