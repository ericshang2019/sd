const path = require('path');


module.exports = function(env, argv) {
  env = env || {
    devlepment: true
  };

  let conf = null;
  if (env.development) {
    conf = require('./config/webpack.development.js');
  } else if (env.production) {
    conf = require('./config/webpack.production.js');
  } else {
    conf = require('./config/webpack.test.js');
  }

  return {
    entry: './src/js/index.js',
    module: {
      rules: [

        // css
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          }]
        },

        // less
        {
          test: /\.less$/i,
          use: ['style-loader', 'css-loader', 'less-loader']
        },

        // javascript
        {
          test: /\.js$/i,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }, {
            loader: 'eslint-loader',
            options: {
              exclude: /node_modules/
            }
          }]
        },

        // images
        {
          test: /\.(jpg|png|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: 'images/',
              limit: 4 * 1024
            }
          }
        },

        // fonts
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/i,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: 'fonts/',
              limit: 4 * 1024
            }
          }
        },

        // vue
        {
          test:/\.vue$/i,
          use:{
            loader:'vue-loader'
          }
        }
      ]
    },
    ...conf
  }
}
