const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      }, {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    })
    // new CopyPlugin({
    //   patterns: [{ from: 'source', to: 'dest' }]
    // })
  ]
}