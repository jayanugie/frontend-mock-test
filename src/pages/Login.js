import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Can not be empty!");
    } else {
      try {
        const result = await axios.post(
          "https://private-anon-660d1caccd-testbinar.apiary-mock.com/auth/login",
          {
            email: email,
            password: password,
          }
        );
        localStorage.setItem("pass", result.data.result.access_token);
        navigate("/dashboard");
      } catch (error) {
        alert("Wrong Password!");
      }
    }
  };

  return (
    <div className="container-sm">
      <div className="m-5">
        <div className="p-5">
          <div className="d-flex justify-content-center">
            <div className="w-50">
              <h1 className="text-center">Login</h1>
              <div className="card w-100">
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
              <p className="text-center m-3">
                Don't have an account?{" "}
                <NavLink to="/register">Register</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
