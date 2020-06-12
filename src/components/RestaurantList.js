import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from './NavBarMenu'

// this is the id that i used to load icons in my application
// https://fontawesome.com/icons/trash?style=solid

import { 
    Link
  } from 'react-router-dom'; //this has been installed specifically by me  -- using npm install reeact-router-dom

class RestaurantList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: null,
        }
    }

    componentDidMount() {
        //this is an inbuilt function 
        console.log("in component did mount")
        this.getData()
    }

    getData(){
        fetch("http://localhost:3000/restaurant").then(
            (response) => {
                response.json().then((result) => {                    
                    this.setState({ list: result })                    
                }
                )
            }
        )
    }


    delete(id){
        fetch("http://localhost:3000/restaurant/" + id, {
            method : 'DELETE'
            // headers:{
            //     'Content-Type' :'application/json'
            // },
            // body : JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response) => alert("Restaurant deleted!"))
            this.getData()
        })
    }

    render() {
        //new render function
        console.log(this.state)
        return (
            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <NavBarMenu/>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>                                     
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Rating</th>                                     
                                        <th>Email</th>                                     
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>                                
                                {                                        
                                    this.state.list.map(
                                        (item,index) =>(                                                                                          
                                            <tr key = {item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.email}</td>
                                                <td className = "operations-wrapper"><Link to = {'/update/' + item.id}><FontAwesomeIcon icon = {faEdit} color = "black"/></Link>
                                                <span onClick = {() => this.delete(item.id)}><FontAwesomeIcon icon = {faTrash} color = "black"/></span>
                                                </td>   
                                                {/* we dont need route here since it has already 
                                                been implemented in app.js and since this component
                                                is rendered there, gradually it it wil find itself a route */}
                                            </tr>
                                        )
                                    )
                                }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please wait...</p>
                }
            </div>
        )
    }


    /* OLD RENDER FUNCTION */

    // render() {
    //     console.log(this.state)
    //     return (
    //         <div>
    //             <h1>Restaurant List</h1>                
    //             {
    //                 this.state.list? 
    //                 <div> 
    //                     {
    //                         this.state.list.map(
    //                             (item, i) => 
    //                             (                                
    //                                 <div className = "list-wrapper" key = {i}>
    //                                     <span>{item.name}</span>
    //                                     <span>{item.address}</span>
    //                                     <span>{item.rating}</span>
    //                                     <span>{item.email}</span>                                    
    //                                 </div>
    //                             )

    //                         )
    //                     }
    //                 </div>
    //                 : <p>Please wait...</p>

    //             }
    //         </div>
    //     )
    // }
}

export default RestaurantList
