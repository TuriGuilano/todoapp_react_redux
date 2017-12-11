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
    // rule for every js file, if js file is found run babel on it with exception of the node_modules folder
    // rule for css files, use css-loader to inject our css in our head and style-loader to convert css into js css
    // if you have to use multiple loaders you specify an array under the name use: [ ...loader1, loader2 ]
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.css$/,
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};