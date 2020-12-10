const webpack = require('webpack');
const path = require('path');

const CONFIG = {
  mode: 'development',

  entry: {
    app: './src/app.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src')
  }
};

module.exports = CONFIG;