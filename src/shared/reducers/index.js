import { combineReducers } from 'redux'

import blog from '../../app/blog/reducer'

import auth from './Auth'
import device from './deviceReducer'

const rootReducer = combineReducers({
  auth,
  blog,
  device
})

export default rootReducer
