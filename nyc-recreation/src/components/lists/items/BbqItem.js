import React from 'react'
import { Route, Link } from 'react-router-dom'
import BbqDetails from './BbqDetails.js'


class BbqItem extends React.Component {

  state = {
    bbq: this.props.bbq
  }

  render() {
    return (
      <li>
      <Link to={`/bbqs/${this.state.bbq.id}`}>{this.state.bbq.Name}</Link>

      </li>
    )
  }

}


export default BbqItem
