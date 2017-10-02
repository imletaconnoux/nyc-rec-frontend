import React from 'react'
import {Route, Link} from 'react-router-dom'

const ZooItem = (props) => {
  //edit this for rendering from userprofilecontainer - nested props for zoolist
    return (
      <div>
        <a className="item">
          <Link to={`/zoos/${props.zoo.id}`}>{props.zoo.Name}</Link><br/>
        </a>
      </div>
    )
}

export default ZooItem
