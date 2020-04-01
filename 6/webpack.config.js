const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.js$/i,
      exclude: /node_modules/,
      use: 'eslint-loader'
    }]
  },
  plugins: [
    new StylelintPlugin({ files: '**/*.css' })
  ]
}
