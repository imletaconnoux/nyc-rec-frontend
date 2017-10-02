import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './LoginForm.js'

class UserContainer extends React.Component{

  constructor(){

    super()

    this.state = {
      username: "",
      password: "",
    }
}

  handleLoginSubmit = (user) => {
    this.setState({
      username: user.username,
      password: user.password
    })

  }

  render(){
    return(
      <div>
        <Route exact path="/login" render={(props) => <LoginForm onSubmit={this.handleLoginSubmit}  {...props}/> }/>
      </div>
    )
  }
}

export default UserContainer
