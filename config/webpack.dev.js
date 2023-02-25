/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = Merge(CommonConfig, {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./assets'),
    publicPath: '/assets/',
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './_src/template/default.html',
      filename: '../jekyll/_layouts/default.html'
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080',
        files: ['_site', '_src'],
      },
      {
        reload: false,
      },
    ),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve('_site'),
    },
    hot: false,
  },
  watchOptions: {
      aggregateTimeout: 1000,
      ignored: ['**/cites/**']
  }
});
