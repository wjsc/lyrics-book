import React, { Component } from "react";
import "./App.css";
const lyricsEndpoint="http://localhost:3000/lyrics";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      lyrics: []
    };

    fetch(lyricsEndpoint).then(res => res.json()).then(obj => this.setState({lyrics: obj}))
  }
  saveToDatabase = (id, lyric) => {
    return fetch(lyricsEndpoint+"/"+id, { 
      method: "PUT", 
      headers: new Headers({"Content-Type":"application/json"}), 
      body: JSON.stringify(lyric)
    });
  }
  changeCurrent = (current)=>{
    if(this.state.current) this.saveToDatabase(this.state.current, this.state.lyrics[this.state.current]);
    this.setState({current});
  }
  changeText = (text) => {
    this.setState((prevState)=>{
      console.log("TODO: Update only current key!");
      let cloned=Object.assign({},prevState.lyrics);
      cloned[prevState.current].text=text;
      cloned[prevState.current].date=new Date().toJSON();
      return { lyrics: cloned }
    })
  }
  changeTitle = (title) => {
    this.setState((prevState)=>{
      console.log("TODO: Update only current key!");
      let cloned=Object.assign({},prevState.lyrics);
      cloned[prevState.current].title=title;
      return { lyrics: cloned }
    })
  }
  render() {
    return (
      <div className="app">
        <Sidebar data={this.state} onclick={this.changeCurrent}/>
        { this.state.lyrics[this.state.current]?
          <Viewer  onchangeTitle={this.changeTitle} onchangeText={this.changeText} data={this.state.lyrics[this.state.current]}/>:""}
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <ul className="sidebar">
        <li className="app-name">lyrics-book</li> 
        {
        Object.keys(this.props.data.lyrics)
        .map((key)=>
          <Card key={key} 
          data={this.props.data.lyrics[key]} 
          onclick={()=>this.props.onclick(key)} 
          selected={this.props.data.current===key} />)}
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
      <li onClick={this.props.onclick} className={this.props.selected?"card selected":"card"}>
        <span className="title">{this.props.data.title}</span>
        <span className="date">{this.props.data.date}</span>
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
      <div className="viewer">
        <Toolbar />
        <Title onchange={this.props.onchangeTitle} data={this.props.data.title}/>
        <Text onchange={this.props.onchangeText} data={this.props.data.text}/>
      </div>
    )
  }
}

class Toolbar extends Component {
  render(){
    return (
      <div className="toolbar">


      </div>
    )
  }
}

class Title extends Component{

  render(){
    return (
      <input type="text" onChange={(e) => this.props.onchange(e.target.value)} className="title" value={this.props.data}/>
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
      <textarea onChange={(e) => this.props.onchange(e.target.value)} className="text" value={this.props.data}>
      </textarea>
    )
  }
}

export default App;
