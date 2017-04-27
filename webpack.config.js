const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const Autoprefixer = require('autoprefixer')


const nodeEnv = process.env.NODE_ENV || 'development'
const isProduction = nodeEnv === 'production'
const sourcePath = path.resolve(__dirname, 'src')
const buildPath = path.resolve(__dirname, 'dist')
const assetsPath = path.resolve(__dirname, 'assets')

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].js',
    minChunks (module) {
      const context = module.context
      return context && context.indexOf('node_modules') >= 0
    }
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: 'index.html',
    path: buildPath,
    filename: 'index.html'
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        Autoprefixer({
          browsers: ['last 3 version', 'ie >= 10']
        })
      ],
      context: sourcePath
    }
  })
]

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [ 'babel-loader' ]
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    include: path.join(assetsPath, 'images'),
    use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
  }
]

if (isProduction) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin('style-[hash].css')
  )

  rules.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader!postcss-loader!sass-loader'
    })
  })
} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  )

  rules.push(
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader?sourceMap'
      ]
    }
  )
}

module.exports = {
  devtool: isProduction ? false : 'source-map',
  context: sourcePath,
  entry: {
    js: './index.js'
  },
  output: {
    path: buildPath,
    publicPath: '',
    filename: 'app-[hash].js'
  },
  module: {
    rules: rules
  },
  plugins: plugins,
  devServer: {
    contentBase: isProduction ? './build' : sourcePath,
    historyApiFallback: true,
    port: 8080,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '127.0.0.1'
  }
}
