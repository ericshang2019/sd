const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin=require('vue-loader/lib/plugin');

module.exports={
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  plugins:[
    new StylelintPlugin({files:'**/*.css'}),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../index.html')
    }),
    new VueLoaderPlugin()
  ],
  devtool:'source-map'
}
