import React from "react";
import "./customercard.css";
import guide1 from "../../src/images/Guide1.jpg";
import star from "../../src/images/Star.svg";
export default function Customercard() {
  return (
    <div className="customer--card">
      <div className="rating">
        <img src={star} className="star" alt="Star" />
        <img src={star} className="star" alt="Star" />
        <img src={star} className="star" alt="Star" />
        <img src={star} className="star" alt="Star" />
        <img src={star} className="star" alt="Star" />
      </div>
      <div className="review">
        <p>
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum."
        </p>
      </div>
      <div className="customer">
        <img src={guide1} alt="Customer" />
        <h5>Joe Burdine</h5>
      </div>
    </div>
  );
}
