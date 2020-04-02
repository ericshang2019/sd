const path = require('path');

module.exports = function(env, argv) {
  env = env || {
    devlepment: true
  };
  return {
    entry: './src/js/index',
    module: {
      rules: [{
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(jpg|png|gif)$/i,
          use: [{
            loader: 'url-loader',
            options: {
              outputPath: 'images/',
              // publicPath: 'build/images/',
              limit: 4 * 1024
            }
          }]
        },
        {
          test:/\.(js|jsx)$/i,
          use:['eslint-loader'],
          exclude:/node_modules/
        }

      ]
    },
    plugins:[
      new htmlwebpackplugin({
        template:path.resolve(__dirname,'index.html')
      })
    ],
    ...env.production ? require('./config/webpack.production.js') : require('./config/webpack.development.js')
  }
}
