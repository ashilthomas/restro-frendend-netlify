import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import BorderColorIcon from '@mui/icons-material/BorderColor';

import { Link } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDelete from "./UserDelete";
import instance from "../axios";
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
     try {
      const res = await instance.get("api/users",{withCredentials:true});
      setUsers(res.data.users);
     } catch (error) {
      toast.error(error.message); 
     }
    };
    getAllUsers();
  }, [users]);

  return (
    <Container>
      <Row>
        <Col>
          <h1> Edit Users</h1>
        </Col>
      </Row>
      <ToastContainer />
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>full name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => (
                  <tr key={index}>
                    <td >{index + 1}</td>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link to={`/user/${user._id}`}><BorderColorIcon/></Link>
                    </td>
                    <td><UserDelete id={user._id}/></td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Users;
