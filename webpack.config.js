/* eslint import/no-extraneous-dependencies: 0 */
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
        loaders: ['style', 'css', 'postcss', 'sass'],
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['latest'],
        },
      },
    ],
  },
  postcss: [autoprefixer()],
}
