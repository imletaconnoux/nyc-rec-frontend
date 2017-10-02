import React from 'react'
import { Route, Link } from 'react-router-dom'
import PoolItem from './PoolItem.js'

const PoolList = (props) => {
  const mappedList = props.poolList.map((pool, index) => {
    return(<PoolItem key={index} pool={pool}/>)
  })
  return (
    <div>
      <h3>Take your chances at the public pool!</h3>
      <div className="ui ordered list">
      {mappedList}
    </div>
    </div>
  )
}

export default PoolList
