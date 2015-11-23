var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'widgets/productCard': './src/widgets/productCard',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader?stage=0', exclude: /node_modules/ },
    ],
  },
  resolve: {
    alias: {
      'i18next': 'i18next-client',
    },
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, '../../../node_modules'),
    ],
  },
  resolveLoader: {
    modulesDirectories: [ __dirname + '/node_modules' ],
  },
};