const path = require('path');
module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/i,
      exclude:/node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/preset-env", {
              "modules": false,
              "targets": {
                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
              },
              "useBuiltIns": "usage"
            }]
          ]
        }
      }]
    }]
  },
  devtool: "source-map"
}
