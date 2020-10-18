const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('html-loader')
      .loader('html-loader');
  },

  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  configureWebpack: {
    // Fast source maps in dev
    devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-eval-source-map',
    plugins: [
      new StyleLintPlugin({
        files: 'src/**/*.{vue,css}',
      }),
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, '/src'),
        '~': path.join(__dirname, '/src/components'),
      },
    },
  },
};
