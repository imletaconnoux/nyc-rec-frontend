import React from 'react'
import {Route, Link} from 'react-router-dom'

const ZooItem = (props) => {
    return (
      <li>
        <Link to={`/zoos/${props.zoo.id}`}>{props.zoo.Name}</Link>
      </li>
    )

}

export default ZooItem
