/**
 * Created by wuhao on 2016/12/4.
 */
let getEntry = require('./getPaths');
let fs = require('fs');
let pages = getEntry('./src/module/**/index.js');
let configs = [];
Object.keys(pages).forEach((pathname) => {
  let paths = pathname.split('/');
  if (paths[paths.length - 1] == 'index') {
    const path = './src/module/' + pathname + '.json';
    let conf = {
      filename: pathname + '.html',
      template: 'index.html', // 模板路径
      inject: true,
      cache: true,
      files: {js: ['js/auth.js']},
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'auto',
      chunks: ['manifest', 'vendor', pathname]
    };
    fs.exists(path, (exists) => {
      if (exists) {
        fs.readFile(path, {
          encoding: 'utf8'
        }, (err, content) => {
          const config = JSON.parse(content);
          Object.assign(conf, config);
        });
      }
    });
    configs.push(conf);
  }
});
module.exports = configs;
