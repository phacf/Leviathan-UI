module.exports = {
  webpackConfig: {
    module: {

      // Often used for tailwind
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 }
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader',
                options: { implementation: require.resolve('postcss') }
              }
            ],
          }
        ]
      }

      // rules: [
      //   // Babel loader will use your project’s babel.config.js
      //   {
      //     test: /\.jsx?$/,
      //     exclude: /node_modules/,
      //     loader: 'babel-loader'
      //   },
      //   // Other loaders that are needed for your components
      //   {
      //     test: /\.css$/,
      //     use: ['style-loader', 'css-loader']
      //   }
      // ]
    }
  }
}
