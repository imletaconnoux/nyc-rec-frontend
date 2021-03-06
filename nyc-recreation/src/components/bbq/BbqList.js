import React from 'react'
import { Route, Link } from 'react-router-dom'
import BbqItem from './BbqItem.js'

const BbqList = (props) => {
  const mappedList = props.bbqList.map((bbq, index) => {
    return (<BbqItem key={index} bbq={bbq} save={props.save}/> )

  })
  return (
    <div>
      <h3>Fire up the grill at a local BBQ</h3>
      <div className="ui list">
        {mappedList}
      </div>
    </div>
  )
}

export default BbqList
