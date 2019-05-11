import React, { Component } from 'react'
import { PullToRefresh } from 'antd-mobile'
import ListItem from './ListItem'

export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: document.documentElement.clientHeight
    }
  }

  onRefresh = () => {
    this.props.refresh()
  }

  componentDidMount () {
    const hei = this.state.height - 89
    setTimeout(() => {
      this.setState({
        height: hei
      })
    }, 0)
  }

  render () {
    return (
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto'
        }}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
      >
        {
          this.props.topics.map(item => 
            <ListItem data={item} key={item.id} />  
          )
        }
      </PullToRefresh>
    )
  }
}