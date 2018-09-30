import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../Home'
import Blog from '../Blog'
import User from '../User'

// import AsyncPageWrapper from '../../components/common/AsyncPageWrapper'

// const Home = AsyncPageWrapper((() => {
//   return import(
//     /* webpackChunkName: 'Home' */
//     'pages/Home'
//   ).then(module => module.default)
// }))

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/blog' component={ Blog }/>
          <Route path='/user' component={ User }/>
          {/* when none of the above match, <NoMatch> will be rendered */}
          {/* <Route component={ NoMatch }/> */}
        </Switch>
      </div>
    )
  }
}