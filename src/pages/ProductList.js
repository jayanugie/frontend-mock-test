import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProductList() {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();

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
  const DeleteProduct = async (e) => {
    e.preventDefault();
    const result = await axios.delete(
      `https://private-anon-660d1caccd-testbinar.apiary-mock.com/v1/products/8`, 
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
                        className="card"
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
                        <button onClick={(e) => DeleteProduct(e)}>
                          Delete
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
    </div>
  );
}

export default ProductList;
