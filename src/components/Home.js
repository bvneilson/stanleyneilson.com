import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { photoData } from '../data.js';

const Home = props => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * photoData.length));
  const [data, setData] = useState(photoData[randomNumber]);

  const handleClick = (event) => {
    setRandomNumber(Math.floor(Math.random() * photoData.length));
    setData(photoData[randomNumber]);
  }
  if (!data) {
    return <h3>Loading...</h3>;
  }
  if (data.type === 'image') {
    return (
      <Container>
      <h1>Stanley Neilson <span role="img" aria-label="Blue Heart">💙</span></h1>
        <Row>
          <Col>
            <Card>
              <CardImg top width="100%" src={`/images/${data.url}`} alt="Card image cap" className="img-responsive" />
              <CardBody>
                <CardText>{data.quote}</CardText>
                <Button color="primary" onClick={handleClick}>New Picture</Button>
              </CardBody>
            </Card>
          </Col>
      </Row>
      </Container>
    )
  }
}

export default Home;
