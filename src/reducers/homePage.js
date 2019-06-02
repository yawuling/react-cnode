import {
  SELECT_TAB,
  REQUEST_TOPICS,
  RECEIVE_TOPICS,
  SET_SCROLL_TOP
} from '../store/actions'

// 拆分首页状态
const selectTab = (state, action) => {
  switch (action.type) {
    case SELECT_TAB:
      return action.tab
    default:
      return state
  }
}

const tabData = (state = { isFetching: false, topics: [], pageNo: 1, pageSize: 20 }, action) => {
  switch (action.type) {
    case REQUEST_TOPICS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_TOPICS:
      if (state.pageNo < action.pageNo) {
        action.topics = state.topics.concat(action.topics)
      }
      return {
        ...state,
        isFetching: false,
        topics: action.topics,
        pageNo: action.pageNo,
        pageSize: action.pageSize
      }
    default:
      return state
  }
}

const getTabsData = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_TOPICS:
    case RECEIVE_TOPICS:
      return {
        ...state,
        [action.tab]: tabData(state[action.tab], action)
      }
    case SET_SCROLL_TOP:
      return {
        ...state,
        [action.tab]: {
          ...state[action.tab],
          scrollTop: action.scrollTop
        }
      }
    default:
      return state
  }
}

export default (state = {
  activeTab: 'all',
  tabs: {
    'all': {
      isFetching: false,
      topics: [],
      pageNo: 0,
      pageSize: 20,
      scrollTop: 0
    },
    'good': {
      isFetching: false,
      topics: [],
      pageNo: 0,
      pageSize: 20,
      scrollTop: 0
    },
    'share': {
      isFetching: false,
      topics: [],
      pageNo: 0,
      pageSize: 20,
      scrollTop: 0
    },
    'ask': {
      isFetching: false,
      topics: [],
      pageNo: 0,
      pageSize: 20,
      scrollTop: 0
    },
    'job': {
      isFetching: false,
      topics: [],
      pageNo: 0,
      pageSize: 20,
      scrollTop: 0
    }
  }
}, action) => {
  const activeTab = selectTab(state.activeTab, action)
  const tabs = getTabsData(state.tabs, action)
  return {
    ...state,
    activeTab,
    tabs
  }
}
