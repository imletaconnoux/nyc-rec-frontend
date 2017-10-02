import React from 'react'
import { loadUserPrefs } from '../../services/user'
import MyBbqList from './MyBbqList'

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
          {this.state.user}
          <MyBbqList user={this.state.user} bbqList={this.state.bbqs}/>
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
