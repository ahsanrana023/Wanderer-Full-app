import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./landing.css";
import CustomerReviews from "../components/CustomerReviews";
import Contact from "../components/Contact";
import Header from "../components/Header";
import About from "../components/About";
// ..
AOS.init({
  duration: 2000,
});

function LandingScreen() {
  return (
    <>
      <Header title="Discover New Destinations" />
      <About />
      <CustomerReviews />
      <div style={{ backgroundColor: "#00a8ff", padding: "80px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "15px",
            fontSize: "32px",
          }}
        >
          Save Time, Save Money
        </h2>
        <h5
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          Sign up and we'll send the best deals to you
        </h5>
        <input
          placeholder="Email"
          type="email"
          style={{
            width: "50%",
            padding: "20px",
            borderRadius: "4px",
            outline: "none",
            border: "none",
            marginLeft: "25%",
          }}
        />
        <button
          style={{
            backgroundColor: "#000",
            color: "#fff",
            marginLeft: "2px",
            cursor: "pointer",
            width: "20%",
            marginLeft: "40%",
          }}
        >
          Subscribe
        </button>
      </div>
      <Contact />
    </>
  );
}

export default LandingScreen;
{
  /* <div className="row landing">
  <div className="col-md-12 text-center">
    <h2 data-aos="zoom-in" style={{ color: "white", fontSize: "100px" }}>
      MERN HOTEL BOOKING
    </h2>
    <h1 data-aos="zoom-out" style={{ color: "white" }}>
      There is only one boss. The Guest.
    </h1>
    <Link to="/home">
      <button className="btn btn-primary landingBtn">Get Started</button>
    </Link>
  </div>
</div>; */
}
