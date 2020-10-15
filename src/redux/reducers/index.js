import {combineReducers} from 'redux'

import auth from './auth'
import home from './home'
import product from './pageProduct'
import profile from './profile'

export default combineReducers({
  auth,
  home,
  product,
  profile,
})