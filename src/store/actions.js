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

/**
 * 首页HomePage
 */
export const SELECT_TAB = 'SELECT_TAB' // 选择tab
export const REQUEST_TOPICS = 'REQUEST_TOPICS' // 请求tab数据
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS' // 接受tab数据
export const SET_SCROLL_TOP = 'SET_SCROLL_TOP' // 设置tab的滚动高度

export const selectTab = tab => ({
  type: SELECT_TAB,
  tab
})

// 请求tab数据
export const requestTabData = tab => ({
  type: REQUEST_TOPICS,
  tab
})

// 接收tab数据
export const receiveTabData = (tab, topics, pageNo, pageSize) => ({
  type: RECEIVE_TOPICS,
  tab,
  pageNo,
  pageSize,
  topics
})

// 异步请求tba的列表数据
export const fetchTopics = (tab, pageNo = 1, pageSize = 20) => {
  return dispatch => {
    dispatch(requestTabData(tab))
    axios.get('https://cnodejs.org/api/v1/topics', {
      params: {
        tab,
        page: pageNo,
        limit: pageSize
      }
    }).then(res => {
      if (res.data.success) {
        dispatch(receiveTabData(tab, res.data.data, pageNo, pageSize))
      }
    })
  }
}

// 设置tab列表高度
export const setScrollTop = (tab, scrollTop) => ({
  type: SET_SCROLL_TOP,
  tab,
  scrollTop
})
