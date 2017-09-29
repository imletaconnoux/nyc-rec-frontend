import React from 'react';
import { Route, Link } from 'react-router-dom'
import TennisList from './TennisList.js'


export default class TennisContainer extends React.Component {

  constructor(){
    super();

    this.state = {
      courts: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/tennis')
    .then((resp)=>resp.json())
    .then((data) => this.setState({
      courts: data
    }))
  }

  render() {
    if(this.state.courts) {

      return(
        <div>
          tennis
        </div>
      )
    }
  }
}
