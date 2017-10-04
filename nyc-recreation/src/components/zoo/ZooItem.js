import React from 'react'
import {Route, Link} from 'react-router-dom'

const ZooItem = (props) => {
  //edit this for rendering from userprofilecontainer - nested props for zoolist

    const handleClick = (event) => {
      props.deleteZooLocation(props.zoo)
    }
    if(props.user) {
      return (
        <div>
          <a className="item">
            <Link to={`/zoos/${props.zoo.id}`}>{props.zoo.Name}</Link><button onClick={handleClick}>X</button>
            <br/>
          </a>
        </div>
      )
    } else {
      return (
        <div>
          <a className="item">
            <Link to={`/zoos/${props.zoo.id}`}>{props.zoo.Name}</Link>
            <br/>
          </a>
        </div>
      )
    }
}

export default ZooItem
