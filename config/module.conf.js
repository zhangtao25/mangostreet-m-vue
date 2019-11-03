const path = require('path');
const resolve = file => path.resolve(__dirname, file);
const moduleConf = {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: 'postcss.config.js'
            }
          }
        },
      ]
    },
    {
      test: /\.(jpg|png|svg|gif|jpeg)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.js$/,
      use: [
        'babel-loader'
      ],
      exclude: /node_modules/
    },
    {
      test: /\.vue$/,
      use: [
        'vue-loader'
      ],
    },
    {
      test: /\.scss$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: 'postcss.config.js'
            }
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
    {
      test: /\.styl/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: 'postcss.config.js'
            }
          }
        },
        {
          loader: 'stylus-loader',
          options: {
            import: [resolve("./../src/assets/theme/theme.custom")]
          }
        }
      ]
    }
  ]
};


module.exports = moduleConf;
