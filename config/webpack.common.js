/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development'
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './_src/index.js',
  },
  plugins: [
    // new FaviconsWebpackPlugin({
    //   logo: './icon.png',
    // }),
    new HtmlWebpackPlugin({
      template: './_src/template/default.html',
      filename: '../jekyll/_layouts/default.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: isDevelopment ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    // }),
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([{
      from: path.resolve('_images'),
      to: 'images/',
    }]),
    new CopyWebpackPlugin([{
      from: path.resolve('jekyll/_papers'),
      to: 'papers/',
    }]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  // resolve: {
  //   extensions: ['.js', '.jsx', '.scss']
  // },
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
      // {
      //   test: /\.s(a|c)ss$/,
      //   exclude: /\.module.(s(a|c)ss)$/,
      //   loader: [
      //     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDevelopment
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // Creates `style` nodes from JS strings
      //     'style-loader',
      //     // Translates CSS into CommonJS
      //     'css-loader',
      //     // Compiles Sass to CSS
      //     'sass-loader',
      //   ],
      // },
      {
        test: /\.(png|jpg|gif)$/,
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
