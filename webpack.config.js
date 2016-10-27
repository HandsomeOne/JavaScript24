/* eslint-disable */
const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './index.js',
  output: {
    path: './',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass', 'postcss'],
      },
      {
        test: /\.js$/,
        loader: 'babel',
      },
    ],
  },
  postcss: [autoprefixer()],
}
