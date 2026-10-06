const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: { filename: 'bundle.js', path: path.resolve(__dirname, 'public') },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/[name][ext]' },
      },
    ],
  },
  devServer: { static: './public', open: true },
};
