import React, { Component } from "react";
import Card from './card';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = { collapse: false};

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }
  toggleCollapse= () => {
    this.setState(prevState => ({collapse: !prevState.collapse}))
  }
  render= () => {
    return (
      <ul className="sidebar" onDoubleClick={this.toggleCollapse}>
      <div className="cards" style={{display: this.state.collapse && 'none'}}>
        <li>
            <span onClick={this.props.insertLyricsHandler} className="action">New</span>
        </li>
        {
        Object.keys(this.props.data.lyrics)
        .map((id)=>
          <Card key={id} id={id}
          updateLyricsHandler={this.props.updateLyricsHandler}
          removeLyricsHandler={this.props.removeLyricsHandler}
          closeLyricsHandler={this.props.closeLyricsHandler}
          lyric={this.props.data.lyrics[id]} 
          onclick={()=>this.props.onclick(id)} 
          selected={this.props.data.current===id} />)}
      </div>
      </ul>
    )
  }
}

export default Sidebar;
