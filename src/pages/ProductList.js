import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles/Style.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProductList() {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();

  // modal edit
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getData = async () => {
    try {
      const result = await axios.get(
        "https://private-anon-660d1caccd-testbinar.apiary-mock.com/v1/products"
      );
      setProducts(result.data.result);
      console.log(result.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    const auth = localStorage.getItem("pass");
    if (!auth) {
      alert("Please login first!");
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  if (!products) return null;

  // delete by id
  const deleteProduct = async (e) => {
    e.preventDefault();
    const result = await axios.delete(
      `https://private-anon-660d1caccd-testbinar.apiary-mock.com/v1/products/8`
    );
    console.log(result.data.result.message);
    alert(result.data.result.message);
    window.location.reload();
  };

  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* body */}
      <div className="container-sm">
        <div className="m-2">
          <div className="d-flex justify-content-evenly">
            <div className="row row-cols-3">
              {products.map((product, idx) => {
                return (
                  <div>
                    <div className="col p-2">
                      <div
                        className="card container-img"
                        style={{ width: "18rem" }}
                        key={idx}
                      >
                        <img
                          src={product.imageurl}
                          className="card-img-top img-thumbnail"
                          alt="img"
                          style={{ height: "200px" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">$ {product.price}</p>
                        </div>
                        <button
                          onClick={(e) => deleteProduct(e)}
                          className="delete-btn"
                        >
                          <img src="/delete.png" alt="delete" />
                        </button>
                        <button onClick={handleShow} className="edit-btn">
                          <img src="/edit.png" alt="edit" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create new</Modal.Title>
        </Modal.Header>
        <div className="container p-3">
          <form>
            <div className="mb-3">
              <input
                type="product-name"
                className="form-control"
                id="productName"
                placeholder="Product Name"
              />
            </div>

            <div className="mb-3">
              <input
                type="price"
                className="form-control"
                id="price"
                placeholder="Price (Dollar USD)"
              />
            </div>

            <div className="mb-3">
              <input
                type="imgage-url"
                className="form-control"
                id="imgUrl"
                placeholder="Image url"
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

export default ProductList;
