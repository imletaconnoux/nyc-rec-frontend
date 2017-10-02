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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={(routeProps) => <Nav {...routeProps}/>}/>
        <PoolContainer/>
        <BbqContainer/>
        <TennisContainer/>
        <ZooContainer/>
        <Route exact path="/" component={WeatherContainer}/>
        <UserContainer />
      </div>
    );
  }
}

export default App;
