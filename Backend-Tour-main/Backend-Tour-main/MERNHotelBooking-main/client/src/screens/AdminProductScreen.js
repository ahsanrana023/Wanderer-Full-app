import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";

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

  return (
    <div className="row">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <>
          <div className="col md-12">
            <button className="btn btn-success" onClick={fetchMyData}>
              Refresh
            </button>
          </div>
          <div className="col-md-12">
            <Table columns={columns} dataSource={products} />
          </div>
        </>
      )}
    </div>
  );
}

export default AdminProductScreen;
