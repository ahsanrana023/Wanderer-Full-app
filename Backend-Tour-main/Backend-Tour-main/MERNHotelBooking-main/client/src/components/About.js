import React from "react";
import "./about.css";
import about from "../../src/images/About-us.jpg";

const About = () => {
  return (
    <div className="about-component">
      <div className="about">
        <h2 className="about-heading" style={{ color: "#1c92d2" }}>
          About Us
        </h2>
        <p className="about-description">
          Wanderer is an online booking application providing services to book
          the Tours, hotels and Travel essentials on the rent basis to make it
          convenient for our users to enjoy the natural scenery. Along with we
          have been providing you with the information regarding the tour
          details andand Hotels.
          <br />
          <hr
            style={{
              marginTop: "20px",
              width: "50%",
              marginLeft: "25%",
              backgroundColor: "#1c92d2",
            }}
          />
        </p>
      </div>
      <div className="about--img">
        <img src={about} alt="About" />
      </div>
    </div>
  );
};

export default About;
