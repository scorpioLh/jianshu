import React, { Component, Fragment } from 'react';
import { GlobalStyle } from "./style";
import { GlobalIconfont } from './statics/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import store from './store'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GlobalStyle/>
          <GlobalIconfont/>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
