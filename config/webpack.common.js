/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development'
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './_src/index.js',
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new CopyPlugin({
      patterns: [
      {
        from: path.resolve('jekyll/images'),
        to: 'images/',
      },
      {
        from: path.resolve('jekyll/_papers'),
        to: 'papers/',
      } 
      ]
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    },

            {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: 'config/postcss.config.js',
                },
              },
            },
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "image-trace-loader",
            options: {
              // turnPolicy: 'TURNPOLICY_MINORITY',
              turdSize: 50,
              alphaMax: 2,
              // optCurve: true,
              optTolerance: 0.1,
              // threshold: 'THRESHOLD_AUTO',
              // flipColors: true,
              color: '#0B0B0B',
              // background: 'COLOR_TRANSPARENT',
              // skipTraceIfBase64: false
            }
          },
          {
            loader: 'file-loader'
          }
        ],
      },
    ],
  },
};
