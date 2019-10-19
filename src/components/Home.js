import React from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Home = props => {
  return (
    <Container>
    <h1>Stanley Neilson <span role="img" aria-label="Blue Heart">💙</span></h1>
      <Row>
        <Col>
          <Card>
            <CardImg top width="100%" src={require("../images/stanley-logo.jpg")} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
    </Row>
    </Container>

  )
}

export default Home;
