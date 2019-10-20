import React from 'react';
import { photoData } from '../data.js';
import { Col } from 'reactstrap';

const FeaturedPhotos = () => {

  const getRandomNumber = () => {
    return Math.floor(Math.random() * photoData.length);
  }
  const numArray = [];
  for (let i = 0; i < 6; i++) {
    numArray.push(getRandomNumber());
  }

  return(
    numArray.map((number, index) => {
      return (
        <Col xs="6" sm="6" md="3" lg="4" className="featured-photo d-flex flex-wrap align-items-center" key={index}>
          <img src={`/images/${photoData[number].url}`} className="img-fluid h-100" alt="Featured" />
        </Col>
      )
    })
  )
}

export default FeaturedPhotos;
