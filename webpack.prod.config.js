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

  watch: false,
  cache: false,

  entry: {
    app: [
      entryPath
    ]
  },

  output: {
    path: 'build/',
    chunkFilename: '[id].chunk.js',
    filename: '[name].js',
    publicPath: '/build/'
  },

  module: {
    noParse: /node_modules\/quill\/dist/,
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel?compact=false'],
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
        loaders: [
          'url?limit=1000',
          //'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant_off:{quality: "65-90", speed: 4}}'
        ]
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      options: {
        sourceMap: false,
      },
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
