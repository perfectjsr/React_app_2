import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal, show } from 'react-bootstrap';


const API_IMG = "https://image.tmdb.org/t/p/w500/";
const ImageCard = (props, { title, poster_path, vote_average, release_date, overview }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)

  return (
    <div>
      <Card style={{ width: '18rem', height: '45rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          {props.id}
          <Card.Title>{props.title}</Card.Title>
          <br></br><br></br>
          <div className='buttonbox'>
            <Button onClick={handleShow} variant="primary">View More</Button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className='card-img-top' src={API_IMG + poster_path}></img>
              <h3>{props.title}</h3>
              <h4>IMDB: {props.vote_average}</h4>
              <h4>Release Date: {props.release_date}</h4>
              <br></br>
              <h5>Overview</h5>
              <p>{props.overview}</p>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ImageCard
