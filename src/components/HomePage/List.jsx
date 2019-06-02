import React, { Component } from 'react'
import { PullToRefresh, ListView, ActivityIndicator } from 'antd-mobile'
import ListItem from './ListItem'
import ReactDOM from 'react-dom'
import '../../assets/css/components/HomePage/list.scss'

function ListBody (props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default class List extends Component {
  constructor (props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.state = {
      dataSource,
      height: document.documentElement.clientHeight
    }
  }

  componentWillMount () {
    this.props.loadmore()
  }

  componentDidMount () {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).getBoundingClientRect().top
    setTimeout(() => {
      this.setState({
        height: hei
      })
    }, 0)
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newProps.topics)
    })
  }

  render () {
    const row = (rowData, sectionId, rowId) => {
      return <ListItem data={rowData} key={rowId} />
    }
    const loading = () => (
      <ActivityIndicator text="加载中..." className="list-loading" />
    )

    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderFooter={loading}
        renderBodyComponent={() => <ListBody />}
        renderRow={row}
        style={{
          height: this.state.height,
          overflow: 'auto'
        }}
        pageSize={20}
        scrollRenderAheadDistance={500}
        onEndReached={this.props.loadmore}
        onEndReachedThreshold={10}
        pullToRefresh={<PullToRefresh
          refreshing={this.props.isFetching}
          onRefresh={this.props.refresh}
        />}
      />
    )
  }
}