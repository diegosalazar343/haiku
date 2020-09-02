const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const { CleanwebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool:'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Haiku Checker',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  }
};
