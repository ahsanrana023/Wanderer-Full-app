import React from "react";
import "./contact.css";
export default function Register() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    comment: "",
  });

  function handleChange(e) {
    e.persist();
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="contact" style={{ backgroundColor: "#f2fcfe" }}>
      <div className="contact--form">
        <h2
          style={{
            marginBottom: "35px",
            marginTop: "20px",
            textAlign: "center",
            padding: "30px",
            color: "#6986b6",
            fontSize: "32px",
          }}
        >
          Contact Us
        </h2>
        <form className="contact-form-fields">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Name"
            className="field"
            style={{ padding: "20px", border: "1px solid #eee" }}
          />

          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Email"
            className="field"
          />

          <textarea
            type="text"
            name="password"
            onChange={handleChange}
            value={formData.comment}
            className="field"
            placeholder="Add your Comments"
          ></textarea>
          <button className="contact--btn">Contact Us</button>
        </form>
      </div>
    </div>
  );
}
