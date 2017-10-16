import React, { Component } from "react";
import Card from './card';


class Sidebar extends Component {
  render() {
    return (
      <ul className="sidebar">
        <li className="app-name">lyrics-book</li> 
        {
        Object.keys(this.props.data.lyrics)
        .map((key)=>
          <Card key={key} 
          data={this.props.data.lyrics[key]} 
          onclick={()=>this.props.onclick(key)} 
          selected={this.props.data.current===key} />)}
      </ul>
    )
  }
}

export default Sidebar;
