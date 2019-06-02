import React, { Component } from 'react'
import transformDate from '../../utils/transformDate'
import '../../assets/css/components/Article/userInfo.scss'

export default class UserInfo extends Component {
  render () {
    return (
      <div className="article-user">
        <img className="article-user-avatar" src={this.props.avatar} />
        <div className="article-user-info">
          {
            this.props.top ? <span className="article-top">置顶</span> : (this.props.good ? <span className="article-good">优</span> : '')
          }
          <span className="article-user-name">{this.props.name}</span>
        </div>
        <div className="article-info">
          <p className="article-info-item">发表于{transformDate(this.props.time)}</p>
          <p className="article-info-item">
            <span>{this.props.replyCount}</span>
            <span>{this.props.viewCount}</span>
          </p>
        </div>
      </div>
    )
  }
}