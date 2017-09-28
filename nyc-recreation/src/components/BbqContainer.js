import React from 'react'
import { Route, Link } from 'react-router-dom'
import BbqList from './lists/BbqList.js'
import BbqDetails from './lists/items/BbqDetails.js'

export default class BbqContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      bbqs: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/bbqs')
    .then((resp)=>resp.json())
    .then((data) => this.setState({
      bbqs: data
    }))
  }

  render() {
    if (this.state.bbqs){
      return(
        <div>
          <h1>Fire up the grill at a local BBQ</h1>
          <Route exact path="/bbqs" render={(props) => <BbqList bbqlist={this.state.bbqs} {...props}/>}/>
          <Route path="/bbqs/:id" render={(routeProps) => {
                console.log(routeProps);
                  const id = routeProps.match.params.id
                  const bbq = this.state.bbqs[id]
                  return <BbqDetails thisBbq={bbq} {...routeProps}/>

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
