import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Albums() {
    
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    console.log("Calling API...");
    fetch('http://localhost:8000/albums')
      .then(response => response.json())
      .then(data => {
        console.log("Data received:", data);
        setAlbums(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      
      <div className="row">
        {albums.map((album) => (
            <div key={album.id} className="col-sm-4 mb-4">
              <Card>
                <Card.Img variant="top" src={album.cover} />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                  <Card.Text>{album.description}</Card.Text>
                  <Link to={`/albums/${album.id}`}>
                    <Button variant="primary">Voir l'album</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;
