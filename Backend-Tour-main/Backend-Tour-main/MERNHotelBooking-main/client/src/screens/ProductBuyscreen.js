import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Shoe from "../images/Nike-Shoe.png";

function ProductBuyscreen({ match }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [product, setProduct] = useState({});
  const [price, setPrice] = useState(0);

  const productid = match.params.productid;
  console.log(`Product is id ${productid}`);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      window.location.href = "/login";
    }
    async function fetchMyAPI() {
      try {
        setError("");
        setLoading(true);
        const data = (
          await axios.post("/api/products/getproductsbyid", {
            productid: match.params.productid,
          })
        ).data;
        //console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    }

    fetchMyAPI();
  }, []);

  useEffect(() => {
    // const price = 15 * 100;
    setPrice(product.price);
  }, [product]);

  const onToken = async (token) => {
    console.log(token);
    const Booking = {
      product,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,

      price,
      token,
    };

    try {
      setLoading(false);
      const result = await axios.post("/api/buyproducts/reserve", Booking);
      console.log(result);
      setLoading(false);
      Swal.fire(
        "Congratulations",
        "Your Buy Product Successfully",
        "success"
      ).then((result) => {
        window.location.href = "/";
      });
    } catch (error) {
      setError(error);
      Swal.fire("Opps", "Error:" + error, "error");
    }
    setLoading(false);
  };

  return (
    <div className="m-5">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div className="row justify-content-center mt-5 bs">
          <div className="col-md-6">
            <h1>{product.name}</h1>
            {/* <img src={product.imageurls[0]} alt="" className="bigimg" /> */}
          </div>
          <div className="col-md-6">
            <div style={{ textAlign: "right" }}>
              <h1 style={{ fontWeight: "bold", color: "#1c92d2" }}>
                Buy Details
              </h1>
              <img src={Shoe} alt="" className="bigimg" />
              <hr />
              <b>
                <p>
                  Name : {JSON.parse(localStorage.getItem("currentUser")).name}
                </p>
              </b>
            </div>
            <div style={{ textAlign: "right" }}>
              <hr />
              <b>
                <p>Price : {price}</p>
              </b>
            </div>

            <div style={{ float: "right" }}>
              <StripeCheckout
                amount={price * 100}
                currency="USD"
                token={onToken}
                stripeKey="pk_test_51M2qZEJdqzfSzjlZrwNofnmcIZtUP3D9f8JRh3mCzj4f2kmBcXaHarx6pCr7D4dLBVWaHidXsY7MctqwxUwD0BQe00dGUcMYUU"
              >
                <button className="btn btn-primary">Pay Now</button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductBuyscreen;
