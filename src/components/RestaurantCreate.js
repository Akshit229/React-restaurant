import React, { Component } from 'react'



class RestaurantCreate extends Component {

    constructor(props){
        super(props);
        this.state ={
            name:null,
            email:null,
            address:null,
            rating:null
        }
    }


    createRestaurant(){
        fetch("http://localhost:3000/restaurant", {
            method:"POST",
            headers:{
                'Content-Type' :'application/json'
            },
            body : JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response) => alert("Restaurant added!"))
        })
    }

    render() {
        return (
            <div>
                <h1>Restaurant Create</h1>
                <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder = "Restaurant Name"/><br/><br/>
                    <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder = "Restaurant Email"/><br/><br/>
                    <input onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder = "Restaurant Rating"/><br/><br/>
                    <input onChange={(event)=>{this.setState({address:event.target.value})}} placeholder = "Restaurant Address"/><br/><br/>                    
                    <button onClick = {() => {this.createRestaurant()}}>
                        Add Restaurant
                    </button>
                </div>
            </div>
        )
    }
}

export default RestaurantCreate
