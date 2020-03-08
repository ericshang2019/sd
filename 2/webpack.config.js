const path = require('path');
module.exports = {
  mode: "development",
  entry: [
    "./src/js/index.js" // 注意点1：必须是带.的相对路径,nodejs本身要求
  ],
  output: {
    path: path.resolve(__dirname, "dest"), // 注意点2：必须是绝对路径
    filename: "bundle.js"
  },
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          }
        ]
      },
      // 处理图片
      /*处理图片---方式1
      {test:/\.jpg|png|gif$/i,use:{
        loader:"file-loader",
        options:{
          outputPath:"images/", //相当output.path
          publicPath:"dest/images/" // 输出到css的路径s
        }
      }}
      */
      { // 处理图片---方式2
        test: /\.(jpg|png|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            outputPath: "images/", //相对output.path
            publicPath: "dest/images/", // 输出到css的路径s
            limit: 4 * 1024 //一般建议2K或者4k
          }
        }
      },

      // 字体文件
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'fonts/',
            publicPath: 'dest/fonts/',
            limit: 4 * 1024
          }
        }
      },

      // less文件
      {
        test: /\.(less)$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader'
          }
        ]
      },

      // 编译es6语法
      {
        test: /\.(js|jsx)$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'source-map'
}
