import React from 'react'

class LoginForm extends React.Component{

  constructor(){
    super()

    this.state = {
      usernameInput: "",
      passwordInput: "",
      newUser: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.usernameInput !== "" && this.state.passwordInput !== ""){
      const user = { username: this.state.usernameInput, password: this.state.passwordInput }
      this.props.onSubmit(user)
    }
    this.setState({
      usernameInput: "",
      passwordInput: ""
    })
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
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className ="center fields">
            <div className="six wide field">
              <input type="text" value={this.state.usernameInput} onChange={this.handleUsernameChange} placeholder="username" />
            </div>
            <div className="six wide field">
             <input type="password" value={this.state.passwordInput} onChange={this.handlePasswordChange} placeholder="password"/>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="new"/>
                New User
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="existing"/>
                Existing
              </label>
            </div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    )

  }
}

export default LoginForm
