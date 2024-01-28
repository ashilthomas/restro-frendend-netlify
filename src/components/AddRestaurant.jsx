
import React, { useState } from "react";
import { Alert, Button, Container, Form, Row } from "react-bootstrap";
import instance from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function AddRestaurant() {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantAdress, setRestaurantAdress] = useState("");
  const [restaurantNeighborhood, setRestaurantNeighborhood] = useState("");
  const [restaurantPhotograph, setRestaurantPhotograph] = useState(null);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handileRestaurantName = (e) => {
    setRestaurantName(e.target.value);
  };
  const handileRestaurantAdress = (e) => {
    setRestaurantAdress(e.target.value);
  };
  const handileRestaurantNeighborhood = (e) => {
    setRestaurantNeighborhood(e.target.value);
  };
  const handilePhotograph= (e)=>{
        
     setRestaurantPhotograph(e.target.files[0])
  }
  const handileSubmit = async(e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {

    const formData = new FormData(form)

    formData.append('name',restaurantName)
    formData.append("address",restaurantAdress)
    formData.append('neghborhood',restaurantNeighborhood)
    formData.append('photograph',restaurantPhotograph)

      setShow(true);
     try {
      const res = await instance.post('/restaurant', formData, {  
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if(!res.data.success){
        toast.success(res.data.message);
     
      }else{
        toast.success(res.data.message);
      }
     } catch (error) {
      toast.error(error.responce.data.message);
     }
      
    }
    setValidated(true);
  };
  
  return (
    <div>
      <Container>
        <Row>
        <ToastContainer />
          <Form noValidate validated={validated} onSubmit={handileSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Restaurant Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Restaurant Name"
                onChange={(e) => handileRestaurantName(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
                please Enter restaurant Name
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                restaurant Name Looks Good
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Restaurant Adress</Form.Label>
              <Form.Control
                type="text"
                placeholder="Restaurant Adress"
                onChange={(e) => handileRestaurantAdress(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
                please Enter restaurant Address{" "}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                restaurant Address Looks Good
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Restaurant Neighborhood</Form.Label>
              <Form.Control
                type="text"
                placeholder="Restaurant Neighborhood"
                onChange={(e) => handileRestaurantNeighborhood(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
                please Enter restaurant Neighborhood
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                restaurant Neighborhood Looks Good
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Restaurant photograph</Form.Label>
              <Form.Control type="file" onChange={(e)=>handilePhotograph(e)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Restaurant
            </Button>
          </Form>
          {show && (
            <Alert variant="success">Restaurant addedd succesfully</Alert>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default AddRestaurant;
