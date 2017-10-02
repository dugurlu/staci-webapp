var path = require('path')
var webpack = require('webpack')
var Dotenv = require('dotenv-webpack')
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new Dotenv({
      path: './.env',
      safe: true
    })
  ],
  module: {
    rules: [{
      // JS
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: '.babel-cache'
        }
      }
    }, {
      // CSS
      test: /\.(scss|css)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader',
        options: {
          indentedSyntax: false
        }
      }]
    }]
  }
}
