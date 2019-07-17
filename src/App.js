import React, {Component}from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './assets/logo.png';

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
      login: false,
      token: ""
    }
  }

  setToken = (token) => {
    this.setState({
      token
    })
    console.log(this.state.token);
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
    const { loggedIn, username, password, login, token } = this.state;
    return (
      <Router>
        <main className="wrapper">
          <h1 className="visuallyhidden">Retro Rewind API documentation</h1>
          <img src={logo} alt="Retro Rewind API documentation chrome text image"/>
          {
            loggedIn ?
              <Docs />
            :
              (
              login ?
                <Login
                  showRegister={this.showRegister}
                  setToken={this.setToken}
                />
              :
                <Register
                  showLogin={this.showLogin}
                  setToken={this.setToken}
                />
              )
          }
        </main>

      </Router>
    );
  }
}

export default App;
