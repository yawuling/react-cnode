import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { connect } from 'react-redux'
import { fetchArticle } from '../store/actions'
import UserInfo from '../components/Article/UserInfo'

class Article extends Component {
  render () {
    const { info } = this.props

    return (
      <div className="fade-in">
        <div className="navbar">
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.goBack()}
          >详情</NavBar>
        </div>
        <div className="page-container">
          <UserInfo
            avatar={info.author && info.author.avatar_url}
            name={info.author && info.author.loginname}
            time={info.create_at}
            replyCount={info.reply_count}
            viewCount={info.visit_count}
            top={info.top}
            good={info.good}
          />
          <div className="article-md" dangerouslySetInnerHTML={{__html: info.content}}></div>
        </div>
      </div>
    )
  }

  componentWillMount () {
    const id = this.props.location.pathname.split('/topic/')[1]
    const { dispatch } = this.props
    dispatch(fetchArticle(id))
  }

  componentWillReceiveProps (newProps) {
    console.log(newProps)
  }
}

function mapStateToProps (state) {
  const { article } = state
  const { isFetching, info } = article
  
  return {
    isFetching,
    info
  }
}

export default connect(mapStateToProps)(Article)
