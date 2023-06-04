import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AlbumDetail() {
  const [album, setAlbum] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("Calling API for detail...");
    fetch(`http://localhost:8000/albums/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log("Data reçu pour detail :", data);
        console.log(data.album.name);
        setAlbum(data);
      })
      .catch(error => {
        console.log(error);
        setError(error);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{album.album.name}</h1>
      <p>{album.album.description}</p>
      {album.album.cover && <img src={album.album.cover} alt={album.album.name} />}
      <ul>
        {album.tracks.map((track) => (
          <li key={track.id}>{track.name} {track.duration} {track.name} {track.track_no} <audio controls><source src={track.mp3}/></audio></li>
          
          
        ))}
      </ul>
    </div>
  );
}



export default AlbumDetail;
