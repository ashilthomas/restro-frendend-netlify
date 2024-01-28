import React, { useState } from "react";
import { Alert, Button, Container, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { authUserSuccess } from "../redux/userAuth";
import { useDispatch } from "react-redux";
import instance from "../axios";

function Login() {
  const [email, stateEmail] = useState("");
  const [Password, statePassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

        let res = await instance.post("api/login", {
         
            email: email,
           password: Password,

        },{
          withCredentials:true
           
        });

        if (res.data.success) {

          if (res.data.isAuthenticated) {

            dispatch(
              authUserSuccess({
                user: res.data.user,
                isAutenticated: res.data.iaAuthenticated,
              })
            );
          }
          toast.success(res.data.message, {
            autoClose: 2000,
          });

          await new Promise((resolve) => setTimeout(resolve, 2000));
          navigate("/");
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
    <Container>
      <Row>
        <ToastContainer />
        <Form noValidate validated={validated} onSubmit={handileSubmit}>
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
        {show && <Alert variant="success">Restaurant addedd succesfully</Alert>}
      </Row>
    </Container>
  );
}

export default Login;
