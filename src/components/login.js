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
  renderLogin(){
    return (
      <div className="login_container">
        <h1>A Book Full of Lyrics</h1>
        <button className="login" onClick={this.login}>Login</button>
      </div>
    );
  }
  renderLogout(){
    return <button className="logout" onClick={this.logout}>Logout</button>;
  }
  render(){
    return this.props.user ?  this.renderLogout() : this.renderLogin();
  }
}

export default Login;