/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    // new FaviconsWebpackPlugin({
    //   logo: './icon.png',
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/template/default.html',
    //   filename: '../layouts/default.html',
    // }),
    // new ExtractTextPlugin('[name].css'),
    // new CopyWebpackPlugin([{
    //   from: path.resolve('_images'),
    //   to: 'images/',
    // }]),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // {
      //   test: /\.(css|scss)$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       { loader: 'css-loader', options: { importLoaders: 1 } },
      //       {
      //         loader: 'postcss-loader',
      //         options: {
      //           config: {
      //             path: 'config/postcss.config.js',
      //           },
      //         },
      //       },
      //       { loader: 'sass-loader' },
      //     ],
      //   }),
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: [
      //     'file-loader',
      //   ],
      // },
    ],
  },
};
