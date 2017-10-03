import React from 'react'
import { Route, Link } from 'react-router-dom'


const BbqItem = (props) => {

  const handleClick = (event) => {
    props.save(props.bbq)
  }
    return (
      <div>
        <a className="item">
          <Link to={`/bbqs/${props.bbq.id}`}>{props.bbq.Name}</Link>
        </a>
      </div>
    )
}


export default BbqItem
