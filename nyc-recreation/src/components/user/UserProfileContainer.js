import React from 'react'
import { loadUserPrefs } from '../../services/user'
import MyList from './MyList'

export default class UserProfileContainer extends React.Component {

  state = {
    user: ""
  }

  componentDidMount() {
    const thisUserInfo = loadUserPrefs().then((data) =>
    this.setState({
      user: data.user.username,
      zoos: data.prefs.zoos,
      bbqs: data.prefs.bbqs,
      pools: data.prefs.pools,
      tennis: data.prefs.tennis
      })
    )
  }

  // loadUserPrefs() {
  //    const myZoos = this.state.preferences.zoos.map((myZooPrefs) => {
  //     return <Z
  //   })
  //
  // }


  render() {

    if (this.state.user !== "") {
      // this.loadUserPrefs()
      return (
        <div>
          <h2>Welcome {this.state.user}!</h2>
          <MyList locations={this.state}/>
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
