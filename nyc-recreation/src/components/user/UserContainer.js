import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './LoginForm.js'
import Authorize from '../Authorize'


class UserContainer extends React.Component{





  handleLoginSubmit = (user) => {
    this.props.onLogin(user)
  }

  render(){
    const AuthLoginForm = Authorize(LoginForm)
    console.log(this.state)
    return(
      <div>
        <Route exact path="/login" render={(props) => <AuthLoginForm onSubmit={this.handleLoginSubmit}  {...props}/> }/>
      </div>
    )
  }
}

export default UserContainer
