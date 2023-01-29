import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Button } from "react-bootstrap";
export default function Contact() {
  const form = useRef();
  // const [formData, setFormData] = React.useState({
  //   name: "",
  //   email: "",
  //   comment: "",
  // });

  // function handleChange(e) {
  //   e.persist();
  //   setFormData((prevData) => {
  //     return {
  //       ...prevData,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nefm1yg",
        "template_wjb0oad",
        form.current,
        "RQVbBhzl9jj3hRdvb"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <div style={{ width: "50%", marginLeft: "25%" }}>
          <form ref={form} onSubmit={sendEmail} className="contact-form-fields">
            <label style={{ fontWeight: "bold" }}>Name</label>
            <br />
            <input
              type="text"
              name="user_name"
              className="field"
              style={{ padding: "20px", border: "1px solid #eee" }}
            />

            <label style={{ fontWeight: "bold" }}>Email</label>
            <br />
            <input
              type="email"
              name="user_email"
              className="field"
              style={{ padding: "20px", border: "1px solid #eee" }}
            />

            <label style={{ fontWeight: "bold" }}>Message</label>
            <br />
            <textarea name="message" className="field" />
            <Button className="contact--btn" type="submit" value="Send">
              Contact Us
            </Button>
            {/* <input type="submit" value="Send" className="contact--btn" /> */}
          </form>
        </div>
      </div>
    </div>
  );
}
