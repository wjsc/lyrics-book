import React, { Component } from "react";

class Card extends Component {
  constructor(props){
    super(props);
    this.state={
      selected: false,
      hover: false
    }
    
  }
  changeHover(bool){
    this.props.selected && this.setState({hover: bool});
  }
  renderHover(){
    return (
        <div className="actions">
          <span className="action" onClick={ev => ev.stopPropagation() & this.props.updateLyricsHandler(this.props.id, this.props.lyric)}>Save</span>
          <span className="action" onClick={ev => ev.stopPropagation() & this.props.removeLyricsHandler(this.props.id)}>Delete</span>
          <span className="action" onClick={ev => ev.stopPropagation() & this.props.closeLyricsHandler()}>Close</span>
        </div>
    )
  }
  renderNoHover() {
    return (
      <div>
        <span className="date">{this.props.lyric.date}</span>
      </div>
    )
  }
  render(){
    return (
      <div onDoubleClick={ev => ev.stopPropagation()} onMouseEnter={() => this.changeHover(true)} onMouseLeave={() => this.changeHover(false)}>
        <li onClick={this.props.onclick} className={this.props.selected?"card selected":"card"}>
          <span className="title">{this.props.lyric.title}</span>
          {this.state.hover ? this.renderHover() : this.renderNoHover()}
        </li>
      </div>
    )
  }
}

export default Card;
