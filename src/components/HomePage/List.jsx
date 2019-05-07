import React, { Component } from 'react'
import { PullToRefresh } from 'antd-mobile'
import ReactDOM from 'react-dom'

export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
      height: document.documentElement.clientHeight
    }
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    })
    setTimeout(() => {
      this.setState({ refreshing: false })
    }, 1000)
  }

  componentDidMount () {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop
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
        <div>1</div>
      </PullToRefresh>
    )
  }
}