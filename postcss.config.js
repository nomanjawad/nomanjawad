module.exports = {
  plugins: {
    autoprefixer: {}, // Automatically adds vendor prefixes
    "@fullhuman/postcss-purgecss": {
      content: [
        "./pages/**/*.{js,jsx,ts,tsx}", // Scan all files in the pages directory
        "./components/**/*.{js,jsx,ts,tsx}", // Scan all files in the components directory
        "./layouts/**/*.{js,jsx,ts,tsx}", // Scan all files in the layouts directory
      ],
      css: ["./styles/**/*.css"], // Specify the path to your CSS files
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [], // Add any classes you want to whitelist
        deep: [], // Whitelist classes used in dynamic content
      },
    },
  },
};
