const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [paths.src + '/index.js', paths.src + '/barbaTransition.js'],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
     patterns: [
      {
        from: paths.static,
        to: 'assets',
        globOptions: {ignore: ['*.DS_Store']}
      }
     ],
    }),

    new HtmlWebpackPlugin({
      title: 'Zino Chan',
      favicon: paths.static + '/favicon.png',
      template: paths.src + '/index.html', 
      filename: 'index.html', 
    }),
    new HtmlWebpackPlugin({
      title: 'Zino Chan',
      favicon: paths.static + '/favicon.png',
      template: paths.src + '/work.html', 
      filename: 'work.html', 
    }),
    new HtmlWebpackPlugin({
      title: 'Zino Chan',
      favicon: paths.static + '/favicon.png',
      template: paths.src + '/about.html', 
      filename: 'about.html', 
    }),
    new HtmlWebpackPlugin({
      title: 'Zino Chan',
      favicon: paths.static + '/favicon.png',
      template: paths.src + '/contact.html', 
      filename: 'contact.html', 
    }),
    
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|barbaTransition.js/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.html$/,
        use:["html-loader"]
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src', 
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[path][name].[ext]',
          context: 'src', 
        },
      },
    ],
  },
}
