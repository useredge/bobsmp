const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
    loaders: [
        {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=2097152' }
    ],
    watchOptions: {
      ignored: /node_modules/
    }
}