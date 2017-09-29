import React from 'react';
import { Route, Link } from 'react-router-dom'
import ZooList from './ZooList.js'


export default class ZooContainer extends React.Component {

  constructor(){
    super();

    this.state = {
      zoos: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/zoos')
    .then((resp)=>resp.json())
    .then((data) => this.setState({
      zoos: data
    }))
  }

  render() {
    return(
      <div>
      zoos
      </div>
    )
  }
}
