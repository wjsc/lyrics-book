import React, { Component } from 'react';
import './App.css';
import mockedLyrics from './mocks.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      current: 2,
      lyrics: mockedLyrics
    };
  }
  changeCurrent = (current)=>{
    this.setState({
      current
    })
  }
  render() {
    return (
      <div className="app">
        <Sidebar data={this.state} onclick={this.changeCurrent}/>
        <Viewer data={this.state.lyrics[this.state.current].text}/>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        {this.props.data.lyrics
        .map((l, index)=>
          <Card key={index} 
          data={l} 
          onclick={()=>this.props.onclick(index)} 
          selected={this.props.data.current===index} />)}
      </div>
    )
  }
}

class Card extends Component {
  constructor(props){
    super(props);
    this.state={
      selected: false
    }
  }
  render() {
    return (
      <div onClick={this.props.onclick} className={this.props.selected?'card selected':'card'}>
        <div className='name'>{this.props.data.name}</div>
        <div className='saved'>{this.props.data.saved}</div>
      </div>
    )
  }
}

class Viewer extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    return (
      <div className='viewer'>
        <Text data={this.props.data}/>
      </div>
    )
  }
}

class Text extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    return (
      <div>
        {this.props.data}
      </div>
    )
  }
}

export default App;
