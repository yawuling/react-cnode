import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import '../../assets/css/components/HomePage/header.scss'

export default class Header extends Component {
  render () {
    let NoticeIcon = (
      <div className="header-bell">
        <i className="iconfont icon-tongzhi header-bell-icon"></i>
        {
          this.props.unreadMsmNum !== 0 && <span className="header-bell-count">{this.props.unreadMsmNum}</span>
        }
      </div>
    )

    return (
      <NavBar
        className="header"
        icon={<i className="iconfont icon-caidan header-icon"></i>}
        rightContent={NoticeIcon}
      >
        NodeJS论坛
      </NavBar>
    )
  }
}