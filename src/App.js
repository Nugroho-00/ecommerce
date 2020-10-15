import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'

// import components
import PrivateRoute from './components/Private'

// import pages
import Login from './pages/Login'
import Home from './pages/HomePage'
import Profile from './pages/Profile'
import Product from './pages/PageProduct'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/login' render={(props) => <Login {...props} /> } />
            <Route path='/' render={(props) => <Home {...props} /> } exact />
            <Route path='/pageProduct' render={(props) => <Product {...props} /> } />         
            <PrivateRoute path='/'  >
            <Route path='/profile' component={Profile} />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
