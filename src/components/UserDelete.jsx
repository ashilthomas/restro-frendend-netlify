import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Modal } from "react-bootstrap";
import instance from "../axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UserDelete({ id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handileDelete = async () => {
    try {
      const res = await instance.delete(`api/user/${id}`, {
        withCredentials: true,
      });

      if (!res.data.success) {
        toast.error(res.data.message);
      }

      setShow(false);

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.responce.data.message);
    }
  };

  return (
    <>
      <DeleteIcon onClick={() => handleShow()} />
      <ToastContainer />
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>User Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          Are you sure that you want to delete this user ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="danger" onClick={handileDelete}>
            Conform
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserDelete;
