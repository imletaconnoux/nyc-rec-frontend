import React from 'react'
import { Route, Link } from 'react-router-dom'
import TennisItem from './TennisItem.js'

const TennisList = (props) => {
  const mappedList = props.tennisList.map((court, index) =>{
    return (<TennisItem key={index} court={court} save={props.save}/>)
  })
  return (
    <div>
    <h3>Match Set: Play some tennis!</h3>
      <div className="ui list">
      {mappedList}
      </div>
    </div>
  )
}

export default TennisList
