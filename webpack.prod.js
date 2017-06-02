const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public/dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log('PROD');

const config = {
  entry: {
    'bundle': `${APP_DIR}/index.js`,
    'style': [
      `${APP_DIR}/../public/css/bootstrap-theme.min.css`,
      `${APP_DIR}/../public/css/style.css`,
      `${APP_DIR}/../public/css/opensans.css`,
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: 'public/dist',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
       test: /\.css$/,
       loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
    },
    {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })
  ],
};


module.exports = config;
