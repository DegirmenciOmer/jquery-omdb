const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(process.cwd(), 'src/index.js'),
    movie: path.resolve(process.cwd(), 'src/js/movie.js'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(process.cwd(), 'dist'),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), 'dist'),
    },
    port: 3000,
    // open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8 KB
          },
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),

    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Movie Page',
      filename: 'movie.html', // Specify the filename for the new page
      template: 'src/movie_template.html', // Use the same template as the existing page(s)
    }),
    new CleanWebpackPlugin(),
  ],
}
