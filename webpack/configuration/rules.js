// Dependencies
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production'

// Package.json
import pkg from '../../package.json'

export default type => {
  const rules = [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: [
            [
              'env', {
                modules: false,
                node: pkg.engines.node,
                browsers: pkg.browserslist
              }
            ]
          ]
        }
      },
      exclude: /node_modules/
    },
    { test: /\.(eot|png|jpg|jpeg|gif|woff|woff2|svg|ttf|html)$/, use: 'url-loader?limit=10000' },
  ]

  if (!isDevelopment || type === 'server') {
    rules.push({ test: /\.less$|\.css$/, exclude: '/(node_modules)/', use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!less-loader'}) })
  } else {
    rules.push({ test: /\.less$|\.css$/, use: ['style-loader', 'css-loader', 'less-loader'] })
  }

  return rules
}
