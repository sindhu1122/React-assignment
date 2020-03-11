import React, { Component } from 'react'
// import {Redirect} from 'react-router-dom'
 import Input from '../input'
class SignUp extends Component
{
   
    submit=false
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
if(!localStorage.getItem(this.state.username))
{
    localStorage.setItem(this.state.username,JSON.stringify(this.state))
    }
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
                
                <input type="text" placeholder="username" onChange={(event)=>this.HandleChange(event)}/>
                <input type="password" placeholder="password" onChange={(event)=>this.HandlePassword(event)}/>
                <button onClick={this.HandleSubmit}>signup</button>
                {this.state.submit?
                 <Input username={this.state.username}/>:null}
            </div>
        )
    }
}

export default SignUp;