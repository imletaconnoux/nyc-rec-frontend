import React from 'react'

export default class ZooDetails extends React.Component {

  render() {
    let zoo = this.props.thisZoo
    return (
      <div>
        <h3> Name: {zoo.Name} </h3>
        <p> Location: {zoo.Location} </p>
        <p> Phone: {zoo.Phone_Num}</p>
      </div>
    )
  }

}
