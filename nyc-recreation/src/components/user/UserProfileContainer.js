import React from 'react'
import { loadUserPrefs } from '../../services/user'
import MyList from './MyList'
import { deleteSavedLocation } from '../../services/user'

export default class UserProfileContainer extends React.Component {

  state = {
    user: ""
  }

  deleteZooLocation = (zoo) => {
    const zooObject = {zoo_id: zoo.id}
    deleteSavedLocation(zooObject)
    this.thisUserPrefs()
    window.location.reload()
  }

  deletePoolLocation = (pool) => {
    const poolObject = {pool_id: pool.id}
    deleteSavedLocation(poolObject)
    this.thisUserPrefs()
    window.location.reload()
  }

  deleteBbqLocation = (bbq) => {
    const bbqObject = {bbq_id: bbq.id}
    deleteSavedLocation(bbqObject)
    this.thisUserPrefs()
    window.location.reload()
  }

  deleteTennisLocation = (tenni) => {
    const tenniObject = {tenni_id: tenni.id}
    deleteSavedLocation(tenniObject)
    this.thisUserPrefs()
    window.location.reload()
  }

  thisUserPrefs = () =>{
    const thisUserInfo = loadUserPrefs().then((data) =>{
    this.setState({
      user: data.user.username,
      zoos: data.prefs.zoos,
      bbqs: data.prefs.bbqs,
      pools: data.prefs.pools,
      tennis: data.prefs.tennis
      })
    }
    )

  }

  componentDidMount() {
    this.thisUserPrefs()
  }

  render() {
    if (this.state.user !== "") {
      return (
        <div>
          <h2>Welcome {this.state.user}!</h2>
          <MyList locations={this.state} deleteZooLocation={this.deleteZooLocation} deletePoolLocation={this.deletePoolLocation} deleteBbqLocation={this.deleteBbqLocation} deleteTennisLocation={this.deleteTennisLocation}/>
        </div>
      )
    } else {
      return (
        <div>
          null
        </div>
      )
    }
  }

}
