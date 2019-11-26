import React, { Component } from 'react';
import { getAllAlbums } from './apiCalls/apiCalls';
import './App.css';

class App extends Component {
  componentDidMount = async () => {
    let albums = await getAllAlbums();
    console.log('albums', albums);
  };

  render() {
    return <div className='App'></div>;
  }
}

export default App;
