import React, { Component } from 'react'
import Header from '../components/HomePage/Header'
import { Tabs } from 'antd-mobile'
import { connect } from 'react-redux'
import { selectTab, fetchTopics, setScrollTop } from '../store/actions'
import List from '../components/HomePage/List'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fadeIn: true
    }
  }

  tabs = [
    {
      title: '全部',
      sub: 'all'
    }, {
      title: '精华',
      sub: 'good'
    }, {
      title: '分享',
      sub: 'share'
    }, {
      title: '问答',
      sub: 'ask'
    }, {
      title: '招聘',
      sub: 'job'
    }
  ]

  handleTabClick = tab => {
    const { dispatch } = this.props
    dispatch(selectTab(tab.sub))
  }

  handleTabRefresh = () => {
    const { activeTab, dispatch } = this.props
    dispatch(fetchTopics(activeTab, 1))
  }

  handleLoadMore = () => {
    const { activeTab, dispatch, tabs } = this.props
    dispatch(fetchTopics(activeTab, tabs[activeTab].pageNo + 1))
  }

  handleScrollTop = scrollTop => {
    const { activeTab, dispatch } = this.props
    dispatch(setScrollTop(activeTab, scrollTop))
  }

  render () {

    return (
      <div className={ this.state.fadeIn ? 'fade-in' : '' }>
        <Header unreadMsmNum={1} />
        <div className="home-container">
          <Tabs tabs={this.tabs} initialPage={this.props.activeTab} onTabClick={this.handleTabClick}>
            {
              this.tabs.map((tab, index) => {
                let { isFetching, topics, scrollTop } = this.props.tabs[tab.sub]
                return <List
                  key={tab.sub}
                  activeTab={this.props.activeTab}
                  tab={tab.sub}
                  isFetching={isFetching}
                  topics={topics}
                  refresh={this.handleTabRefresh}
                  loadmore={this.handleLoadMore}
                  scrollTop={scrollTop}
                  setScrollTop={this.handleScrollTop}
                />
              })
            }
          </Tabs>
        </div>
      </div>
    )
  }

  componentWillReceiveProps (newProps) {
    const { activeTab, tabs, dispatch } = newProps

    if (this.props.activeTab !== activeTab && !tabs[activeTab].topics.length) {
      dispatch(fetchTopics(activeTab))
    }
  }
}

function mapStatuToProps (state) {
  const { homePage } = state
  const { activeTab, tabs } = homePage
  return {
    activeTab,
    tabs
  }
}

export default connect(mapStatuToProps)(HomePage)