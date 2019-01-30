const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output : {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 20000,
            name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.(eot|otf|ttf|woff2?|svg)(\?.+)?$/,
        include: [
            path.resolve(__dirname, 'node_modules')
        ],
        use: {
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]'
            }
        }
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/esm",
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    open: true
  },
};
