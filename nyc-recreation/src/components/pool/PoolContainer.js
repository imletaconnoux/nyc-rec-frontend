import React from 'react'
import { Route, Link } from 'react-router-dom'
import PoolList from './PoolList.js'


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
    .then((data) => this.setState({
      pools: data
    }))
  }

  render() {
    return(
      <div>
        <PoolList poolList={this.state.pools}/>
      </div>
    )
  }
}
