const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode:'production',
    entry:{
        index:'./src/index.js',
        index2:'./src/index2.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    devtool:'source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./index.html')
        })
    ]
}