import React, { Component } from 'react'
import {Table, Form, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from './NavBarMenu'
import { 
    Link
  } from 'react-router-dom'; //this has been installed specifically by me  -- using npm install reeact-router-dom

export class RestaurantSearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            lastSearch : "",
            searchData : null,
            isError : false
        }
    }

    search(key){
        console.warn(key)
        fetch("http://localhost:3000/restaurant?q=" + key).then((result) => {
            result.json().then((response) => {                
                this.setState({lastSearch:key})
                if(response.length > 0){
                    this.setState({searchData:response})
                    this.setState({isError:false})
                }
                else{
                    this.setState({isError:true})
                    this.setState({searchData:null})
                }
            })            
        })

    }

    // getData(){
    //     fetch("http://localhost:3000/restaurant").then(
    //         (response) => {
    //             response.json().then((result) => {                    
    //                 this.setState({ list: result })                    
    //             }
    //             )
    //         }
    //     )
    // }


    delete(id){
        fetch("http://localhost:3000/restaurant/" + id, {
            method : 'DELETE'
            // headers:{
            //     'Content-Type' :'application/json'
            // },
            // body : JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response) => alert("Restaurant deleted!"))
            this.search(this.state.lastSearch)
        })
    }


    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>Restaurant Search</h1>
                {/* <input type="text" onChange = {(event) => this.search(event.target.value)}/> */}                
                <Container>
                    {/* container automatically sets space on either side of the page */}
                <Form.Control type="text" placeholder="Search here.." onChange = {(event) => this.search(event.target.value)}/>
                    {
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>                                     
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Rating</th>                                     
                                    <th>Email</th>                                                                         
                                    <th>operations</th>                                                                         
                                </tr>
                            </thead>
                            
                            {                            
                                this.state.searchData ?                            
                                    
                                <tbody>
                                {                                
                                        this.state.searchData.map((item , index) => {
                                                return(
                                                    <tr key = {item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.address}</td>
                                                        <td>{item.rating}</td>
                                                        <td>{item.email}</td>
                                                        <td className = "operations-wrapper"><Link to = {'/update/' + item.id}><FontAwesomeIcon icon = {faEdit} color = "black"/></Link>
                                                            <span onClick = {() => this.delete(item.id)}><FontAwesomeIcon icon = {faTrash} color = "black"/></span>
                                                        </td>   
                                                    </tr>
                                                )                                        
                                            } 
                                        )
                                }                                                            
                                </tbody>                
                                    
                                : this.state.isError ? null : <tbody><tr><td  colSpan="100%">Please search to proceed</td></tr></tbody>
                            }
                        </Table>
                    }
                    {
                        this.state.isError ? <p>Error! could not find the searched item</p> : null
                    }
                </Container>
            </div>
        )
    }
}

export default RestaurantSearch
