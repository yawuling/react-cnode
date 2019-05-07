import { combineReducers } from 'redux'
import login from './login'
import homePage from './homePage'

export default combineReducers({
  login,
  homePage
})