import React, { useState } from 'react';
import { Container, Row, Card, CardBody, Button, CardText, CardImg } from 'reactstrap';
import { photoData } from '../data.js';

const Home = props => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * photoData.length));
  const [data, setData] = useState(photoData[randomNumber]);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * photoData.length);
  }
  const handleClick = (event) => {
    let rando = getRandomNumber();
    if (rando !== randomNumber) {
      setRandomNumber(rando);
    } else {
      setRandomNumber(getRandomNumber());
    }
    setData(photoData[rando]);
  }
  if (!data) {
    return <h3>Loading...</h3>;
  }
  if (data.type === 'image') {
    return (
      <Container>
      <h1>Stanley Neilson <span role="img" aria-label="Blue Heart">💙</span></h1>
        <Row>
          <Card>
            <CardImg top src={`/images/${data.url}`} alt="Card image cap" className="img-fluid h-100" />
            <CardBody>
              <CardText>{data.quote}</CardText>
              <Button color="primary" onClick={handleClick}>New Picture</Button>
            </CardBody>
          </Card>
      </Row>
      </Container>
    )
  }
}

export default Home;
