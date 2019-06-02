import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import transformDate from '../../utils/transformDate'
import '../../assets/css/components/HomePage/listItem.scss'

export default class ListItem extends Component {
  render () {
    const { id, title, author, reply_count, visit_count, create_at, top, good } = this.props.data
    const { loginname, avatar_url } = author
    return (
      <Link to={`/topic/${id}`}>
        <div className="list-item">
          <img src={avatar_url} className="list-item-avatar" alt="头像" />
          <div className="list-item-info">
            <div className="list-item-line is-flex is-between">
              <div className="list-item-nickname">{ loginname }</div>
              <div className="list-item-date">{ transformDate(create_at) }</div>
            </div>
            <div className="list-item-line is-flex is-space">
              {
                top ? <span className="list-item-top">置顶</span> : (good ? <span className="list-item-good">优</span> : '')
              }
              <span className="list-item-title">{ title }</span>
            </div>
            <div className="list-item-line is-right">
              <span className="list-item-label">回复 {reply_count}</span>
              <span className="list-item-label">浏览 {visit_count}</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}