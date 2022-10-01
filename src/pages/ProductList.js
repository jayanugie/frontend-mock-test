import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function ProductList() {

 

  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-sm">
          <NavLink to="/dashboard" className="navbar-brand">
            Product List
            <button className="btn btn-sm btn-outline-dark mx-3">
              Create New
            </button>
          </NavLink>
          <div className="d-flex">
            <button className="btn btn-link text-decoration-none" type="submit">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* body */}
      <div className="container-sm">
        <div className="m-2">
          <div className="d-flex justify-content-evenly">
            <div className="row row-cols-3">
              <div className="col p-2">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="/logo512.png" className="card-img-top" alt="img" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink href="#" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="/logo512.png" className="card-img-top" alt="img" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink href="#" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="/logo512.png" className="card-img-top" alt="img" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink href="#" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="/logo512.png" className="card-img-top" alt="img" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink href="#" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
