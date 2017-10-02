import React from 'react'

class BbqDetails extends React.Component {

  render() {
    let bbq = this.props.thisBbq
    return (
      <div>
        <h3>Name: {this.props.thisBbq.Name}</h3>
        <p>Location: {bbq.Location} </p>
      </div>
    )
  }
}

export default BbqDetails
