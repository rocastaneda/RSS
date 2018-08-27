// Configuration
import { rules, extensions, modules } from './configuration'
import path from 'path'

export default type => ({
  module: {
    rules: rules(type)
  },
  resolve: {
    extensions: extensions(),
    modules: modules(),
    alias: {
      App: path.resolve(__dirname, '../src/app'),
      Containers: path.resolve(__dirname, '../src/app/containers'),
      Components: path.resolve(__dirname, '../src/app/components'),
      Shared: path.resolve(__dirname, '../src/shared'),
      Reducers: path.resolve(__dirname, '../src/shared/reducers'),
      Styles: path.resolve(__dirname, '../src/shared/styles'),
      Images: path.resolve(__dirname, '../src/shared/images'),
      Utils: path.resolve(__dirname, '../src/shared/utils')
    }
  }
})
