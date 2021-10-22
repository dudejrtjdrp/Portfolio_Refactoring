import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Login, MyPage, Network, Register } from "./Pages";
import NavBar from "./NavBar";
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
          <NavBar />
          <BrowserRouter>
            <Route path="/" exact component={Network} />
            <Route path="/login" exact component={Login} />
            <Route path="/mypage" exact component={MyPage} />
            <Route path="/network" exact component={Network} />
            <Route path="/register" exact component={Register} />
          </BrowserRouter>
    </div>
  );
}
}

export default App;
