import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logoutButton = () => {
    localStorage.removeItem("pass");
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-sm">
          <NavLink to="/dashboard" className="navbar-brand">
            Product List
            <button className="btn btn-sm btn-outline-dark mx-3">
              Create New
            </button>
          </NavLink>
          <div className="d-flex">
            <button className="btn btn-link text-decoration-none" type="submit" onClick={logoutButton}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
