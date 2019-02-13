import React, { Component, Fragment } from 'react';
import { GlobalStyle } from "./style";
import { GlobalIconfont } from './statics/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <div>
            <GlobalStyle/>
            <GlobalIconfont/>
            <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={Detail}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
