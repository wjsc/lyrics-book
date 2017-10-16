import React, { Component } from "react";
import Toolbar from './toolbar';
import Title from './title';
import Text from './text';

class Viewer extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    return (
      <div className="viewer">
        <Toolbar />
        <Title onchange={this.props.onchangeTitle} data={this.props.data.title}/>
        <Text onchange={this.props.onchangeText} data={this.props.data.text}/>
      </div>
    )
  }
}

export default Viewer;
