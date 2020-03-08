const path = require('path');
const htmlwebpackplugin=require('html-webpack-plugin');
module.exports=
{
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  plugins:[
    new htmlwebpackplugin({
      template:path.resolve(__dirname,'../index.html')
    })
  ]
}
