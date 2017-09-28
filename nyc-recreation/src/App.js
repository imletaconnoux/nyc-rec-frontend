import React, { Component } from 'react';
import './App.css';
import NYCrec from './components/NYCrec.js'
import PoolContainer from './components/PoolContainer.js'
import BbqContainer from './components/BbqContainer.js'
import TennisContainer from './components/TennisContainer.js'
import ZooContainer from './components/ZooContainer.js'
import { Route, Link } from 'react-router-dom'
import NavLink from './components/Nav.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink/>
        <PoolContainer/>
        <BbqContainer/>
        <TennisContainer/>
        <ZooContainer/>

      </div>
    );
  }
}

export default App;
