const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        options: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  resolveLoader: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    }),
  ],
};
