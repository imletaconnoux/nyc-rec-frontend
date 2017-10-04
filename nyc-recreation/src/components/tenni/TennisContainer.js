import React from 'react';
import { Route, Link } from 'react-router-dom'
import TennisList from './TennisList.js'
import TennisDetails from './TennisDetails.js'
import { saveLocation, deleteSavedLocation } from '../../services/user'

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

  saveLocation = (tennis) => {
    const tennisObject = {tenni_id: tennis.id}
    saveLocation(tennisObject)
  }

  render() {
    if(this.state.courts) {
      return(
        <div>
          <Route exact path ="/tennis" render={(props) => <TennisList tennisList={this.state.courts} {...props} save={this.saveLocation}/>}/>
          <Route exact path="/tennis/:id" render={(routeProps) => {
              const id = parseInt(routeProps.match.params.id)
              const tenni = this.state.courts.filter((tenni) => {
                return tenni.id === id
              })
              return <TennisDetails thisCourt={tenni[0]} {...routeProps} save={this.saveLocation}/>
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
