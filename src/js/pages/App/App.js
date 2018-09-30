import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../Home/Home'

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
          {/* when none of the above match, <NoMatch> will be rendered */}
          {/* <Route component={ NoMatch }/> */}
        </Switch>
      </div>
    )
  }
}