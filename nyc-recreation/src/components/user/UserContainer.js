import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './LoginForm.js'
import Authorize from '../Authorize'
import UserProfileContainer from './UserProfileContainer.js'


class UserContainer extends React.Component{

  handleLoginSubmit = (user) => {
    this.props.onLogin(user)
  }

  render(){
    const AuthLoginForm = Authorize(LoginForm)
    return(
      <div>
        <Route exact path="/login" render={(props) => <AuthLoginForm onSubmit={this.handleLoginSubmit}  {...props}/> }/>
        <Route exact path="/users/me" render={(props) => <UserProfileContainer user={this.props.user} {...props}/>}/>
      </div>
    )
  }
}

export default UserContainer
