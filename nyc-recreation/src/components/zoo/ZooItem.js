import React from 'react'
import {Route, Link} from 'react-router-dom'

const ZooItem = (props) => {
  //edit this for rendering from userprofilecontainer - nested props for zoolist

    const handleClick = (event) => {
      props.save(props.zoo)
    }

    return (
      <div>
        <a className="item">
          <Link to={`/zoos/${props.zoo.id}`}>{props.zoo.Name}</Link><button onClick={handleClick}>Save to your list</button><br/>
        </a>
      </div>
    )
}

export default ZooItem
