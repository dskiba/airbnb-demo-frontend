import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './rheostat.css';
import Main from './Main';
import Homes from './Homes';

export default function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route path="/" exact component={Main} />
        <Route path="/Homes" component={Homes} />
      </React.Fragment>
    </BrowserRouter>
  );
}
