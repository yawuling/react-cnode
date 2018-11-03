import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import routes from '../routes'
import { fetchAccess } from '../store/actions'

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    const accessToken = '82ce5331-7a60-4a7c-98bc-2b5fc6173d36'
    const loginName = 'yawuling'
    dispatch(fetchAccess(accessToken))
  }
  render() {
    return (
      <div>
        <Switch>
          {
            routes.map((item, key) => {
              return <Route key={ key } { ...item } />
            })
          }
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { login } = state
  return { login }
}

export default connect(mapStateToProps)(App)