import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminProductScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [
    {
      title: "productid",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    { title: "price", dataIndex: "price", key: "price" },
    { title: "dicription", dataIndex: "dicription", key: "dicription" },
    { title: "type", dataIndex: "type", key: "type" },
    { title: "delete", dataIndex: "delete", key: "delete" },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/products/getallproducts")).data;
      setProducts(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMyData();
  }, []);
  console.log(products);
  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Name</th>
              <th scope="col">Descriptions</th>
              <th scope="col">Price</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr style={{ marginTop: "10px" }}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.discription}</td>
                {/* <td>{product.discription.slice(0, 40)}...</td> */}
                <td>{product.price}</td>

                <td>
                  <Link
                    style={{
                      color: "#eee",
                      backgroundColor: "#c0392b",
                      padding: "10px",
                      marginTop: "10px",
                      borderRadius: "4px",
                    }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProductScreen;
