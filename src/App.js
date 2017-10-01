import React, { Component } from 'react';
import './App.css';
import mockedLyrics from './mocks.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      lyrics: mockedLyrics
    };
  }
  changeCurrent = (current)=>{
    this.setState({
      current
    })
  }
  changeText = (text) =>{
    this.setState((prevState)=>{
      let cloned=[...prevState.lyrics];
      cloned[prevState.current].text=text;
      return { lyrics: cloned }
    })
  }
  render() {
    return (
      <div className="app">
        <Sidebar data={this.state} onclick={this.changeCurrent}/>
        { this.state.lyrics[this.state.current]?
          <Viewer  onchange={this.changeText} data={this.state.lyrics[this.state.current]}/>:''}
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <ul className='sidebar'>
        <li className="app-name">lyrics-book</li> 
        {this.props.data.lyrics
        .map((l, index)=>
          <Card key={index} 
          data={l} 
          onclick={()=>this.props.onclick(index)} 
          selected={this.props.data.current===index} />)}
      </ul>
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
      <li onClick={this.props.onclick} className={this.props.selected?'card selected':'card'}>
        <span className='title'>{this.props.data.title}</span>
        <span className='saved'>{this.props.data.saved}</span>
      </li>
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
        <Toolbar />
        <h2 className='title'>{this.props.data.title}</h2>
        <Text onchange={this.props.onchange} data={this.props.data.text}/>
      </div>
    )
  }
}

class Toolbar extends Component {
  render(){
    return (
      <div className='toolbar'>


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
      <textarea onChange={(e) => this.props.onchange(e.target.value)} className='text' value={this.props.data}>
      </textarea>
    )
  }
}

export default App;
