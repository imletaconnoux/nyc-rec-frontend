import React from 'react'
import { Link } from 'react-router-dom'

const PoolItem = (props) => {

  const handleClick = (event) => {
    props.deletePoolLocation(props.pool)
  }
  if (props.user) {
    return(
      <div>
        <a className="item">
          <Link to={`/pools/${props.pool.id}`}>{props.pool.Name}</Link><button onClick={handleClick}>X</button>
        </a>
      </div>
    )
  } else {
    return(
      <div>
        <a className="item">
          <Link to={`/pools/${props.pool.id}`}>{props.pool.Name}</Link>
        </a>
      </div>
    )
  }
}

export default PoolItem
