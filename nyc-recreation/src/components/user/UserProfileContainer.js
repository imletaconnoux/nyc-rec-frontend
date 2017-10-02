import React from 'react'
import { loadUserPrefs } from '../../services/user'

export default class UserProfileContainer extends React.Component {

  state = {
    user: "",
    preferences: null
  }

  componentDidMount() {
    const thisUserInfo = loadUserPrefs().then((data) =>
    this.setState({
      user: data.user.username,
      preferences: data.prefs
      })
    )
  }


  render() {
    if (this.state.user !== "") {
      console.log(this.state.preferences)
      return (
        <div>
          {this.state.user}
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
