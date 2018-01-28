import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './rheostat.css';
import Main from './Main';
import Homes from './Homes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" exact component={Main} />
          <Route path="/Homes" component={Homes} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
