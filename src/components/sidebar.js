import React, { Component } from "react";
import Card from './card';

class Sidebar extends Component {
  render() {
    return (
      <ul className="sidebar">
        {/* <li className="app-name">lyrics-book</li>  */}
        {
        Object.keys(this.props.data.lyrics)
        .map((id)=>
          <Card key={id} id={id}
          lyric={this.props.data.lyrics[id]} 
          onclick={()=>this.props.onclick(id)} 
          selected={this.props.data.current===id} />)}
      </ul>
    )
  }
}

export default Sidebar;
