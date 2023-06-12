const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(process.cwd(), 'src/index.js'),
    movie: path.resolve(process.cwd(), 'src/js/movie.js'),
  },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(process.cwd(), 'dist'),
    clean: true,
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
  ],
}
