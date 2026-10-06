const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './modules/index.js',
  output: { filename: 'main.js', path: path.resolve(__dirname, 'dist'), clean: true },
  devServer: { static: './dist', hot: true },
  optimization: { usedExports: true },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpe?g|gif)$/i, type: 'asset/resource' },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
