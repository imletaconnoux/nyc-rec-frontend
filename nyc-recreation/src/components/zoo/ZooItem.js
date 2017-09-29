import React from 'react'
import {Route, Link} from 'react-router-dom'

const ZooItem = (props) => {
    return (
      <a class="item">
        <Link to={`/zoos/${props.zoo.id}`}>{props.zoo.Name}</Link>
      </a>
    )

}

export default ZooItem
