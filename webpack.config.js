const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const moduleConf = require('./config/module.conf');


module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', 'styl']
  },
  plugins: [
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseInlineTagWhitespace: true,
      },
      hash: true
    }),
    new CleanWebpackPlugin(),
    new copyWebpackPlugin([{
      from:__dirname+'/public',
      to:'./'
    }]),
  ],
  devServer: {
    contentBase: './build',
    port: 8080
  },
  module: moduleConf
};
