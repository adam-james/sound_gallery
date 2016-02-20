var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/dist'
  },
  devServer: {
    contentBase: __dirname + '/dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'react-hot!babel',
        include: __dirname + '/src'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss?$/,
        loader: 'style!css!sass',
        include: __dirname + '/css'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
}
