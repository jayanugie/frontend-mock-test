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
  const [showEdit, setShow] = useState(false);
  const handleCloseEdit = () => setShow(false);
  const handleShowEdit = () => setShow(true);

  // modal delete
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const getData = async () => {
    try {
      const result = await axios.get(
        "https://test-binar.herokuapp.com/v1/products",
        {
          headers: { "Authorization": localStorage.getItem("pass")}
        }
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
  const deleteProduct = async (e, id) => {
    e.preventDefault();
    const result = await axios.delete(
      `https://test-binar.herokuapp.com/v1/products/${id}`
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
                  <div key={idx}>
                    <div className="col p-2">
                      <div
                        className="card container-img"
                        style={{ width: "18rem" }}
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
                          onClick={handleShowDelete}
                          className="delete-btn"
                        >
                          <img src="/delete.png" alt="delete" />
                        </button>
                        <button onClick={handleShowEdit} className="edit-btn">
                          <img src="/edit.png" alt="edit" />
                        </button>
                      </div>
                    </div>
                    {/* modal edit*/}
                    <Modal show={showEdit} onHide={handleCloseEdit}>
                      <Modal.Header>
                        <Modal.Title>Edit Product</Modal.Title>
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
                            <Button variant="light" onClick={handleCloseEdit}>
                              Back
                            </Button>
                            <Button variant="secondary" type="submit">
                              Create
                            </Button>
                          </Modal.Footer>
                        </form>
                      </div>
                    </Modal>

                    {/* modal confirm delete */}
                    <Modal show={showDelete} onHide={handleCloseDelete}>
                      <Modal.Body>
                        Are you sure want to delete?
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="light" onClick={handleCloseDelete}>
                          No
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={(e) => deleteProduct(e, product.id)}
                        >
                          Yes, delete it
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
