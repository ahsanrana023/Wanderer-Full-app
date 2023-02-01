import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminTourScreen() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [
    {
      title: "tourid",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    { title: "maxcount", dataIndex: "maxcount", key: "maxcount" },
    { title: "phonenumber", dataIndex: "phonenumber", key: "phonenumber" },
    { title: "rentperday", dataIndex: "rentperday", key: "rentperday" },
    { title: "type", dataIndex: "type", key: "type" },
    { title: "delete", dataIndex: "delete", key: "delete" },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/tours/getalltours")).data;
      setTours(data);
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
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Tour ID</th>
              <th scope="col">Name</th>
              <th scope="col">Descriptions</th>
              <th scope="col">Phone</th>
              <th>Cost</th>
              <th>Created At</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, index) => (
              <tr style={{ marginTop: "10px" }}>
                <td>{tour._id}</td>
                <td>{tour.name}</td>
                <td>{tour.description.slice(0, 40)}...</td>
                <td>{tour.phonenumber}</td>
                <td>{tour.rentperday}</td>
                <td>{tour.createdAt}</td>
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

export default AdminTourScreen;
