
import React, { Component } from 'react'
import './Signup.css';
import firebase from 'firebase';
import {auth, storage} from '../Firebase'

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      emailId : null,
      name : null,
      userName : null,
      password : null
    }  
  }
newSignUp=()=>{
  firebase.auth().createUserWithEmailAndPassword(this.state.emailId, this.state.password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    let payload={
      "userId": user.uid,
      "userName":this.state.userName,
      "name": this.state.name,
      "profileImage":""
    }
    const requestOptions={
      method : "POST",
      headers : {'ContentType':'application/json'},
      body : JSON.stringify(payload)
    }
    fetch("http://localhost:8080/users", requestOptions)
    .then(response=>response.json())
    .then(data=>{
      localStorage.setItem("users",JSON.stringify(user));
      window.location.reload();
    })
    .catch(error=>{

    })
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
  render() {
    return (
      <div>
        <input type="text" onChange={(event)=>{this.state.emailId=event.currentTarget.value;}} placeholder='Mobile number or Email' className='loginpage_text'/>
        <input type="text" onChange={(event)=>{this.state.name=event.currentTarget.value;}} placeholder='Full Name' className='loginpage_text'/>
        <input type="text" onChange={(event)=>{this.state.userName=event.currentTarget.value;}} placeholder='User name' className='loginpage_text'/>
        <input type="password" onChange={(event)=>{this.state.password=event.currentTarget.value;}} placeholder="Password"className='loginpage_text'/>
        <button className='login_button' onClick={this.newSignUp}>Sign Up</button>
        
      </div>
    )
  }
}

