import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../store/actions'

export default (state = { success: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        success: true,
        loginName: action.loginName,
        loginId: action.loginId,
        accessToken: action.accessToken
      }
    case LOGIN_FAIL:
      return {
        success: false,
        errorMsg: action.errorMsg
      }
    case LOGOUT:
      return {
        success: false
      }
    default:
      return state
  }
}