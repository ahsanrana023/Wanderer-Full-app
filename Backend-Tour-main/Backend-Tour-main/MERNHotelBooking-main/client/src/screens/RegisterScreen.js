import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
import "./register.css";
import Register from "../images/Register.svg";
function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function register() {
    const regExp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const regPass = /(?=.*[0-9])/g;
    if (!regExp.test(email)) {
      alert("email not valid");
    } else if (!regPass.test(password)) {
      alert("password not valid");
    } else if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };

      //console.log(user);
      setLoading(true);
      setError("");
      setSuccess("");

      try {
        const result = (await axios.post("/api/users/register", user)).data;
        console.log(result);
        setSuccess(result);
        setName("");
        setEmail("");
        setPassword("");
        setCpassword("");
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    } else {
      alert("password not match");
    }
  }

  return (
    <div className="register">
      <img src={Register} alt="register image" className="register--img" />
      {loading && <Loader></Loader>}
      {error.length > 0 && <Error msg={error}></Error>}

      <div className="row justify-content-center ">
        <div className="col-md-5 mt-5">
          {success.length > 0 && <Success msg={success}></Success>}
          <div className="bs">
            <h2>Register</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{ padding: "20px", border: "none" }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                const value = e.target.value;

                setEmail(e.target.value);
              }}
              style={{ padding: "20px" }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{ padding: "20px" }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Confirm Password"
              required
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
              style={{ padding: "20px" }}
            />
            {loading ? (
              <div>Registering... Please Wait...</div>
            ) : (
              <button className=" register--btn" onClick={register}>
                Register
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
