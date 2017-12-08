const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const IS_PRODUCTION = NODE_ENV === 'production';

const src = path.join(__dirname, 'client');

const config = {
  devtool: IS_PRODUCTION ? 'source-map' : 'cheap-module-source-map',
  entry: path.join(src, 'js', 'index.js'),
  output: {
    path: path.join(src, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};

if (IS_PRODUCTION) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
