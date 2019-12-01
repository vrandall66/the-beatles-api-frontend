import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import {
  getAllAlbums,
  getAllSongs,
  getAlbum,
  getSong
} from './apiCalls/apiCalls';
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
      deletedSong: '',
      albumId: '',
      songId: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getAlbums = async () => {
    let albums = await getAllAlbums();
    this.setState({ albums });
  };

  getSongs = async () => {
    let songs = await getAllSongs();
    this.setState({ songs });
  };

  getAlbum = async id => {
    let album = await getAlbum(id);
    this.setState({ album });
  };

  getSong = async id => {
    let song = await getSong(id);
    this.setState({ song });
  };

  clearAlbums = () => {
    this.setState({ albums: [] });
  };

  clearSongs = () => {
    this.setState({ songs: [] });
  };

  clearAlbum = () => {
    this.setState({ album: {} });
    this.setState({ albumId: '' });
  };

  clearSong = () => {
    this.setState({ song: {} });
    this.setState({ songId: '' });
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
            <input
              className='App__input--album-id'
              placeholder=':id'
              name='albumId'
              maxLength='10'
              value={this.state.albumId}
              onChange={this.handleChange}
            />
            <button
              className='App__button--submit-to-endpoint'
              onClick={() => this.getAlbum(this.state.albumId)}
            >
              GET
            </button>
            <button
              className='App__button--reset-request'
              onClick={this.clearAlbum}
            >
              RESET
            </button>
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
            <input
              className='App__input--song-id'
              placeholder=':id'
              name='songId'
              maxLength='10'
              value={this.state.songId}
              onChange={this.handleChange}
            />
            <button
              className='App__button--submit-to-endpoint'
              onClick={() => this.getSong(this.state.songId)}
            >
              GET
            </button>
            <button
              className='App__button--reset-request'
              onClick={this.clearSong}
            >
              RESET
            </button>
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
