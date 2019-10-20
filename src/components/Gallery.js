import React from 'react';
import FeaturedPhotos from './FeaturedPhotos.js';
import FeaturedVideos from './FeaturedVideos.js';
import FeaturedQuotes from './FeaturedQuotes.js';
import { Container, Row, Button } from 'reactstrap';

const Gallery = () => {

  return(
    <Container>
      <h3>Featured Photos</h3>
      <Row>
        <FeaturedPhotos />
        <p className="w-100 text-center">
          <Button color="primary">See All Photos</Button>
        </p>
      </Row>
      <Row>
        <FeaturedVideos />
      </Row>
      <Row>
        <FeaturedQuotes />
      </Row>
    </Container>
  )
}

export default Gallery;
