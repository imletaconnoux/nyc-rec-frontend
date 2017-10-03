import React from 'react'

class PoolDetails extends React.Component {

  render(){
    const pool = this.props.thisPool

    return (
      <div>
        <h3>{pool.Name}</h3>
        <p>Location: {pool.Location}</p>
        <p>Phone: {pool.Phone}</p>
        <p>Setting: {pool.Setting}</p>
        <p>Size: {pool.Size}</p>
      </div>

    )
  }


}

export default PoolDetails
