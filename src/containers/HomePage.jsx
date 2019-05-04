import React, { Component } from 'react'
import Header from '../components/HomePage/Header'
import { Tabs } from 'antd-mobile'

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
  render () {
    return (
      <div className={ this.state.fadeIn ? 'fade-in' : '' }>
        <Header unreadMsmNum={1} />
        <div className="home-container">
          <Tabs tabs={this.tabs} initialPage={'all'}>
            {
              this.tabs.map((tab, index) => 
                <div key={tab.sub}>{tab.title}</div>
              )
            }
          </Tabs>
        </div>
      </div>
    )
  }
}

export default HomePage