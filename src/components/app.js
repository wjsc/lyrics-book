import React, { Component } from "react";
import Sidebar from './sidebar';
import Viewer from './viewer';
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

export default App;
