import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link, Switch,Route} from 'react-router-dom'
import '../styles/login.css'
import Button from '@material-ui/core/Button';

export class customer extends Component {
    userdata;
    constructor(props){
        super(props);
        let loggedIn=true
        let detaildone=false
        const token=localStorage.getItem("token")
        this.repFName=this.repFName.bind(this);
        this.repLName=this.repLName.bind(this);
        this.repEmail=this.repEmail.bind(this);
        this.repNumber=this.repNumber.bind(this);
        this.repAdress=this.repAdress.bind(this);
        this.  submitForm=this.  submitForm.bind(this);
        this.state={
            FName:"",
            LName:"",
            Email:"",
            MobileNo:"",
            Adress:"",
            loggedIn,
            detaildone
        }
        if(token==null){
            loggedIn=false
        }
    }
      repAdress(e){
        this.setState({Adress:e.target.value})
    }
      repFName(e){
        this.setState({FName:e.target.value})
    }
      repLName(e){
        this.setState({LName:e.target.value})
    }
      repEmail(e){
        this.setState({Email:e.target.value})
    }
      repNumber(e){
        this.setState({MobileNo:e.target.value})
    }
    componentDidMount(){
        this.userdata=JSON.parse(localStorage.getItem('currUser'));
        const token=localStorage.getItem("token")
        let loggedIn=true
        let detaildone=false
        if(token==null){
            loggedIn=false
        }
        if (localStorage.getItem('currUser')){
            this.setState({
                FName:this.userdata.FName,
                LName:this.userdata.LName,
                Email:this.userdata.Email,
                MobileNo:this.userdata.MobileNo,
                Adress:this.userdata.Adress,
                loggedIn,
                detaildone   
            })
        }else{
            this.setState({
                FName:"",
                LName:"",
                Email:"",
                MobileNo:"",
                Adress:"",
                loggedIn,
                detaildone
            })
        }
    }
    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('currUser',JSON.stringify(nextState));
    }
      submitForm(e){
        e.preventDefault();
        const{FName,LName,EmailMobileNo,Adress,loggedIn,detaildone}=this.state
        if(FName && LName){
            localStorage.setItem("token2","qwertyuiopa")
            this.setState({
                detaildone:true
            })
        }
        }
    render() {
        if(this.state.detaildone){
            return<Redirect to="/webcam"/>
        }
        return (
            <div className='backgnd'>
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="First Name" name="FName" value={this.state.FName} required onChange={this.  repFName}/><br/>
                    <input type="text" placeholder="Last Name" name="LName" value={this.state.LName}required onChange={this.  repLName}/><br/>
                    <input type="email" placeholder="Email Id" name="Email"value={this.state.Email} required onChange={this.  repEmail}/><br/>
                    <input type="number"placeholder="Mobile No."  required name="Number" value={this.state.Number} required onChange={this.  repNumber }/><br/>
                    <input type="text" placeholder="Adress" name="Adress" value={this.state.Adress} required onChange={this.  repAdress}/><br/>
                    <p>Submitting it will leads to Selfie Screen page.</p>
                    <input type="submit"/>
                </form>
                <Link to="/logout">LogOut</Link>
            </div>
        )
    }
}
export default customer