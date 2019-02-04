import React, { Component, Fragment } from 'react';
import { GlobalStyle } from "./style";
import { GlobalIconfont } from './statics/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Fragment>
				<Provider store={store}>
					<GlobalStyle/>
					<GlobalIconfont/>
					<Header />
				</Provider>
      </Fragment>
    );
  }
}

export default App;
