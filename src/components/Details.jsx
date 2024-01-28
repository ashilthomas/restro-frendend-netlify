
import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Details() {
    const { id } = useParams();
  const restaurants = useSelector((state) => state.data.restaurants);
  
 
  const current = restaurants.find((a) => a._id === id);

  return (
    <div>
      <Container>
        {current && (
          <Row>
            <Col md={6}>
              <Card>
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "500px" }}
                  src={process.env.REACT_APP_SERVER_URL + current.photograph}
                />
                <Card.Body>
                  <Card.Title>{current.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>{current.neighborhood}</ListGroup.Item>
                  <ListGroup.Item>{current.address}</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Details;
