var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

var entryPath = path.resolve(__dirname, 'src', 'app.jsx');
var sourcePath = path.resolve(__dirname, 'src');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {

  watch: false,
  cache: false,

  entry: {
    app: [
      entryPath
    ]
  },

  output: {
    path: 'build/',
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(less)$/,
        loaders: ['style', 'css', 'less']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url?limit=8192'
      },
      {
        test : /\.(woff|woff2|ttf|eot)$/,
        loader: 'url?limit=8192'
      }
    ],
  },


  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
      'react-track': path.resolve(__dirname + '../../src/')
    }
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        __DEVELOPMENT__: JSON.stringify(true)
      }
    }),
    new webpack.NoErrorsPlugin()
  ]

};
