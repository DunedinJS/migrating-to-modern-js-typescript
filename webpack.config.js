module.exports = {

  entry: './source',

  output: {
    path: './dist', // the directory to output bundled files to
    publicPath: 'dist', // the web path prefix for bundled files
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/,
      },
    ],
  },
  
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.json'],
  },

};
