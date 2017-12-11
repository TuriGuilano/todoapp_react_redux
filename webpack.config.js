// let webpack know the entry point (src/app.js) and the output file
const path = require('path');
// find out what the exact path to this folder is from te root user
console.log(path.join(__dirname, 'public'));
// setup of our configurations
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};