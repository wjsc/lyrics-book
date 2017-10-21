import React, { Component } from "react";
import Sidebar from './sidebar';
import Viewer from './viewer';
import Login from './login';
import lyricsServerCalls from '../lyricsServerCalls';

class App extends Component {
  constructor(props){
    super(props);
    this.state={ 
      user: null,  
      lyrics: [] 
    };
    this.setUser = this.setUser.bind(this);
    this.getLyrics = this.getLyrics.bind(this);
    this.updateLyric = this.updateLyric.bind(this);
    this.removeLyric = this.removeLyric.bind(this);
  }
  setUser = (user) => {
    this.setState({user: user});
    user && lyricsServerCalls.setUid(user.uid);
    this.getLyrics();
  }
  getLyrics = () => {
    return this.state.user && lyricsServerCalls.get().then(obj => this.setState({lyrics: obj}));
  }
  addLyric = (lyric) => {
    this.setState(prevState => ({lyrics: [...prevState.lyrics, lyric]}))
  }
  insertLyric = () => {
    return lyricsServerCalls.insert({
      date: new Date().toJSON,
      title: 'Untitled',
      text: ''
    }) && this.getLyrics()
  }
  updateLyric(id, lyric){
    return lyricsServerCalls.update({[id] : lyric});
  }
  removeLyric(id){
    return lyricsServerCalls.remove(id) && this.getLyrics();
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
          <Login setUser={this.setUser} user={this.state.user}/>
          <div className="sidebar_viewer">
            { this.state.user && <Sidebar insertLyricsHandler={this.insertLyric} updateLyricsHandler={this.updateLyric} removeLyricsHandler={this.removeLyric} data={this.state} onclick={this.changeCurrent}/> } 
            { this.state.user && this.state.lyrics[this.state.current] && <Viewer  onchangeTitle={this.changeTitle} onchangeText={this.changeText} data={this.state.lyrics[this.state.current]}/> }
          </div>
        </div>

    );
  }
}

export default App;
