import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function Navbar() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageurl, setImageurl] = useState("");

  const navigate = useNavigate();

  // modal create
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logoutButton = () => {
    localStorage.removeItem("pass");
    navigate("/login");
  };

  const createProduct = async (e) => {
    e.preventDefault();
    if (!name || !price || !imageurl) {
      alert("Can not be empty!");
    } else {
      try {
        const result = await axios.post(
          "https://private-anon-660d1caccd-testbinar.apiary-mock.com/v1/products/",
          {
            name: name,
            price: price,
            imageurl: imageurl,
          }
        );
        console.log(result.data.result);
        alert("List added");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-sm">
          <NavLink to="/dashboard" className="navbar-brand">
            Product List
            <button
              className="btn btn-sm btn-outline-dark mx-3"
              onClick={handleShow}
            >
              Create New
            </button>
          </NavLink>
          <div className="d-flex">
            <button
              className="btn btn-link text-decoration-none"
              type="submit"
              onClick={logoutButton}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create new</Modal.Title>
        </Modal.Header>
        <div className="container p-3">
          <form onSubmit={createProduct}>
            <div className="mb-3">
              <input
                type="product-name"
                className="form-control"
                id="productName"
                placeholder="Product Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <input
                type="price"
                className="form-control"
                id="price"
                placeholder="Price (Dollar USD)"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <input
                type="imgage-url"
                className="form-control"
                id="imgUrl"
                placeholder="Image url"
                onChange={(event) => {
                  setImageurl(event.target.value);
                }}
              />
            </div>

            <Modal.Footer>
              <Button variant="light" onClick={handleClose}>
                Back
              </Button>
              <Button variant="secondary" type="submit">
                Create
              </Button>
            </Modal.Footer>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
