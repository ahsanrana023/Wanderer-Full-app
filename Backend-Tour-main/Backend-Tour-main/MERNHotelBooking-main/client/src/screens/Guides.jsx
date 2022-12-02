import React from "react";
import GuideCard from "../components/GuideCard.js";
import data from "../guidedata.js";
import "./guides.css";
export default function Guides() {
  const guides = data.map((item) => {
    return (
      <GuideCard
        key={item.id}
        name={item.name}
        location={item.location}
        phone={item.phone}
        email={item.email}
        isContact={item.isContact}
      />
    );
  });
  return (
    <div>
      <div className="guide--header">
        <h2
          style={{
            color: "#fff",
            paddingTop: "250px",
            paddingLeft: "50px",
            fontSize: "48px",
            opacity: "0.9",
            textAlign: "center",
          }}
        >
          Looking for a Professional Guide
        </h2>
        <p
          style={{
            color: "#fff",
            paddingLeft: "50px",
            fontSize: "15px",
            textAlign: "center",
            lineHeight: "32px",
            wordSpacing: "2px",
          }}
        >
          We have some of the most experienced guides to make your tour a
          specific experience that will last
          <br /> foreverun your memmories. Book YOur Guide now to free yourself
          from the hustle
        </p>
        <hr
          style={{
            width: "20%",
            backgroundColor: "#fff",
            marginLeft: "40%",
            marginTop: "25px",
          }}
        />
      </div>
      <h1 className="guides--data">Total Guides Found: {data.length}</h1>

      <div className="guide">{guides}</div>
    </div>
  );
}
