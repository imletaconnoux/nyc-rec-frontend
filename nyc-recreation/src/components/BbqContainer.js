import React from 'react'

export default class BbqContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      bbqs: undefined
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
      hola
      </div>
    )
  }
}
