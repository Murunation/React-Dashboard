import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddProduct from "../icons/AddProduct";

export default function AddUser() {
  return (
    <div className="user-button-main">
      <Button variant="primary" className="add-button" onClick={handleShow}>
        <AddProduct />
        Хэрэглэгч нэмэх
      </Button>
    </div>
  );
}
