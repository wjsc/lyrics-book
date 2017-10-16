import React, { Component } from "react";
import lyricsServerCalls from '../lyricsServerCalls';

class Card extends Component {
  constructor(props){
    super(props);
    this.state={
      selected: false,
      hover: false
    }
    this.updateLyric = this.updateLyric.bind(this);
    this.removeLyric = this.removeLyric.bind(this);
  }
  updateLyric(){
    return lyricsServerCalls.update({[this.props.id] : this.props.lyric});
  }
  removeLyric(){
    return lyricsServerCalls.remove(this.props.id);
  }
  changeHover(bool){
    this.props.selected && this.setState({hover: bool});
  }
  renderHover(){
    return (
        <span>
          <p className="action" onClick={this.updateLyric}>Save</p>
          <p className="action" onClick={this.removeLyric}>Delete</p>
        </span>
    )
  }
  renderNoHover() {
    return (
      <span>
        <p className="date">{this.props.lyric.date}</p>
      </span>
    )
  }
  render(){
    return (
      <div onMouseEnter={() => this.changeHover(true)} onMouseLeave={() => this.changeHover(false)}>
        <li onClick={this.props.onclick} className={this.props.selected?"card selected":"card"}>
          <span className="title">{this.props.lyric.title}</span>
          {this.state.hover ? this.renderHover() : this.renderNoHover()}
        </li>
      </div>
    )
  }
}

export default Card;
