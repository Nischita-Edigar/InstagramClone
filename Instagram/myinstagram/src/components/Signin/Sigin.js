import React, { Component } from 'react'
import '../LoginPage/LoginPage.css'
import firebase from 'firebase';
import {auth, storage} from '../Firebase'


export default class Sigin extends Component {
  constructor(props) {
    super(props);
    this.state={
      emailId : null,
      password : null
    } 
  }
  login=()=>{
    // localStorage.setItem("users", "admin");
    // window.location.reload();
    firebase.auth().signInWithEmailAndPassword(this.state.emailId, this.state.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem("users",user);
    window.location.reload();
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }
  render() {
    return (
      <div>
        <input type="text" onChange={(event)=>{this.state.emailId=event.currentTarget.value}} placeholder='Phone number, Username, or email' className='loginpage_text'/>
        <input type="password" onChange={(event)=>{this.state.password=event.currentTarget.value}}  placeholder="Password"className='loginpage_text'/>
        <button className='login_button' onClick={this.login}>Login In</button>
        
      </div>
    )
  }
}
