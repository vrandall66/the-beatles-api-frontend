import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import {
  getAllAlbums,
  getAllSongs,
  getAlbum,
  getSong,
  postNewAlbum,
  postNewSong
} from './apiCalls/apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      songs: [],
      currentAlbum: {},
      currentSong: {},
      postedAlbum: {},
      postedSong: {},
      deletedAlbum: '',
      deletedSong: '',
      albumId: '',
      trackId: '',
      albumName: '',
      trackName: '',
      genre: '',
      releaseDate: '',
      trackCount: '',
      trackNumber: '',
      discNumber: '',
      trackTimeMillis: ''
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
    let currentAlbum = await getAlbum(id);
    this.setState({ currentAlbum });
  };

  getSong = async id => {
    let currentSong = await getSong(id);
    this.setState({ currentSong });
  };

  makeNewAlbum = async () => {
    const { albumName, genre, releaseDate, trackCount } = this.state;
    const newAlbum = { albumName, genre, releaseDate, trackCount };
    const postedAlbum = await postNewAlbum(newAlbum);
    this.setState({ postedAlbum });
  };

  makeNewSong = async () => {
    const {
      trackName,
      trackNumber,
      trackId,
      trackTimeMillis,
      discNumber,
      albumName,
      album
    } = this.state;
    const newSong = {
      trackName,
      trackNumber,
      trackId,
      trackTimeMillis,
      discNumber,
      albumName,
      album
    };
    const postedSong = await postNewSong(newSong);
    this.setState({ postedSong });
  };

  clearAlbumsGet = () => {
    this.setState({ albums: [] });
  };

  clearSongs = () => {
    this.setState({ songs: [] });
  };

  clearAlbumGet = () => {
    this.setState({ currentAlbum: {} });
    this.setState({ albumId: '' });
  };

  clearSongGet = () => {
    this.setState({ currentSong: {} });
    this.setState({ songId: '' });
  };

  clearAlbumPost = () => {
    this.setState({
      postedAlbum: {},
      albumName: '',
      genre: '',
      releaseDate: '',
      trackCount: ''
    });
  };

  clearSongPost = () => {
    this.setState({
      postedSong: {},
      albumName: '',
      discNumber: '',
      trackId: '',
      trackName: '',
      trackTimeMillis: '',
      albumId: ''
    });
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
              onClick={this.clearAlbumsGet}
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
              onClick={this.clearAlbumGet}
            >
              RESET
            </button>
            <ReactJson src={this.state.currentAlbum} theme='hopscotch' />
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
              onClick={this.clearSongGet}
            >
              RESET
            </button>
            <ReactJson src={this.state.currentSong} theme='hopscotch' />
          </div>
        </div>
        <div className='App__div--container'>
          <h2 className='App__h2--endpoints'>
            POST: <code>api/v1/albums/:id</code>
          </h2>
          <div className='App__div--endpoints'>
            <div className='App__div--POST-albums-options'>
              <input
                className='App__input--POST-album-query'
                placeholder='Album Name'
                name='albumName'
                value={this.state.albumName}
                onChange={this.handleChange}
              />
              <input
                className='App__input--POST-album-query'
                placeholder='Album Id'
                name='albumId'
                maxLength='20'
                value={this.state.albumId}
                onChange={this.handleChange}
              />
              <input
                className='App__input--POST-album-query'
                placeholder='Genre'
                name='genre'
                value={this.state.genre}
                onChange={this.handleChange}
              />
              <input
                className='App__input--POST-album-query'
                placeholder='Release Date'
                name='releaseDate'
                maxLength='40'
                value={this.state.releaseDate}
                onChange={this.handleChange}
              />
              <input
                className='App__input--POST-album-query'
                placeholder='Track Count'
                name='trackCount'
                maxLength='3'
                value={this.state.trackCount}
                onChange={this.handleChange}
              />
            </div>

            <button
              className='App__button--submit-to-endpoint'
              onClick={this.makeNewAlbum}
            >
              POST
            </button>
            <button
              className='App__button--reset-request'
              onClick={this.clearAlbumPost}
            >
              RESET
            </button>
            <ReactJson src={this.state.postedAlbum} theme='hopscotch' />
          </div>
        </div>
        <div className='App__div--container'>
          <h2 className='App__h2--endpoints'>
            POST: <code>api/v1/songs/:id</code>
          </h2>
          <div className='App__div--endpoints'>
            <div className='App__div--POST-songs-options'>
              <input
                className='App__input--POST-song-query'
                placeholder='Track Name'
                name='trackName'
                maxLength='50'
                value={this.state.trackName}
                onChange={this.handleChange}
              />
              <input
                className='App__input--POST-song-query'
                placeholder='Track Number'
                name='trackNumber'
                maxLength='3'
                value={this.state.trackNumber}
                onChange={this.handleChange}
              />
              <input
                className='App__input--POST-song-query'
                placeholder='Track ID'
                name='trackId'
                maxLength='20'
                value={this.state.trackId}
                onChange={this.handleChange}
              />
              <input
                className='App__input--POST-song-query'
                placeholder='Track Time Milliseconds'
                name='trackTimeMillis'
                maxLength='100'
                value={this.state.trackTimeMillis}
                onChange={this.handleChange}
              />
              <input
                className='App__input--POST-song-query'
                placeholder='Disc Number'
                name='discNumber'
                maxLength='2'
                value={this.state.discNumber}
                onChange={this.handleChange}
              />
              <input
                className='App__input--POST-song-query'
                placeholder='Album Name'
                name='albumName'
                maxLength='100'
                value={this.state.albumName}
                onChange={this.handleChange}
              />
              <input
                className='App__input--POST-song-query'
                placeholder='Album Id'
                name='albumId'
                maxLength='20'
                value={this.state.albumId}
                onChange={this.handleChange}
              />
            </div>
            <button
              className='App__button--submit-to-endpoint'
              onClick={this.makeNewSong}
            >
              POST
            </button>
            <button
              className='App__button--reset-request'
              onClick={this.clearSongPost}
            >
              RESET
            </button>
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
