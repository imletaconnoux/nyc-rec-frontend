import React from 'react'
import { Route, Link } from 'react-router-dom'

export default class BbqContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      bbqs: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/bbqs')
    .then((resp)=>resp.json())
    .then((data) => console.log(data))
  }

  render() {
    return(
      <div>
        <h3>Fire up the grill at a local BBQ</h3>
      </div>
    )
  }
}
