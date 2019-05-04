import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import Article from './Article'
import Login from './Login'
import Message from './Message'
import Profile from './Profile'
import PublishTopic from './PublishTopic'
import { fetchAccess } from '../store/actions'

class App extends Component {
  componentWillMount () {
    const { dispatch } = this.props
    const accessToken = '82ce5331-7a60-4a7c-98bc-2b5fc6173d36'
    dispatch(fetchAccess(accessToken))
  }
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/topic/:id" component={Article} />
          <Route path="/message" component={Message} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/publishTopic" component={PublishTopic} />
        </Switch>
      </Router>
    )
  }
}

function mapStateToProps (state) {
  const { login } = state
  return { login }
}

export default connect(mapStateToProps)(App)