import React from 'react'
import { Link } from 'react-router-dom'

const TennisItem = (props) => {
  return(
    <li>
      <Link to={`/tennis/${props.court.id}`}>{props.court.Name}</Link>
    </li>
  )
}

export default TennisItem
