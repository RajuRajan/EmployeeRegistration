import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';

import Login from './Login';
import Main from './Main/Main';



class App extends Component {
  render() {
    return (
      <div className="hls">
      <Router>
        <Route exact path= "/" render = {() => <Main />} />
        <Route exact path="/login" render={() => <Login/> } />
        <Route exact  path="/login/register" render={() => <Login/> }/>
    </Router>
    </div>
   )
  }
}

export default App;


