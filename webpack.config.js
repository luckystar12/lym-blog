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
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
      // template: 'index.html'
      template: __dirname + "/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ],
  module: {
    rules: [
      // {
        // test: /\.css$/,
        // loader: 'style!css'
        // use: [
        //   'style-loader',
        //   { loader: 'css-loader', options: { importLoaders: 1 } },
        //   'postcss-loader',
        // ],
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     { loader: 'css-loader', options: { importLoaders: 1 } },
      //     'postcss-loader',
      //   ],
      // },
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
              ["import", { "libraryName": "antd", "style": "css" }]
            ],
          },
        }],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[local]',
              sourceMap: true,
            },
          },
          'postcss-loader?sourceMap',
          'sass-loader?sourceMap',
          'import-glob-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
        ],
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