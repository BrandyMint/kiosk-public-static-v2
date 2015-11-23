var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, '../src'),
  entry: {
    'widgets/productCard': './widgets/productCard',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?stage=0',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: 'examples/__build__',
    filename: '[name].js',
    publicPath: '/__build__/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  resolveLoader: {
    modulesDirectories: [
      path.join(__dirname, '../node_modules'),
    ],
  },
};