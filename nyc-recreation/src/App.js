import React, { Component } from 'react';
import './App.css';
import NYCrec from './components/NYCrec.js'
import PoolContainer from './components/pool/PoolContainer.js'
import BbqContainer from './components/bbq/BbqContainer.js'
import TennisContainer from './components/tenni/TennisContainer.js'
import ZooContainer from './components/zoo/ZooContainer.js'
import { Route, Link } from 'react-router-dom'
import Nav from './components/Nav.js'
import WeatherContainer from './components/WeatherContainer.js'
import UserContainer from './components/user/UserContainer.js'
import { loginUser, logoutUser, loadUserPrefs, signupUser } from './services/user'
import Authorize from './components/Authorize'

class App extends Component {

  state = {
    user: {},
    isLoggedIn: false
  }

  login = (loginParams) => {
    loginUser(loginParams)
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        this.setState({
          user,
          isLoggedIn: true
        })
      })
  }

  signup = (loginParams) => {
    signupUser(loginParams)
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        this.setState({
          user,
          isLoggedIn: true
        })
      })
  }

  componentDidMount() {
    //fetch request to backend for refresh_page method
    loadUserPrefs().then((data) =>
    this.setState({
      user: data.user,
      isLoggedIn: true
      })
    )
  }

  logout = () => {
    logoutUser()
    this.setState({
      user: null,
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={(routeProps) => <Nav onLogout={this.logout} {...routeProps}/>}/>
        <PoolContainer/>
        <BbqContainer/>
        <TennisContainer/>
        <ZooContainer/>
        <Route exact path="/" component={WeatherContainer}/>
        <UserContainer onLogin={this.login} signUp={this.signup} user={this.state.user}/>
      </div>
    );
  }
}

export default App;
