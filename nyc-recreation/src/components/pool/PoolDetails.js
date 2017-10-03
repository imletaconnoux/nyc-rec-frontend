import React from 'react'

class PoolDetails extends React.Component {

  handleClick = (event) => {
    this.props.save(this.props.thisPool)
  }

  render(){
    let pool = this.props.thisPool

    return (
      <div>
        <h3>{pool.Name}</h3>
        <p>Location: {pool.Location}</p>
        <p>Phone: {pool.Phone}</p>
        <p>Setting: {pool.Setting}</p>
        <p>Size: {pool.Size}</p>
        <button onClick={this.handleClick}>Save this location</button>
      </div>

    )
  }


}

export default PoolDetails
