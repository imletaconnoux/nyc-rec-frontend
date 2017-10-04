import React from 'react'
import { Route, Link } from 'react-router-dom'


const BbqItem = (props) => {

  const handleClick = (event) => {
    props.deleteBbqLocation(props.bbq)
  }
  if(props.user) {
    return (
      <div>
        <a className="item">
          <Link to={`/bbqs/${props.bbq.id}`}>{props.bbq.Name}</Link><button onClick={handleClick}>X</button>
        </a>
      </div>
    )
  } else {
    return (
      <div>
        <a className="item">
          <Link to={`/bbqs/${props.bbq.id}`}>{props.bbq.Name}</Link>
        </a>
      </div>
    )
  }
}


export default BbqItem
