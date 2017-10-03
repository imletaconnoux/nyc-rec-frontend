import React from 'react';
import { Route, Link } from 'react-router-dom'
import ZooList from './ZooList.js'
import ZooDetails from './ZooDetails.js'

export default class ZooContainer extends React.Component {

  constructor(){
    super();

    this.state = {
      zoos: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/zoos')
    .then((resp)=>resp.json())
    .then((data) => this.setState({
      zoos: data
    }))
  }

  render() {
    if (this.state.zoos) {
      return(
        <div>
          <Route exact path="/zoos" render={(props) => <ZooList zooList={this.state.zoos} {...props}/>}/>
          <Route path="/zoos/:id" render={(routeProps) => {
              const id = parseInt(routeProps.match.params.id)
              const zoo = this.state.zoos.filter((zoo) => {
                return zoo.id === id
              })
              return <ZooDetails thisZoo={zoo[0]} {...routeProps}/>
            }}/>
        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }
}
