const path = require('path')
const common = require('./webpack.config.common.js')
const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, 'src/index.js') 
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
    },
    runtimeChunk: 'single',
  }
})
