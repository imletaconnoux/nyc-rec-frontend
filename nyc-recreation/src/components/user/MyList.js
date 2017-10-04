import React from 'react'
import ZooItem from '../zoo/ZooItem.js'
import PoolItem from '../pool/PoolItem'
import BbqItem from '../bbq/BbqItem'
import TennisItem from '../tenni/TennisItem'
import {Link} from 'react-router-dom'

const MyList = (props) => {
  const mappedZoosList = (function() {
    if (props.locations.zoos.length > 0) {
      const zoos = props.locations.zoos.map((zoo, index) => {
        return (<ZooItem key={index} user={props.locations.user} zoo={zoo.zoo_info} deleteZooLocation={props.deleteZooLocation}/>)
      })
      return zoos
    } else {
      return(<p>You have no saved zoos. View NYC zoos <Link to="/zoos"> here</Link></p>)
    }
})()

const mappedBbqsList = (function () {
  if (props.locations.bbqs.length > 0) {
    const bbqs = props.locations.bbqs.map((bbq, index) => {
      return (<BbqItem key={index} user={props.locations.user} bbq={bbq.bbq_info} deleteBbqLocation={props.deleteBbqLocation}/>)
    })
    return bbqs
  } else {
    return(<p>You have no saved bbq areas. View NYC bbqs <Link to="/bbqs"> here</Link></p>)
  }
})()

const mappedTennisList = (function () {
  if (props.locations.tennis.length > 0) {
    const tennis = props.locations.tennis.map((tenni, index) => {
      return (<TennisItem key={index} user={props.locations.user} court={tenni.tenni_info} deleteTennisLocation={props.deleteTennisLocation}/>)
    })
    return tennis
  } else {
    return(<p>You have no saved tennis courts. View NYC Courts <Link to="/tennis"> here</Link></p>)
  }
})()

  const mappedPoolsList = (function() {

  if (props.locations.pools.length > 0) {
      const pools = props.locations.pools.map((pool, index) => {
      return (<PoolItem key={index} user={props.locations.user} pool={pool.pool_info} deletePoolLocation={props.deletePoolLocation}/>)
  })
  return pools
} else {
      return (<p>You have no saved pools. View NYC pools <Link to="/pools"> here</Link></p>)
    }
  })()
  return (
    <div>
      <h3>Your Favorite Zoos </h3>
        <div className="ui ordered list">
            {mappedZoosList}
        </div>
      <h3>Your Favorite Pools </h3>
        <div className="ui ordered list">
          {mappedPoolsList}
        </div>
        <h3>Your Favorite Bbq Spots </h3>
          <div className="ui ordered list">
            {mappedBbqsList}
          </div>
          <h3>Your Favorite Tennis Courts </h3>
            <div className="ui ordered list">
              {mappedTennisList}
            </div>
    </div>
  )
}

export default MyList
