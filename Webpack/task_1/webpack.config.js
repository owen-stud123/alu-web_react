const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './js/dashboard_main.js',
  output: { filename: 'bundle.js', path: path.resolve(__dirname, 'public') },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  devServer: { static: './public', open: true },
};