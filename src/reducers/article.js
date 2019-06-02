import {
  REQUEST_ARTICLE,
  RECEIVE_ARTICLE
} from '../store/actions'

export default (state = {
  isFetching: false,
  info: {}
}, action) => {
  switch (action.type) {
    case REQUEST_ARTICLE:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_ARTICLE:
      return {
        ...state,
        isFetching: false,
        info: action.info
      }
    default:
      return state
  }
}