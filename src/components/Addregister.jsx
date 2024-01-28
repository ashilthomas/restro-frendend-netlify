import React, { useState } from "react";
import { Alert, Button, Container, Form, Row } from "react-bootstrap";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import instance from "../axios";
function Addregister() {
  const [userName, stateName] = useState("");
  const [userEmail, stateEmail] = useState("");
  const [userPassword, statePassword] = useState("");
  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handileusername = (e) => {
    stateName(e.target.value);
  };
  const handilUserEmail = (e) => {
    stateEmail(e.target.value);
  };
  const handileUserPassword = (e) => {
    statePassword(e.target.value);
  };

  const handileSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      try {
        let res = await instance.post("api/register", {
          fullname: userName,
          email: userEmail,
          password: userPassword,
        });
        if (res.data.success) {
          toast.success(res.data.message, {
            autoClose: 2000,
          });

          await new Promise((resolve) => setTimeout(resolve, 2000));
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
        console.log(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
      setShow(true);
    
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
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                placeholder="fullname"
                onChange={(e) => handileusername(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
                please Enter your Name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={handilUserEmail}
                required
              />
              <Form.Control.Feedback type="invalid">
                please Enter your Address{" "}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) => handileUserPassword(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
                please Enter your password
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          {/* {show && (
            <Alert variant="success">Restaurant addedd succesfully</Alert>
          )} */}
        </Row>
      </Container>
    </div>
  );
}

export default Addregister;
