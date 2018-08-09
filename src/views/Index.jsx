import React, { Component } from 'react'
import HelloWorld from '../components/HelloWorld/HelloWorld'
import Say from '../components/Say/Say'

class Index extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Say />
      </div>
    )
  }
}

export default Index
