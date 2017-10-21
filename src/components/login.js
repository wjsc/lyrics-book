import React, { Component } from "react";
import { auth, provider } from '../firebase.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.setUser(user);
      } 
    });
  }
  logout() {
    auth.signOut()
      .then(() => {
        this.props.setUser(null);
      });
  }
  login() {
    auth.signInWithRedirect(provider);
  }
  render(){
    return (
      <div>
        {  this.props.user ? <button className="login_logout" onClick={this.logout}>Log Out</button> : <button className="login_logout" onClick={this.login}>Log In</button> }
      </div>
    )
  }
}

export default Login;