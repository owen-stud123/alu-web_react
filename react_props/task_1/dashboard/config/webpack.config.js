const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: { filename: 'bundle.js', path: path.resolve(__dirname, '../dist'), clean: true },
  module: { rules: [
    { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
    { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    { test: /\.(png|jpe?g|gif|ico)$/i, type: 'asset/resource' },
  ] },
  resolve: { extensions: ['.js', '.jsx'] },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../public/index.html') })],
  devServer: { static: path.resolve(__dirname, '../dist'), hot: true },
};