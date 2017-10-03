import React from 'react'

class BbqDetails extends React.Component {

  handleClick = (event) => {
    this.props.save(this.props.thisBbq)
  }

  render() {
    let bbq = this.props.thisBbq
    return (
      <div>
        <h3>Name: {this.props.thisBbq.Name}</h3>
        <p>Location: {bbq.Location} </p>
        <button onClick={this.handleClick}>Save this location</button>
      </div>
    )
  }
}

export default BbqDetails
