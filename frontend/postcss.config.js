const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.css',
    // etc.
  ],

  // This is the function used to extract class names from your views
  defaultExtractor: (content) => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

    const defaultMatches = content.match(/[\w-/.:]+(?<!:)/g) || [];

    return broadMatches.concat(innerMatches, defaultMatches);
  },
});

module.exports = {
  plugins: [
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : [],
    require('postcss-import'),
    require('./tailwind.config.js'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
