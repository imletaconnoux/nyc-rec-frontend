import React from 'react'
import { Route, Link } from 'react-router-dom'
import PoolList from './PoolList.js'
import PoolDetails from './PoolDetails.js'

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
        <Route exact path="/pools" render={(props) => <PoolList poolList={this.state.pools} {...props}/>}/>
        <Route exact path="/pools/:id" render={(routeProps) => {
          const id = routeProps.match.params.id
          const pool = this.state.pools[id]
          return <PoolDetails thisPool={pool} {...routeProps}/>

        }}/>

      </div>
    )
  }
}
