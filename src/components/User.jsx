import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row, ToastContainer } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import instance from "../axios";
function User() {
  const [validated, setValidated] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
  });

  useEffect(() => {
    const getUserDeatails = async () => {
      try {
        const res = await instance.get(`api/user/${id}`, {
          withCredentials: true,
        });

        if (!res.data.success) {
          navigate("/users");
        }

        setUser({
          fullname: res.data.fullname,
          email: res.data.email,
        });
      } catch (error) {
        navigate("/users");
      }
    };
    getUserDeatails();
  }, [id, navigate]);

  const handileSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      try {
        const res = await instance.post(
          `api/user/${id}`,
          {
            fullname: user.fullname,
            email: user.email,
          },
          {
            withCredentials: true,
          }
        );
        if (!res.data.success) {
          navigate("/users");

          toast.error(res.data.message);
        }
        toast.success(res.data.message);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        navigate("/login");
      } catch (error) {
        toast.error(error.responce.data.message);
      }
    }
    setValidated(true);
  };
  return (
    <Container>
      <Row>
        <ToastContainer />
        <Form noValidate validated={validated} onSubmit={handileSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              type="text"
              placeholder="fullname"
              defaultValue={user.fullname}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              defaultValue={user.email}
              onChange={(e) => setUser(...user, e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              please Enter your Address{" "}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default User;
