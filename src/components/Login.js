import React, { Component } from 'react'
import NavBarMenu from './NavBarMenu'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             password : ''

        }
    }

    login(){
        // console.warn(this.state) 
        fetch("http://localhost:3000/login?q=" + this.state.name).then((result) => {
            result.json().then((response) => {                
                console.warn(response)
                if(response.length > 0){
                    // console.warn()
                    localStorage.setItem('login', JSON.stringify(response))
                    this.props.history.push('list')

                }
                else{
                    alert("Please check user name and password")
                }
            })            
        })
    }
    
    render() {
        return (
            <div>
                <NavBarMenu/>
                <input placeholder = "Enter name here" type = "text" name="user" onChange={(event) => this.setState({name:event.target.value})}/><br/><br/>
                <input placeholder = "Enter password here" type = "password" name="password" onChange={(event) => this.setState({password:event.target.value})}/><br/><br/>
                <button onClick = {()=>{this.login()}}>
                    Login
                </button>
            </div>
        )
    }
}

export default Login
