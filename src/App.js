import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom'; //this has been installed specifically by me  -- using npm install reeact-router-dom

import Home from './components/Home'
import RestaurantUpdate from './components/RestaurantUpdate'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantList from './components/RestaurantList'
import RestaurantDetail from './components/RestaurantDetail'
import RestaurantCreate from './components/RestaurantCreate'
import {Navbar,Nav,NavLink} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList, faSearch, faEdit, faTrash, faHome, faPlusSquare } from '@fortawesome/free-solid-svg-icons'


function App() {
 
  return (
    <div className="App">
      <Router>
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
        {/* now creating the routes */}
        <Route path="/list">
          <RestaurantList/>
        </Route>

        <Route path="/create">
          <RestaurantCreate/>
        </Route>

        <Route path="/search">
          <RestaurantSearch/>
        </Route>

        <Route path="/details">
          <RestaurantDetail/>
        </Route>
        
        {/* since props are sent from the Restaurnat update component we need to handle it explicitly*/}
        <Route path="/update/:id"
        render = {props =>(
          //... signifies that all the props has been passed
          <RestaurantUpdate {...props}/> 
        )}
        >          
        </Route>              

        <Route exact path="/">
          {/* if exact is removed then home component is opened with every other component */}
          <Home/>
        </Route>              

      </Router>               
    </div>
  );
}

export default App;
