import HomePage from './containers/HomePage'
import Article from './containers/Article'
import Login from './containers/Login'
import Message from './containers/Message'
import Profile from './containers/Profile'
import PublishTopic from './containers/PublishTopic'
import NoFind from './components/Nofind/NoFind'

export default [
  {
    path: '/',
    component: HomePage,
    exact: true
  }, {
    path: '/topic/:id',
    component: Article
  }, {
    path: '/message',
    component: Message
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/profile',
    component: Profile
  }, {
    path: '/publishTopic',
    component: PublishTopic
  }, {
    component: NoFind
  }
]