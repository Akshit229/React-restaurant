import React, { Component } from 'react'
import NavBarMenu from './NavBarMenu'


class RestaurantUpdate extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:null,
            email:null,
            address:null,
            rating:null,
            id:null
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/restaurant/" + this.props.match.params.id).then(
            (response) => {
                response.json().then(
                    (result) => {
                        console.warn(result)
                        // this.setState({list : result})
                        this.setState(
                            {
                                name : result.name,
                                email: result.email,
                                address: result.address,
                                rating: result.rating,
                                id : result.id
                            }
                        )
                    }
                )
            }
        )
    }

    update(){
        fetch("http://localhost:3000/restaurant/" + this.state.id, {
            method:"PUT",
            headers:{
                'Content-Type' :'application/json'
            },
            body : JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response) => alert("Restaurant has been updated!"))
        })
    }

    render() {
        console.warn(this.props.match.params.id)
        console.log(this.state)
        console.log("inside the render function of RestaurantUpdate.js");
        return (
            <div>
                <NavBarMenu/>
                <h1>Restaurant Update</h1>
                <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder = "Restaurant Name"
                    value = {this.state.name ? this.state.name : "" }/><br/><br/>
                    <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder = "Restaurant Email"
                    value = {this.state.email ? this.state.email : "" }/><br/><br/>
                    <input onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder = "Restaurant Rating"
                    value = {this.state.rating ? this.state.rating : "" }/><br/><br/>
                    <input onChange={(event)=>{this.setState({address:event.target.value})}} placeholder = "Restaurant Address"
                    value = {this.state.address ? this.state.address : "" }
                    /><br/><br/>                    
                    <button onClick = {() => {this.update()}}>
                        Update Restaurant
                    </button>
                </div>
            </div>
        )
    }
}

export default RestaurantUpdate
