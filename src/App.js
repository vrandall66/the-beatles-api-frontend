import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import { getAllAlbums, getAllSongs } from './apiCalls/apiCalls';
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

  getAlbums = async () => {
    let albums = await getAllAlbums();
    this.setState({ albums });
  };

  getSongs = async () => {
    let songs = await getAllSongs();
    this.setState({ songs });
  };

  clearAlbums = () => {
    this.setState({ albums: [] });
  };

  clearSongs = () => {
    this.setState({ songs: [] });
  };

  render() {
    return (
      <div className='App'>
        <h1 className='App__h1'>Welcome to The (unofficial) Beatles API!</h1>
        <h5 className='App__h6--description'>Query strings and description</h5>
        <div className='App__div--container'>
          <h2 className='App__h2--endpoints'>
            GET: <code>api/v1/albums</code>
          </h2>
          <div className='App__div--endpoints'>
            <button
              className='App__button--submit-to-endpoint'
              onClick={this.getAlbums}
            >
              GET
            </button>
            <button
              className='App__button--reset-request'
              onClick={this.clearAlbums}
            >
              RESET
            </button>
            <ReactJson src={this.state.albums} theme='hopscotch' />
          </div>
        </div>
        <div className='App__div--container'>
          <h2 className='App__h2--endpoints'>
            GET: <code>api/v1/albums/:id</code>
          </h2>
          <div className='App__div--endpoints'>
            <button className='App__button--submit-to-endpoint'>GET</button>
            <button className='App__button--reset-request'>RESET</button>
            <ReactJson src={this.state.album} theme='hopscotch' />
          </div>
        </div>
        <div className='App__div--container'>
          <h2 className='App__h2--endpoints'>
            GET: <code>api/v1/songs</code>
          </h2>
          <div className='App__div--endpoints'>
            <button
              className='App__button--submit-to-endpoint'
              onClick={this.getSongs}
            >
              GET
            </button>
            <button
              className='App__button--reset-request'
              onClick={this.clearSongs}
            >
              RESET
            </button>
            <ReactJson src={this.state.songs} theme='hopscotch' />
          </div>
        </div>
        <div className='App__div--container'>
          <h2 className='App__h2--endpoints'>
            GET: <code>api/v1/songs/:id</code>
          </h2>
          <div className='App__div--endpoints'>
            <button className='App__button--submit-to-endpoint'>GET</button>
            <button className='App__button--reset-request'>RESET</button>
            <ReactJson src={this.state.song} theme='hopscotch' />
          </div>
        </div>
        <div className='App__div--container'>
          <h2 className='App__h2--endpoints'>
            POST: <code>api/v1/albums/:id</code>
          </h2>
          <div className='App__div--endpoints'>
            <button className='App__button--submit-to-endpoint'>POST</button>
            <button className='App__button--reset-request'>RESET</button>
            <ReactJson src={this.state.postedAlbum} theme='hopscotch' />
          </div>
        </div>
        <div className='App__div--container'>
          <h2 className='App__h2--endpoints'>
            POST: <code>api/v1/songs/:id</code>
          </h2>
          <div className='App__div--endpoints'>
            <button className='App__button--submit-to-endpoint'>POST</button>
            <button className='App__button--reset-request'>RESET</button>
            <ReactJson src={this.state.postedSong} theme='hopscotch' />
          </div>
        </div>
        <div className='App__div--container'>
          <h2 className='App__h2--endpoints'>
            DELETE: <code>api/v1/songs/:id</code>
          </h2>
          <div className='App__div--endpoints'>
            <button className='App__button--submit-to-endpoint'>DELETE</button>
            <button className='App__button--reset-request'>RESET</button>
          </div>
        </div>
        <div className='App__div--container'>
          <h2 className='App__h2--endpoints'>
            DELETE: <code>api/v1/songs/:id</code>
          </h2>
          <div className='App__div--endpoints'>
            <button className='App__button--submit-to-endpoint'>DELETE</button>
            <button className='App__button--reset-request'>RESET</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
