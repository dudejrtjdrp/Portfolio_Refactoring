import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Login, MyPage, Network, Register, UserPage } from "./Pages";
import './App.css';

class App extends Component {
  render() {
  return (
    <div className='wrapper'>
    <Router>
        <Switch>
            <Route path="/" exact component={Network} />
            <Route path="/login" exact component={Login} />
            <Route path="/mypage" exact component={MyPage} />
            <Route path="/userpage" exact component={UserPage} />
            <Route path="/network" exact component={Network} />
            <Route path="/register" exact component={Register} />
          </Switch>
    </Router>
    </div>
  );
}
}

export default App;
