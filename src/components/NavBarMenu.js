import React, { Component } from 'react'
import {Navbar,Nav,NavLink} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList, faSearch, faUser, faTrash, faHome, faPlusSquare, faAlignRight } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Route, 
    Link
  } from 'react-router-dom'; //this has been installed specifically by me  -- using npm install reeact-router-dom

class NavBarMenu extends Component {
    render() {
        return (
            <div>
                  <Navbar className = "nav-bar">
            <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
            <Nav className="mr-auto">
              {/* <Nav.Link href="#home" to="/">Home</Nav.Link>
              <Nav.Link href="#link" to="/list">List</Nav.Link>
              <Nav.Link href="#link" to="/create">Create</Nav.Link>
              <Nav.Link href="#link" to="/search">Search</Nav.Link>
              <Nav.Link href="#link" to="/update">Update</Nav.Link>               */}
              <Link to="/"><div className = "icon-wrapper"><FontAwesomeIcon icon = {faHome}/></div>Home</Link>
              <Link to="/list"><div className = "icon-wrapper"><FontAwesomeIcon icon = {faList}/></div>List</Link>
              <Link to="/create"><div className = "icon-wrapper"><FontAwesomeIcon icon = {faPlusSquare}/></div>Create</Link>
              <Link to="/search"><div className = "icon-wrapper"><FontAwesomeIcon icon = {faSearch}/></div>Search</Link>             
              {
                    localStorage.getItem('login') ?
                        <Link to="/logout"><div className = "icon-wrapper"><FontAwesomeIcon icon = {faUser}/></div>Logout</Link>
                        : <Link to="/login"><div className = "icon-wrapper"><FontAwesomeIcon icon = {faUser}/></div>Login</Link>

              }
              {/* <Link to="/update">Update</Link> */}
            </Nav>           
          </Navbar>      
        {/* <ul>
          <li><Link to="/">Home</Link></li>         
          <li><Link to="/list">List</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/details">Details</Link></li>          
          <li><Link to="/update">Update</Link></li>          
        </ul> */}
            </div>
        )
    }
}

export default NavBarMenu
