import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/**
 * 登录actions
 */
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT = 'LOGOUT'

// 异步action
export const fetchAccess = accessToken => {
  return dispatch => {
    axios.post('/accesstoken', {
      accesstoken: accessToken
    }).then(res => {
      if (res.data.success) {
        dispatch(loginSuccess(res.data.loginname, res.data.id, res.data.accesstoken))
      } else {
        dispatch(loginFail(res.data.error_msg))
      }
    })
  }
}

const loginSuccess = (loginName, loginId, accessToken) => ({
  type: LOGIN_SUCCESS,
  loginName,
  loginId,
  accessToken
})

const loginFail = errorMsg => ({
  type: LOGIN_FAIL,
  errorMsg
})

// const logout = () => ({
//   type: LOGOUT
// })