import React, { Component } from "react";
import Card from './card';
import lyricsServerCalls from '../lyricsServerCalls';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.insertLyric = this.insertLyric.bind(this);
  }
  insertLyric(){
    return lyricsServerCalls.insert({
      date: new Date().toJSON,
      title: 'Untitled'
    })
  }
  render() {
    return (
      <ul className="sidebar">
      {/* <li className="app-name">lyrics-book</li>  */}
        <li><span onClick={this.insertLyric} className="action">New</span></li>
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
