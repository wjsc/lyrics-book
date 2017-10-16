import React, { Component } from "react";

class Text extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    return (
      <textarea onChange={(e) => this.props.onchange(e.target.value)} className="text" value={this.props.data}>
      </textarea>
    )
  }
}

export default Text;
