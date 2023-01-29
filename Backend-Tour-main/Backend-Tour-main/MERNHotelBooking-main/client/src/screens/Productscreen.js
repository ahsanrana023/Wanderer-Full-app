import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import Shoe from "../images/Nike-Shoe.png";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "./productscreen.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

function Productscreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const [duplicateTours, setDuplicateTours] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        setError("");
        setLoading(true);
        const data = (await axios.get("/api/products/getallproducts")).data;
        //console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    }

    fetchMyAPI();
  }, []);

  function filterBySearch() {
    const tempProducts = duplicateTours.filter((x) =>
      x.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setProducts(tempProducts);
  }

  return (
    <>
      <div className="product--header">
        <div className="product--details">
          <h4
            style={{ color: "#2898b6", fontWeight: "bold", fontSize: "36px" }}
          >
            Featured Product
          </h4>
          <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
            Nike Air Max 90
          </h1>
          <h1>50$</h1>
          <p style={{ fontSize: "16px", marginBottom: "15px" }}>
            Nike Shoe Provides you the best experience while running and jogging
            and hiking through the mountians.
            <br /> Get the most favourite product on the store.
          </p>
          {/* <button className="features-btn">Reserve the Product</button> */}
        </div>
        <div>
          <img src={Shoe} alt="Shoe" className="featured--product" />
        </div>
      </div>
      <div className="container">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search Products"
            value={searchKey}
            style={{ marginTop: "30px" }}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            onKeyUp={filterBySearch}
          />
        </div>
      </div>

      <div
        className="row justify-content-center mt-5"
        style={{ padding: "50px" }}
      >
        {loading ? (
          <Loader></Loader>
        ) : error.length > 0 ? (
          <Error msg={error}></Error>
        ) : (
          products.map((x) => {
            return (
              <div className="tour-row" data-aos="flip-down">
                <Product product={x} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Productscreen;
