import React from 'react'

class TennisDetails extends React.Component {

  handleClick = (event) => {
    this.props.save(this.props.thisCourt)
  }

  render(){
    let court = this.props.thisCourt
    return (
      <div>
        <h3>Name: {court.Name}</h3>
        <p>Location: {court.Location}</p>
        <p>Phone Number: {court.Phone}</p>
        <p>{court.Indoor_Outdoor}</p>
        <p>Number of Courts: {court.Courts}</p>
        <p>Type of Courts: {court.Tennis_Type}</p>
        <button onClick={this.handleClick}>Save this location</button>
      </div>
    )
  }

}

export default TennisDetails
