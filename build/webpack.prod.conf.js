const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('./config')
const utils = require('./utils')

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.sourceMap,
      extract: true
    })
  },
  devtool: config.build.sourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assestPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assestPath('js/[id].[chunkhash].js')
  },
  optimization: {
    minimizer: [
      new UglifyWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: config.build.sourceMap
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { map: { inline: false } }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: utils.assestPath('css/[name].[chunkhash].css'),
      chunkFilename: utils.assestPath('css/[id].[chunkhash].css')
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'public/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ]
})

module.exports = prodWebpackConfig
