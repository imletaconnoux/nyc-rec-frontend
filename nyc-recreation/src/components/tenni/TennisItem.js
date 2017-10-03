import React from 'react'
import { Link } from 'react-router-dom'


const TennisItem = (props) => {

  const handleClick = (event) => {
    props.save(props.court)
  }
  return(
    <div>
      <a className="item">
        <Link to={`/tennis/${props.court.id}`}>{props.court.Name}</Link><br/>
      </a>
    </div>
  )
}

export default TennisItem
