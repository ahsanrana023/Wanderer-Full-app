import React, { useState, useEffect } from "react";

import { Tabs } from "antd";
import AdminBookingScreen from "./AdminBookingScreen";
import AdminRoomScreen from "./AdminRoomScreen";
import AdminUserScreen from "./AdminUserScreen";
import AdminAddRoomScreen from "./AdminAddRoomScreen";
import AdminTourScreen from "./AdminTourScreen";
import AdminProductScreen from "./AdminProductScreen";
import AdminTourBookedScreen from "./AdminTourBookedScreen";
import AdminAddTourScreen from "./AdminAddTourScreen";
import AdminAddProductScreen from "./AdminAddProductScreen";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
function AdminScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user || user.isAdmin == false) {
      window.location.href = "/home";
    }
  }, []);

  return (
    <div>
      <h1 className="text-center" style={{ marginTop: "35px" }}>
        Admin Panel
      </h1>
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        style={{ marginLeft: "35px" }}
      >
        <TabPane tab="Hotel Bookings" key="1">
          <AdminBookingScreen></AdminBookingScreen>
        </TabPane>

        <TabPane tab="Tour Bookings" key="2">
          <AdminTourBookedScreen></AdminTourBookedScreen>
        </TabPane>
        <TabPane tab="Tours" key="3">
          <AdminTourScreen></AdminTourScreen>
        </TabPane>
        <TabPane tab="Hotels" key="4">
          <AdminRoomScreen></AdminRoomScreen>
        </TabPane>

        <TabPane tab="Add Room" key="5">
          <AdminAddRoomScreen></AdminAddRoomScreen>
        </TabPane>
        <TabPane tab="Users" key="6">
          <AdminUserScreen></AdminUserScreen>
        </TabPane>
        <TabPane tab="Add Tour" key="7">
          <AdminAddTourScreen></AdminAddTourScreen>
        </TabPane>
        <TabPane tab="Add Product" key="8">
          <AdminAddProductScreen></AdminAddProductScreen>
        </TabPane>
        <TabPane tab="Products" key="9">
          <AdminProductScreen></AdminProductScreen>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default AdminScreen;
