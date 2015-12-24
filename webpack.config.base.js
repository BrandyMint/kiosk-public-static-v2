var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var widgetsPath = './app/scripts/embeddable/widgets';
var preLoaders = [
  {
    test: /\.(sass|scss)$/,
    loader: 'string-replace',
    query: {
      multiple: [
        {
          search: 'IMAGES_PATH',
          replace: process.env.ENV === 'production' ? "'/shop/images'" : "'../images'",
        },
        {
          search: 'FONTS_PATH',
          replace: process.env.ENV === 'production' ? "'/shop/fonts'" : "'../fonts'",
        },
      ]
    },
  },
];
var loaders = [
  {
    test: /\.jsx?$/,
    loader: 'babel-loader?stage=0',
    exclude: /(node_modules|bower_components)/
  },
  {
    test: /\.(sass|scss)$/,
    loader: 'style!raw!sass',
    exclude: /(node_modules|bower_components)/,
  },
];

module.exports = {
  entry: {
    'widgets/ProductCard': widgetsPath + '/ProductCard',
  },
  module: {
    preLoaders: preLoaders,
    loaders: loaders,
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './app/stylesheets'),
    ],
  },
  resolve: {
    alias: {
      'fancybox': 'fancybox/source/jquery.fancybox',
      'fancybox.wannabe': 'fancybox-wannabe-fix/index',
      'jquery': 'jquery/dist/jquery',
      'owlCarousel': 'OwlCarousel/owl-carousel/owl.carousel',
    },
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'app/bower_components'),
    ],
  },
};