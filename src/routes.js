import React from 'react'
import { Route } from 'react-router-dom'
import App from './containers/App'
import HomePage from './containers/HomePage'

const routes = (
  <Route path='/' component={App}>
    {/* <IndexRoute component={HomePage} /> */}
  </Route>
)

export default routes