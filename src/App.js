import React, {Component}from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/Login.js';
import Register from './components/Register.js';
import Docs from './components/Docs.js';

import './styles/setup.css';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      login: false
    }
  }

  showLogin = () => {
    this.setState({
      login: true
    })
  }

  showRegister = () => {
    this.setState({
      login: false
    })
  }

  render() {
    const { loggedIn, username, password, login } = this.state;
    return (
      <Router>
        <main>
          <h1>Retro API docs</h1>
          {
            loggedIn ?
              <Docs />
            :
              (
              login ?
                <Login showRegister={this.showRegister}/>
              :
                <Register showLogin={this.showLogin}/>
              )
          }
        </main>

      </Router>
    );
  }
}

export default App;
