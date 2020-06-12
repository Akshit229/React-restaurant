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
import Login from './components/Login'
import Logout from './components/Logout'
import Protected, {} from './components/Protected'
// import NavBarMenu from './components/NavBarMenu'

function App() { 
  return (
    <div className="App">
      <Router>
        {/* <NavBarMenu/> */}
      
        {/* now creating the routes */}
        {/* <Route path="/list">
          <RestaurantList/>
        </Route> */}
        <Protected exact path="/list" component={RestaurantList}/>

        {/* <Route path="/create">
          <RestaurantCreate/>
        </Route> */}
        <Protected exact path="/create" component={RestaurantCreate}/>

        {/* <Route path="/search">
          <RestaurantSearch/>
        </Route> */}
        <Protected exact path="/search" component={RestaurantSearch}/>

        <Route path="/logout">
          <Logout/>
        </Route>
    

        {/* <Route path="/details">
          <RestaurantDetail/>
        </Route> */}
        <Protected exact path="/details" component={RestaurantDetail}/>
        
        {/* since props are sent from the Restaurnat update component we need to handle it explicitly*/}
        {/* <Route path="/update/:id"
          render = {props =>(
            //... signifies that all the props must pass
            <RestaurantUpdate {...props}/> 
          )}
        >          
        </Route>               */}
        <Protected exact path="/update/:id" component={RestaurantUpdate}/>
          
        {/* if exact is removed then home component is opened with every other component */}
        {/* <Route exact path="/">          
          <Home/>
        </Route>               */}

        <Protected exact path="/" component={Home}/>


        <Route path="/login"
        render = {props =>(
          //... signifies that all the props must pass
          <Login {...props}/> 
        )}
        >          
        </Route>              
        

      </Router>               
    </div>
  );
}

export default App;
