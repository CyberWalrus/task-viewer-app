const path = require('path');

const root = args => path.join(...[__dirname].concat('./', args));

module.exports = {
  entry: {
    bundle: [root('src/index.jsx'), root('style/style.scss')],
  },
  output: {
    filename: 'js/bundle.js',
    path: root('dist/'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'style/[name].css',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader?-url',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  devtool: 'source-map',
};
