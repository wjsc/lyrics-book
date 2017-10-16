import React, { Component } from "react";

class Title extends Component{

  render(){
    return (
      <input type="text" onChange={(e) => this.props.onchange(e.target.value)} className="title" value={this.props.data}/>
    )
  }
}

export default Title;
