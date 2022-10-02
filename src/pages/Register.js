import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Can not be empty!");
    } else {
      try {
        const result = await axios.post(
          "https://test-binar.herokuapp.com/auth/signup",
          {
            name: name,
            email: email,
            password: password,
          }
        );
        console.log(result.data.result);
        alert("Register successful")
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container-sm">
      <div className="m-5">
        <div className="p-5">
          <div className="d-flex justify-content-center">
            <div className="">
              <h1 className="text-center">Register</h1>
              <div className="card">
                <div className="card-body">
                  <form onSubmit={Submit}>
                    <div className="mb-3">
                      <input
                        type="name"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-secondary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <p className="text-center m-3">
                Already have account? <NavLink to="/login">Login</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
