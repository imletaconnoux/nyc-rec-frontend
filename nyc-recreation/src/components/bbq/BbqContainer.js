import React from 'react'
import { Route, Link } from 'react-router-dom'
import BbqList from './BbqList.js'
import BbqDetails from './BbqDetails.js'
import { saveLocation } from '../../services/user'

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

  saveLocation = (bbq) => {
    const bbqObject = {bbq_id: bbq.id}
    saveLocation(bbqObject)
    alert(`You added ${bbq.Name} to your preferences!`)
  }

  render() {
    if (this.state.bbqs){
      return(
        <div>
          <Route exact path="/bbqs" render={(props) => <BbqList bbqList={this.state.bbqs} {...props}/>}/>
          <Route path="/bbqs/:id" render={(routeProps) => {
                  const id = parseInt(routeProps.match.params.id)
                  const bbq = this.state.bbqs.filter((bbq) => {
                    return bbq.id === id
                  })
                  return <BbqDetails thisBbq={bbq[0]} {...routeProps} save={this.saveLocation}/>

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
