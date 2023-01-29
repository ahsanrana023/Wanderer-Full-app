import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
import "./login.css";
import Loginimg from "../images/Login.svg";
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function Login() {
    setLoading(true);
    const user = {
      email,
      password,
    };
    //console.log(user);
    try {
      const result = (await axios.post("/api/users/login", user)).data;
      console.log(result);
      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setError("Invalid Credentials");
    }
    setLoading(false);
  }
  return (
    <div className="login--screen">
      <img src={Loginimg} alt="login img" className="login--img" />
      {loading && <Loader></Loader>}

      <div className="row justify-content-center">
        <div className="col-md-5 mt-5">
          {error.length > 0 && <Error msg={error}></Error>}
          <div className="bs">
            <h2>Login</h2>

            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{
                textAlign: "center",
                padding: "20px",
                marginBottom: "20px",
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{
                textAlign: "center",
                padding: "20px",
                marginBottom: "20px",
              }}
            />
            {loading ? (
              <div>Login...Please Wait...</div>
            ) : (
              <button className="login--btn" onClick={Login}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
