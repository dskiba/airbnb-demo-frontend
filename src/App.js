import React, { Component } from "react";
import "./App.css";
import "normalize.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Homes from "./Homes";
import Footer from "./Footer";

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
