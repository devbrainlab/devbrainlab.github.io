// with respect to https://github.com/sandoche/Jekyll-webpack-boilerplate/blob/master/config/postcss.config.js
// eslint-disable-next-line no-unused-vars
module.exports = ({ file, options, env }) => ({
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    cssnano: env === 'production' ? {} : false,
  },
});
