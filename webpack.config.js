const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// module.exports = {
//   entry: [
//       './src/index.js'
//   ],
//   output:{
//       path: __dirname,
//       filename: 'app/js/main.js'
//   },
//   module:{
//       rules: [
//         { test: /\.css$/, use: 'css-loader' },
//         { test: /\.ts$/, use: 'ts-loader' }
//       ]
//   }
// }
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 5069,
    open: true
  }
}