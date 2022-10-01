import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Can not be empty!");
    } else {
      try {
        const result = await axios.post(
          "https://test-binar.herokuapp.com/auth/login",
          {
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
          <h1>Login</h1>
          <div className="card w-25">
            <div className="card-body ">
              <form onSubmit={Submit}>
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
            Don't have an account? <NavLink to="/register">Register</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
