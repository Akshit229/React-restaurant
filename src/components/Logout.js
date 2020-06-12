import React from 'react'

import {
    Redirect
  } from 'react-router-dom'; //this has been installed specifically by me  -- using npm install reeact-router-dom

function Logout() {
    localStorage.clear();

    return <Redirect to="/login" /> 
}

export default Logout
