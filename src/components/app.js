import React, { Component } from "react";
import Sidebar from './sidebar';
import Viewer from './viewer';
import lyricsServerCalls from '../lyricsServerCalls';

class App extends Component {
  constructor(props){
    super(props);
    this.state={ lyrics: [] };
    this.updateLyrics = this.updateLyrics.bind(this);
    this.updateLyrics();
  }
  updateLyrics = () => {
    return lyricsServerCalls.get().then(obj => this.setState({lyrics: obj}))
  }
  changeCurrent = (current)=>{
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
        <Sidebar updateLyricsHandler={this.updateLyrics} data={this.state} onclick={this.changeCurrent}/>
        { this.state.lyrics[this.state.current]?
          <Viewer  onchangeTitle={this.changeTitle} onchangeText={this.changeText} data={this.state.lyrics[this.state.current]}/>:""}
      </div>
    );
  }
}

export default App;
