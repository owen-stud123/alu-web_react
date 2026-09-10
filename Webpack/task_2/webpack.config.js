const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: { filename: 'bundle.js', path: path.resolve(__dirname, 'public') },
  module: { rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }] },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};