const path=require('path');
module.exports={
    mode:'development',
    entry:'./src/2.js',
    output:{
        path:path.resolve(__dirname,'dest'),
        filename:'bundle.min.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:[
                'style-loader',
                'css-loader',
                //'postcss-loader'
                {
                    loader:'postcss-loader',
                    options:{
                        plugins:[
                            require('autoprefixer')
                        ]
                    }
                }
            ]}
        ]
    }
}