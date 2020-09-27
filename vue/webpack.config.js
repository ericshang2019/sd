const { Module } = require('module');
var path=require('path');
const htmlwebpackplugin=require('html-webpack-plugin');


module.exports={
    mode:'development',
    plugins:[
        new htmlwebpackplugin({
          template:path.resolve(__dirname,'index.html')
        })
      ],
    devtool: 'source-map'
}