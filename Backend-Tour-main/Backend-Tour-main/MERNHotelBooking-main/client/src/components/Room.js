import React, { useState, useEffect } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./room.css";
function Room({ room, fromDate, toDate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div className="hotel--card">
          <img src={room.imageurls[0]} className="smallimg" alt="" />
          <div style={{ padding: "20px" }}>
            <h1>{room.name}</h1>

            <p>Max Count : {room.maxcount}</p>
            <p>Phone Number : {room.phonenumber}</p>
            <p>City : {room.city}</p>

            <div style={{ float: "right" }}>
              {fromDate && toDate && (
                <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
                  <button>Book Now</button>
                </Link>
              )}

              <button onClick={handleShow}>View Detail</button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src={url}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Room;
