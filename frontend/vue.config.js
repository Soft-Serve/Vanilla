const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },

  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:3091',
    //     secure: false,
    //     pathRewrite: {
    //       '^/api': '/api',
    //     },
    //   },
    // },
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
      },
    },
  },
};
