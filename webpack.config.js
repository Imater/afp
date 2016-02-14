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
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 1000,
  },
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
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },

  module: {
    noParse: /node_modules\/quill\/dist/,
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /(node_modules|bower_components|server)/,
        loaders: ['react-hot', 'babel?compact=false']
      },
      {
        test: /\.(scss)$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.(css)$/,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: /\.(less)$/,
        loaders: ['style', 'css', 'postcss', 'less']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url?limit=1000'
      },
      {
        test : /\.(woff|woff2|ttf|eot)$/,
        loader: 'url?limit=1000'
      }
    ],
  },


  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
      'isomorphic-ensure': 'isomorphic-ensure/mock',
      'raw-loader': 'isomorphic-ensure/mock',
      'json-loader': 'isomorphic-ensure/mock',
    }
  },

  postcss: function() {
    return [autoprefixer, precss]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
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
