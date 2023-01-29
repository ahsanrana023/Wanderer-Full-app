import React, { useState, useEffect } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Shoe from "../images/Nike-Shoe.png";
import "./product.css";
function Product({ product }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div className="product--card">
          <img src={Shoe} alt="Product Shoes" className="product--img" />
          <h4>{product.name}</h4>
          <p>{product.dicription}</p>
          <h2>{product.price}$</h2>
          <button
            onClick={handleShow}
            style={{ marginRight: "40px", marginLeft: "10px" }}
            className="reserve--btn"
          >
            View Detail
          </button>

          <Link to={`/buyproducts/${product._id}`}>
            <button
              style={{ marginRight: "40px", marginLeft: "10px" }}
              className="reserve--btn"
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {product.imageurls.map((url) => {
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
          <p>{product.discription}</p>
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

export default Product;
