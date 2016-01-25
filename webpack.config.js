var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var precss       = require('precss');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

var entryPath = path.resolve(__dirname, 'src', 'app.jsx');
var sourcePath = path.resolve(__dirname, 'src');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {

  devtool: 'inline-source-map',
  watch: true,
  cache: true,

  entry: {
    app: [
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8085',
      entryPath
    ]
  },

  output: {
    path: '/build/',
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel?compact=false']
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.(less)$/,
        loaders: ['style', 'css', 'postcss', 'less']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url?limit=98192'
      },
      {
        test : /\.(woff|woff2|ttf|eot)$/,
        loader: 'url'
      }
    ],
  },


  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
    }
  },

  postcss: function() {
    return [autoprefixer, precss]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        __DEVELOPMENT__: JSON.stringify(true)
      }
    }),
    new webpack.NoErrorsPlugin()
  ]

};
