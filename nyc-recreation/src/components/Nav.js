import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component{
  render() {
      return (
        <div className="ui secondary menu">
          <NavLink activeClassName="active" className="item" to="/pools">Pools</NavLink>
          <NavLink activeClassName="active" className="item" to="/bbqs">BBQ areas</NavLink>
          <NavLink activeClassName="active" className="item" to="/tennis">Tennis Courts</NavLink>
          <NavLink activeClassName="active" className="item" to="/zoos">Zoos</NavLink>
        </div>
      )
    }
}

export default Nav
