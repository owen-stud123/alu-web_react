const path = require('path');

module.exports = {
  mode: 'development',
  entry: './modules/index.js',
  output: { filename: 'main.js', path: path.resolve(__dirname, 'dist'), clean: true },
  devServer: { static: './dist', hot: true },
  optimization: { usedExports: true },
};