const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
});
