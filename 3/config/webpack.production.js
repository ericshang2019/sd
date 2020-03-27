const path=require('path');
const htmlwebpackplugin=require('html-webpack-plugin');
module.exports=
{
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.min.js'
  }

}
console.log(__dirname);
console.log(path.resolve(__dirname,'../index.html'));
