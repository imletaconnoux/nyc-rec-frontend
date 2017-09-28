import React from 'react'
import { Route, Link } from 'react-router-dom'
import BbqItem from './items/BbqItem.js'
import BbqDetails from './items/BbqDetails.js'


const BbqList = (props) => {
  const mappedList = props.bbqlist.map((bbq, index) => {
    return (<BbqItem key={index} bbq={bbq}/>)

  })
  return (
    <div>
      <ol>
        {mappedList}
      </ol>

    </div>
  )
}

export default BbqList
