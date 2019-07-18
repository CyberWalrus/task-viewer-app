const path = require("path");
const root = args => {
  return path.join.apply(path, [__dirname].concat(`./`, args));
};

module.exports = {
  entry: {
    bundle: [root(`src/index.js`), root(`style/style.scss`)]
  },
  output: {
    filename: `js/bundle.js`,
    path: root(`dist/`)
  },
  devServer: {
    contentBase: path.join(__dirname, `dist`),
    compress: false,
    port: 8080,
    historyApiFallback: true
  },
  mode: `development`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `style/[name].css`
            }
          },
          {
            loader: `extract-loader`
          },
          {
            loader: `css-loader?-url`
          },
          {
            loader: `postcss-loader`
          },
          {
            loader: `sass-loader`
          }
        ]
      }
    ]
  },
  devtool: `source-map`
};
