import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'

class Article extends Component {
  render () {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
        >详情</NavBar>
        <div className="article-container">
        </div>
      </div>
    )
  }
}

export default Article