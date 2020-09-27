const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:{
        app:'./src/index.js',
        vendors: './src/mod.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./index.html')
        })
    ]
}