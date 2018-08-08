const path = require('path')

module.exports = {
  dev: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    sourceMap: true,
    devtool: 'eval-source-map',
    proxy: {},
    // mock配置
    before() {},
    // 是否开启Error提醒
    notifyOnError: true
  },
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    sourceMap: true,
    devtool: '#source-map'
  }
}