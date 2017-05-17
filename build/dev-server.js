require('./check-versions')();
const axios = require('axios');
let config = require('../config');
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
let path = require('path');
let webpack = require('webpack');
const express = require('express');
const opn = require('opn');
const proxyMiddleware = require('http-proxy-middleware');
let webpackConfig = require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
let port = process.env.PORT || config.dev.port;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
let proxyTable = config.dev.proxyTable;

let app = express();

let compiler = webpack(webpackConfig);

app.get('/test.json', function(req, res) {
  axios.get('http://v3.yu-qing.com/static/test.json').then(({data})=>{
    res.json(data);
  });
});

let devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: true
  }
});

let hotMiddleware = require('webpack-hot-middleware')(compiler);
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
    hotMiddleware.publish({action: 'reload'});
    cb();
  });
});

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = {target: options};
  }
  app.use(proxyMiddleware(context, options));
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  let uri = 'http://localhost:' + port;
  console.log('Listening at ' + uri + '\n');

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri);
  }
});
