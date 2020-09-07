/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = Merge(CommonConfig, {
  output: {
    filename: '[name]-[hash].bundle.js',
    chunkFilename: '[name]-[chunkhash].js', 
    path: path.resolve('assets'),
    publicPath: '/assets/',
  },
  mode:'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './_src/template/default.html',
      filename: '../jekyll/_layouts/default.html',
      // base:"https//devbrainlab.org"
    }),
    // new CleanWebpackPlugin(['_site/assets'], { root: path.resolve(__dirname, '../jekyll'), verbose: true }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  ],
  optimization: {
    minimize: true,
    // splitChunks: {
    //   chunks: 'async',
    // },
  },
});