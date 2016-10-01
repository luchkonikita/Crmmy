const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const AssetsPlugin = require('assets-webpack-plugin')

const env = process.env.NODE_ENV
const isProduction = env === 'production'
const isTest = env === 'test'

const plugins = []
const entry = ['./front/app']

plugins.push(new webpack.DefinePlugin({
  '__APP_CONFIG__': JSON.stringify({env})
}))

if (isProduction) {
  plugins.push(new AssetsPlugin())
}

module.exports = {
  devtool: isProduction ? 'source-map' : 'inline-source-map',

  entry,
  output: {
    path: path.join(process.cwd(), 'priv', 'static', 'js'),
    publicPath: '/js/',
    filename: (isProduction ? 'app-[chunkhash].js' : 'app.js'),
    chunkFilename: (isProduction ? '[id]-[chunkhash].js' : '[id].js')
  },
  plugins,
  resolve: {
    root: path.join(process.cwd(), 'front'),
    extensions: ['', '.js', '.json', '.jsx', '.sass']
  },
  module: {
    preLoaders: [
      {test: /\/front\/.*index\.jsx$/, loader: 'baggage?style.sass'}
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?cacheDirectory',
        exclude: /node_modules/
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: isTest ? 'null' : 'style!css?sourceMap!postcss'
      },
      {
        test: /\.sass$/,
        loader: isTest ? 'null' : 'style!css?sourceMap!postcss!sass?sourceMap&indentedSyntax'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /app\/.+?\/icons\//,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: /app\/.+?\/icons\//,
        loader: 'svg-loader'
      }
    ],
    exprContextCritical: false,
    noParse: [
      /acorn\/dist\/acorn\.js/
    ]
  },
  postcss () {
    return [autoprefixer]
  },
  externals: {
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true
  }
}
