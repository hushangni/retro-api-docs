import React, {Component}from 'react';
import { BrowserRouter as Router } from "react-router-dom";
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
      loggedIn: false,
      login: false,
      token: ""
    }
  }

  setToken = (token) => {
    this.setState({
      token,
      loggedIn: true
    })
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

  logout = () => {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    const { loggedIn, login, token } = this.state;
    return (
      <Router>
        <main className="wrapper">
          <h1 className="visuallyhidden">Retro Rewind API documentation</h1>
          <img src={logo} alt="Retro Rewind API documentation chrome text"/>
          {
            loggedIn ?
              <Docs
                token={token}
                logout={this.logout}
              />
            :
              (
              login ?
                <>
                  <p className="desc">An API that gets you the top 5 most popular movies, shows, books, and songs of the retro age.</p>
                  <Login
                    showRegister={this.showRegister}
                    setToken={this.setToken}
                  />
                </>
              :
                <>
                  <p className="desc">An API that gets you the top 5 most popular movies, shows, books, and songs of the retro age.</p>
                  <Register
                    showLogin={this.showLogin}
                    setToken={this.setToken}
                  />
                </>
              )
          }
        </main>

      </Router>
    );
  }
}

export default App;
