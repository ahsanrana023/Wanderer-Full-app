import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminRoomScreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [
    {
      title: "roomid",
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
    { title: "city", dataIndex: "city", key: "city" },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/rooms/getallrooms")).data;
      setRooms(data);
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
              <th scope="col">Room ID</th>
              <th scope="col">Name</th>
              <th scope="col">Max Count</th>
              <th scope="col">Phone</th>
              <th>Rent Per Day</th>
              <th>City</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr style={{ marginTop: "10px" }}>
                <td>{room._id}</td>
                <td>{room.name}</td>
                <td>{room.maxcount}</td>
                <td>{room.phonenumber}</td>
                <td>{room.rentperday}</td>
                <td>{room.city}</td>
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

export default AdminRoomScreen;
