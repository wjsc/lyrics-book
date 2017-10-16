import React, { Component } from "react";

class Card extends Component {
  constructor(props){
    super(props);
    this.state={
      selected: false
    }
  }
  render() {
    return (
      <li onClick={this.props.onclick} className={this.props.selected?"card selected":"card"}>
        <span className="title">{this.props.data.title}</span>
        <span className="date">{this.props.data.date}</span>
      </li>
    )
  }
}

export default Card;
