import React from "react";
import Error from "../images/404.svg";
export default function ErrorPage() {
  return (
    <div>
      <img
        src={Error}
        alt="Error 404"
        style={{ width: "60%", marginLeft: "20%", height: "100vh" }}
      />
    </div>
  );
}
