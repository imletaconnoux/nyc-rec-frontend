import React from 'react'
import { Link } from 'react-router-dom'

class PoolItem extends React.Component {

  render(){
    return(
      <a className="item">
        <Link to={`/pools/${this.props.pool.id}`}>{this.props.pool.Name}</Link>
      </a>
    )
  }
}

export default PoolItem
