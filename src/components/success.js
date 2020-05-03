import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'


export default class Success extends Component {
    constructor(props){
        super(props)
        this.state = {
             token :localStorage.getItem("token")
        };
        
    }
    render() {
        const {token}= this.state;
      /*  if(token == null)
        {
            return(
                <Redirect to="/"/>
            );
        } */
        return (
            <div>
                <h1>You have successfully submitted your details </h1>
                <Link to="/">New User</Link>
            </div>
        )
    }
}