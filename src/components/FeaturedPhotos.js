import React from 'react';
import { photoData } from '../data.js';

const FeaturedPhotos = () => {

  const getRandomNumber = () => {
    return Math.floor(Math.random() * photoData.length);
  }
  const numArray = [];
  for (let i = 0; i < 4; i++) {
    numArray.push(getRandomNumber());
  }

  return(
    numArray.map((number, index) => {
      return (
        <div className="col-3 featured-photo d-flex flex-wrap align-items-center" key={index}>
          <img src={`/images/${photoData[number].url}`} className="img-fluid h-100" alt="Featured" />
        </div>
      )
    })
  )
}

export default FeaturedPhotos;
