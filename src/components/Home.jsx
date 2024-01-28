import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  const restaurants = useSelector((state)=>state.data.restaurants)
  console.log(restaurants);
  return (
    <Container>
        <ToastContainer />
      <Row className="mt-5">
        { restaurants &&
          restaurants.map((res,index) => (
            <Col
              key={index}
              className="col-md-4 "
              style={{ marginTop: "20px" }}
            >
              <Card style={{ height: "500px" }}>
                <Card.Img
                  variant="top"
                  src={process.env.REACT_APP_SERVER_URL + res.photograph}
                  style={{ width: "100%", height: "100%" }}
                />
                <Card.Body>
                  <Card.Title>{res.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button as={Link} to={`/details/${res._id}`} variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}

        {/* <Col
          className="col-md-4 "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card className="bg-black">
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/53/ed/af/53edaf5bb3d543c8e40ea45b9b78c6ec.jpg"
            />
            <Card.Body>
              <Card.Title className="text-white">Card Title</Card.Title>
              <Card.Text className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button style={{ backgroundColor: "white", color: "black" }}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col
          className="col-md-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card className="bg-black">
            <Card.Img
              variant="top"
              style={{ height: "280px" }}
              src="https://th.bing.com/th/id/OIP.MtRGLlO6Jdt8wRiE-ODWRAHaHa?w=640&h=640&rs=1&pid=ImgDetMain"
            />
            <Card.Body>
              <Card.Title className="text-white">Card Title</Card.Title>
              <Card.Text className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button style={{ backgroundColor: "white", color: "black" }}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col
          className="col-md-4 "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card className="bg-black">
            <Card.Img
              variant="top"
              style={{ height: "280px" }}
              src="https://th.bing.com/th/id/OIP.ViO6PluTrWTgsbHOdJytlwHaEc?w=640&h=384&rs=1&pid=ImgDetMain"
            />
            <Card.Body>
              <Card.Title className="text-white">Card Title</Card.Title>
              <Card.Text className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button style={{ backgroundColor: "white", color: "black" }}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
      {/* <Row className="mt-5">
        <Col
          className="col-md-4 "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card className="bg-black">
            <Card.Img
              variant="top"
              src="https://www.jetsetter.com/uploads/sites/7/2018/04/N-8dtAdp.jpeg"
            />
            <Card.Body>
              <Card.Title className="text-white">Card Title</Card.Title>
              <Card.Text className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button style={{ backgroundColor: "white", color: "black" }}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col
          className="col-md-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card className="bg-black">
            <Card.Img
              variant="top"
              style={{ height: "280px" }}
              src="https://th.bing.com/th/id/R.b84f83f918801985bf77e15bd46910a8?rik=hW8duysyn%2bPDGQ&riu=http%3a%2f%2fwww.dexigner.com%2fimages%2farticle%2f24957%2fTeleferic_Walnut_Creek_04_thumb.jpg&ehk=n4%2beO5x%2fjXfiKxIoJM2PAMQgU7x2U4QEGumJKRYp7gY%3d&risl=&pid=ImgRaw&r=0"
            />
            <Card.Body>
              <Card.Title className="text-white">Card Title</Card.Title>
              <Card.Text className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button style={{ backgroundColor: "white", color: "black" }}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col
          className="col-md-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card className="bg-black">
            <Card.Img
              variant="top"
              style={{ height: "280px" }}
              src="https://i.pinimg.com/originals/fc/e4/3c/fce43c1809e11fd81abf296890196c1d.jpg"
            />
            <Card.Body>
              <Card.Title className="text-white">Card Title</Card.Title>
              <Card.Text className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button style={{ backgroundColor: "white", color: "black" }}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
}

export default Home;
