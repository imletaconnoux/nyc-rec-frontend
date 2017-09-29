import React from 'react'
import { Route, Link } from 'react-router-dom'
import ZooItem from './ZooItem.js'

const ZooList = (props) => {
  const mappedList = props.zooList.map((zoo, index) => {
    return(<ZooItem key={index} zoo={zoo}/>)
  })
  return (
    <div>
      <h3>Show your wild side at these NYC zoos</h3>
      <ol>
        {mappedList}
      </ol>
    </div>
  )
}

export default ZooList
