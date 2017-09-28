import React from 'react';
import { Route, Link } from 'react-router-dom'

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
    .then((data) => console.log(data))
  }

  render() {
    return(
      <div>
      hola
      </div>
    )
  }
}
