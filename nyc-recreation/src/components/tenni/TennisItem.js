import React from 'react'
import { Link } from 'react-router-dom'


const TennisItem = (props) => {
  return(
    <a class="item">
      <Link to={`/tennis/${props.court.id}`}>{props.court.Name}</Link>
    </a>
  )
}

export default TennisItem
