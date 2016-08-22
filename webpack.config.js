const autoprefixer = require('autoprefixer');
const Path = require('path');

module.exports = {
  context: __dirname, 
  entry: {
    app: ["./client/index.js"]
  },
  output: {
    filename: "./client/bundle.js",
  },
  watch: true,
  module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader', 
       cacheDirectory: true
     },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
    { test: /\.css$/, loader: 'style!css!postcss' },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
   ]
 },
 postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
 resolve: {
   extensions: ['', '.js', '.sass', '.scss'],
    root: [Path.join(__dirname, './client')]
 },
}