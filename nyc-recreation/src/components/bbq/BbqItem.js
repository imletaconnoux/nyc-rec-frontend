import React from 'react'
import { Route, Link } from 'react-router-dom'
import BbqDetails from './BbqDetails.js'


class BbqItem extends React.Component {

  state = {
    bbq: this.props.bbq
  }

  render() {
    return (
      <a className="item">
        <Link to={`/bbqs/${this.state.bbq.id}`}>{this.state.bbq.Name}</Link>
      </a>
    )
  }

}


export default BbqItem
