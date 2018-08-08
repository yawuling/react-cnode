const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portFinder = require('portfinder')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('./config')
const utils = require('./utils')

const devWebpackConf = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.join(config.dev.assetsPublicPath, 'index.html') }
      ]
    },
    hot: true,
    compress: true,
    host: 'localhost',
    port: 3000,
    open: true,
    quiet: true,
    overlay: {
      warnings: false,
      errors: true
    },
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxy,
    before: config.dev.before 
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portFinder.basePort = 3000

  portFinder.getPortPromise()
    .then((port) => {
      devWebpackConf.devServer.port = port
      devWebpackConf.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          message: [`Your application is running here: http://${devWebpackConf.devServer.host}:${port}`]
        },
        onErrors: config.dev.notifyOnError
          ? utils.createNotifierCallback()
          : undefined
      }))

      resolve(devWebpackConf)
    })
    .catch(error => {
      reject(error)
    })
})