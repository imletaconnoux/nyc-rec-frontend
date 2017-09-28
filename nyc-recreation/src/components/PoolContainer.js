import React from 'react'
import { Route, Link } from 'react-router-dom'

export default class PoolContainer extends React.Component {

  constructor(){
    super();

    this.state = {
      pools: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/pools')
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
