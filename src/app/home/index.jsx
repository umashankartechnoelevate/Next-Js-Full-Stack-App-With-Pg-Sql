"use server"
import React from "react";
import DashboardSSR from "./components";

const HomePage = ({ data }) => {
  console.log("user data in home page", data);
  return (
    <div>
      <DashboardSSR />
    </div>
  );
};

export default HomePage;
