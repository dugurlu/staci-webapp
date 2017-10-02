var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [

    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        use: {
          loader: 'babel-loader'
        }
      },
      // CSS
      {
        test: /\.(scss|css)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [path.join(__dirname, 'client')],
            sourceMap: true
          }
        }]
      }
    ]
  }
};
