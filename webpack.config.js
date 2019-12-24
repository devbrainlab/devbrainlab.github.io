// select the appropriate webpack settings based on the 
// env variable set in the "script" run by npm, 
// as configured in package.json
//
// with respect to https://github.com/sandoche/Jekyll-webpack-boilerplate/blob/master/webpack.config.js
module.exports = function getWebpackConfig(env) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(`./config/webpack.${env}.js`);
};