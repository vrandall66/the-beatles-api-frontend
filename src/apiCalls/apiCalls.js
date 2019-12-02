const baseUrl = 'https://the-beatles-api.herokuapp.com/api/v1/';

export const getAllAlbums = async () => {
  const response = await fetch(`${baseUrl}albums`);
  if (!response.ok) {
    throw new Error('Could not retrieve albums, please try again later.');
  }
  const data = await response.json();
  return data;
};

export const getAllSongs = async () => {
  const response = await fetch(`${baseUrl}songs`);
  if (!response.ok) {
    throw new Error('Could not retrieve songs, please try again later.');
  }
  const data = await response.json();
  return data;
};

export const getAlbum = async id => {
  const response = await fetch(`${baseUrl}albums/${id}`);
  if (!response.ok) {
    throw new Error('Could not retrieve album, please try again later.');
  }
  const data = await response.json();
  return data;
};

export const getSong = async id => {
  const response = await fetch(`${baseUrl}songs/${id}`);
  if (!response.ok) {
    throw new Error('Could not retrieve album, please try again later.');
  }
  const data = await response.json();
  return data;
};

export const postNewAlbum = async album => {
  const options = {
    method: 'POST',
    body: JSON.stringify(album),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const res = await fetch(`${baseUrl}albums/`, options);
  const data = await res.json();
  return data;
};

export const postNewSong = async song => {
  const options = {
    method: 'POST',
    body: JSON.stringify(song),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const res = await fetch(`${baseUrl}songs/`, options);
  const data = await res.json();
  return data;
};

export const deleteAlbum = async id => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const res = await fetch(
    `${baseUrl}/albums/${id}`,
    options
  );
  const data = res.json();
  return data;
};