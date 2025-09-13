const common = require('./webpack.config.common.js')

const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')

const vendorChunks = [
  'react',
  'react-dom',
  'react-router-dom',
  'axios',
  'ramda',
  'ramjam' 
]

module.exports = merge(common, {
  mode: 'production',
  entry: {
    main: '/src/index',
    vendor: vendorChunks
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
    }
  }
})
