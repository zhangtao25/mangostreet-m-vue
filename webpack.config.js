const path = require('path');
const os = require('os');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const moduleConf = require('./config/module.conf');


// 获取本地id
function getIPAdress() {
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

const port = "8000"
// 本地没有django服务时打开aliyun注释
// const aliyun = "114.55.145.3";
// const myHost = aliyun
const myHost = getIPAdress();


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
    port: 8080,
    proxy: {
      "/api": {
        "target": `http://${myHost}:${port}`,
        "changeOrigin": true,
        "pathRewrite": {"^/api": "/"}
      }
    }
  },
  module: moduleConf
};
