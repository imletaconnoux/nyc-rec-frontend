import React from 'react'
import { Link } from 'react-router-dom'

const PoolItem = (props) => {

  const handleClick = (event) => {
    props.save(props.pool)
  }
    return(
      <div>
        <a className="item">
          <Link to={`/pools/${props.pool.id}`}>{props.pool.Name}</Link>
        </a>
      </div>
    )
}

export default PoolItem
