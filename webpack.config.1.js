const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].dev.chunk.js',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: "errors-only",

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true, // Open the page in browser
    overlay: true, // WDS provides an overlay for capturing compilation related warnings and errors:
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            cacheDirectory: true,
            presets: [
              'es2015',
              'stage-0',
              'react',
            ],
            plugins: [
              'transform-decorators-legacy',
              'syntax-dynamic-import',
            ],
          },
        }],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
            name: './images/[hash].[ext]'
          },
        },
      },
    ],
  },
};