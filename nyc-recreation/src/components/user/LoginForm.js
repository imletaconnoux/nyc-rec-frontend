import React from 'react'

class LoginForm extends React.Component{

  constructor(){
    super()

    this.state = {
      usernameInput: "",
      passwordInput: ""
    }
  }

  handleSubmit = () => {
    if (this.state.usernameInput !== "" && this.state.passwordInput !== ""){
      const user = { username: this.state.usernameInput, password: this.state.passwordInput }
      this.props.handleLoginSubmit(user)
    }
  }

handleUsernameChange = (event) => {
  this.setState({
    usernameInput: event.target.value
  })
}

handlePasswordChange = (event) => {
  this.setState({
    passwordInput: event.target.value
  })
}


  render(){
    return(
      <div>
       <h3>Welcome to NYC Recreation! Log in or create a new account below</h3>
        <form onSubmit={this.handleSubmit} class="ui form">
          <div class ="center fields">
            <div class="six wide field">
              <input type="text" value={this.state.usernameInput} onChange={this.handleUsernameChange} placeholder="username" />
            </div>
            <div class="six wide field">
             <input type="text" value={this.state.passwordInput} onChange={this.handlePasswordChange} placeholder="username"/>
            </div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    )

  }
}

export default LoginForm
