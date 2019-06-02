import React, { Component } from 'react'

export default class UserInfo extends Component {
  render () {
    return (
      <div className="article-user">
        <img className="article-user-avatar" src={this.props.avatar} />
        <div className="article-user-info">
          <p className="article-user-name">
          </p>
        </div>
        <div className="article-info">
          <p className="article-time">{this.props.create_at}</p>
          <p>
            <span>{this.props.reply_count}</span>
            <span>{this.props.visit_count}</span>
          </p>
        </div>
      </div>
    )
  }
}