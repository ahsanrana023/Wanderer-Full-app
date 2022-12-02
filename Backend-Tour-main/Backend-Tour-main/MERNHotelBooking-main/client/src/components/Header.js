import React from "react";
import Headerimg from "../../src/images/Headerimage.svg";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <div className="hero">
      <div className="hero--text">
        <h1 className="hero--title">{props.title}</h1>
        <p className="hero--para">
          A team of devoted and experienced tourism profesiionals
          <br /> will provide you with the best advice and tips.
        </p>
        <Link to="/tour" className="header--link">
          Visit Tours
        </Link>
      </div>
      <img src={Headerimg} className="header--img" alt="Header" />
    </div>
  );
}
