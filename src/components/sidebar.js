import React, { Component } from "react";
import Card from './card';
import lyricsServerCalls from '../lyricsServerCalls';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = { collapse: false};

    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.insertLyric = this.insertLyric.bind(this);
  }
  insertLyric = () => {
    return lyricsServerCalls.insert({
      date: new Date().toJSON,
      title: 'Untitled'
    })
  }
  toggleCollapse= () => {
    this.setState(prevState => ({collapse: !prevState.collapse}))
  }
  render= () => {
    return (
      <ul className="sidebar" onDoubleClick={this.toggleCollapse}>
      <div className="cards" style={{display: this.state.collapse && 'none'}}>
        <li>
            <span onClick={this.insertLyric} className="action">New</span>
        </li>
        {
        Object.keys(this.props.data.lyrics)
        .map((id)=>
          <Card key={id} id={id}
          lyric={this.props.data.lyrics[id]} 
          onclick={()=>this.props.onclick(id)} 
          selected={this.props.data.current===id} />)}
      </div>
      </ul>
    )
  }
}

export default Sidebar;
