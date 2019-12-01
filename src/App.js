import React, { Component } from 'react';
import { getAllAlbums } from './apiCalls/apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      songs: [],
      album: {},
      song: {},
      postedAlbum: {},
      postedSong: {},
      deletedAlbum: '',
      deletedSong: ''
    };
  }

  render() {
    return (
      <div className='App'>
        <h1 className='App__h1'>Welcome to The (unofficial) Beatles API!</h1>
        <h5 className='App__h6--description'>Query strings and description</h5>
        <div className='App__div--container'>
          <h2>GET: <code>api/v1/albums</code></h2>
          <div className='App__div--GET'>
            <p>Hello</p>
          </div>
        </div>
        <div className='App__div--container'>
          <h2>GET: <code>api/v1/albums/:id</code></h2>
          <div className='App__div--GET'>
            <p>Hello</p>
          </div>
        </div>
        <div className='App__div--container'>
          <h2>GET: <code>api/v1/songs</code></h2>
          <div className='App__div--GET'>
            <p>Hello</p>
          </div>
        </div>
        <div className='App__div--container'>
          <h2>GET: <code>api/v1/songs/:id</code></h2>
          <div className='App__div--GET'>
            <p>Hello</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
