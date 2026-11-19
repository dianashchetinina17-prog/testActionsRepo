const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin({ title: 'Lab 2 - GitHub Actions' })]
};
