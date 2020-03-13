import React, { Component } from 'react'
// import {Redirect} from 'react-router-dom'
 import Input from '../input'
 import './Signup.css'
class SignUp extends Component
{
   
    log=false
    com=true
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            today:[{
                date:[],tasks:[],endTime:[],
            startTime:[]}],
            submit:false
        }
        this.HandleChange = this.HandleChange.bind(this);
        this.HandlePassword = this.HandlePassword.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
      } 
    //   componentDidMount() {
    //     this.documentData = JSON.parse(localStorage.getItem('userdetails'));
     
    //             console.log( this.documentData.username)
            
       
        
    // }
    HandleSubmit()
    {
        
        // e.preventDefault()
        // localStorage.setItem('userdetails',JSON.stringify(this.state));
        // console.log(localStorage.getItem('userdetails'))
     
    //     else{
    //         var inputPassword = localStorage.getItem("password");
    //     if (this.state.username != "undefined" || this.state.username != "null" || this.state.password != "undefined" || this.state.password !="null")
    //     {
    //         <Redirect to="/"/>
    //     }
    // }
    // this.documentData = JSON.parse(localStorage.getItem('userdetails'));
     
    //             console.log( this.documentData.username)
//     if(user )
//      var oldItems = JSON.parse(localStorage.getItem('userdetails'))||[];
     
//      console.log(oldItems)

// var newItem = {
//     'username': this.state.username,
//     'password': this.state.password
    
// };

// oldItems.push(newItem);

//  localStorage.setItem('userdetails', JSON.stringify(oldItems));
// // this.documentData = JSON.parse(localStorage.getItem('userdetails'));
     
// //              console.log( this.documentData)
    this.setState({submit:true});     
    if(this.state.username=="" || this.state.password=="")
    {
        alert("Enter Credentials")
        this.setState({submit:false})
        //this.log=!this.log
        this.com=false

    }

else if(!localStorage.getItem(this.state.username) && this.com==true)
{
    localStorage.setItem(this.state.username,JSON.stringify(this.state))
}
else{
    let user=JSON.parse(localStorage.getItem(this.state.username))
    if(this.state.password!==user.password)
    {
            alert("Wrong Password!Please give correct credentials")
            this.setState({submit:false})
    }
    else
        this.log=!this.log
    }
    this.setState({username:this.state.username})
}
    HandleChange(event)
    {
        this.setState({username:event.target.value})
    }
    HandlePassword(event)
    {
        this.setState({password:event.target.value})
    }
    render()
    {
        return(
            <div>
                <h1 className={this.log?"hide":"show"}>SignIn</h1>
                <div className='show'> <button className={this.log?"show":"hide"} onClick={()=>{this.log=!this.log;this.setState({username:this.state.username,submit:false})}}>Signout</button></div>
                 <div className={this.log?"hide":"show"}>
                <input id="ip1" type="text" placeholder="username" onChange={(event)=>this.HandleChange(event)}/><br></br>
                <input id="ip2" type="password" placeholder="password" onChange={(event)=>this.HandlePassword(event)}/><br></br>
                <button onClick={this.HandleSubmit}>signup</button>
                </div>
                {this.state.submit?
                 <Input username={this.state.username}/>:null}
                
            </div>
        )
    }
}

export default SignUp;