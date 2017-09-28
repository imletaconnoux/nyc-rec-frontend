import React from 'react';
import { Route, Link } from 'react-router-dom'

export default class TennisContainer extends React.Component {

  constructor(){
    super();

    this.state = {
      courts: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/tennis')
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
