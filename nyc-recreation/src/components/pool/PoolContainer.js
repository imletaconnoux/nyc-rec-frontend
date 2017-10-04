import React from 'react'
import { Route, Link } from 'react-router-dom'
import PoolList from './PoolList.js'
import PoolDetails from './PoolDetails.js'
import { saveLocation } from '../../services/user'

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

  saveLocation = (pool) => {
    const poolObject = {pool_id: pool.id}
    saveLocation(poolObject)
    alert(`You added ${pool.Name} to your preferences!`)
  }

  render() {
    if (this.state.pools) {
    return(
      <div>
        <Route exact path="/pools" render={(props) => <PoolList poolList={this.state.pools} {...props} save={this.saveLocation}/>}/>
        <Route exact path="/pools/:id" render={(routeProps) => {
          const id = parseInt(routeProps.match.params.id)
          const pool = this.state.pools.filter((pool) => {
            return pool.id === id
          })
          return <PoolDetails thisPool={pool[0]} {...routeProps} save={this.saveLocation}/>

        }}/>

      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
  }
}
