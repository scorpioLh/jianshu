import React, { Component, Fragment } from 'react';
import { GlobalStyle } from "./style";
import { GlobalIconfont } from './statics/iconfont/iconfont'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Fragment>
				<GlobalStyle/>
				<GlobalIconfont/>
				<Header />
      </Fragment>
    );
  }
}

export default App;
