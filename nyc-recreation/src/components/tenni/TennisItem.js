import React from 'react'
import { Link } from 'react-router-dom'


const TennisItem = (props) => {
  const handleClick = (event) => {
    props.deleteTennisLocation(props.court)
    alert(`You deleted ${props.court.Name} from your preferences!`)
  }
  if (props.user) {
    return(
      <div>
        <a className="item">
          <Link to={`/tennis/${props.court.id}`}>{props.court.Name}</Link><button onClick={handleClick}>X</button>
        </a>
      </div>
    )
  } else {
    return(
      <div>
        <a className="item">
          <Link to={`/tennis/${props.court.id}`}>{props.court.Name}</Link>
        </a>
      </div>
    )
  }
}

export default TennisItem
