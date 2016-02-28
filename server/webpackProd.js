import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack.prod.config.js';

var ProgressPlugin = require('webpack/lib/ProgressPlugin');

export default function() {
  const compiler = webpack(webpackConfig);
  compiler.apply(new ProgressPlugin(function(percentage, msg) {
    console.log((percentage * 100) + '%', msg);
  }));
  return compiler;
  //let bundleStart = null;

  //compiler.plugin('compile', () => {
  //    console.log('Bundling...');
  //    bundleStart = Date.now();
  //});

  //compiler.plugin('done', () => {
  //    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  //});

  //var bundler = new WebpackDevServer(compiler, {
  //    publicPath: webpackConfig.output.publicPath,
  //    hot: true,
  //    cache: true,
  //    quiet: false,
  //    noInfo: false,
  //    watch: true,
  //    watchOptions: {
  //      aggregateTimeout: 300,
  //      poll: 1000
  //    },
  //    headers: {
  //        'Access-Control-Allow-Origin': '*'
  //    },
  //    stats: {
  //        colors: true
  //    }
  //});

  //console.info('try to listen 8085');
  //bundler.listen(3000, '127.0.0.1', () => {
  //    console.log('Bundling project, please wait...');
  //});
}
