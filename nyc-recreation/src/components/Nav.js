import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component{




  render() {
      return (
        <div className="ui secondary menu">
          <NavLink activeClassName="" activeStyle={{ color: 'red' }} className="item" to="/">Home</NavLink>
          <NavLink activeClassName="active" className="item" to="/pools">Pools</NavLink>
          <NavLink activeClassName="active" className="item" to="/bbqs">BBQ areas</NavLink>
          <NavLink activeClassName="active" className="item" to="/tennis">Tennis Courts</NavLink>
          <NavLink activeClassName="active" className="item" to="/zoos">Zoos</NavLink>
          <NavLink activeClassName="active" className="right item" to="/">Log In/Sign Up</NavLink>
        </div>
      )
    }
}

export default Nav
