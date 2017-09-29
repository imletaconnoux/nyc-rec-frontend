import React from 'react'
import { Link } from 'react-router-dom'

class PoolItem extends React.Component {

  render(){
    return(
      <li>
        <Link to={`/pools/${this.props.pool.id}`}>{this.props.pool.Name}</Link>
      </li>
    )
  }
}

export default PoolItem
