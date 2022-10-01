import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        alert(result.data.status);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="position-relative">
      <div className="">
        <div className="">
          <h1>Register</h1>
          <div className="card w-25">
            <div className="card-body ">
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
                <button type="submit" className="btn btn-secondary ">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <p>
            Already have account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
