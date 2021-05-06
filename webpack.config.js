module.exports = {
  module: {
    rules: [
      {
        loader: 'px2rem-loader',
        // options here
        options: {
          remUni: 75,
          remPrecision: 8
        }
      },
      // {
      //   test: /\.css$/,
      //   use: ['vue-style-loader', 'css-loader']
      // }
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }

    ]
  }
}
