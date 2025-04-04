"use server";
import React from "react";
import Dashboard from "./Dashboard";

const DashboardSSR = async () => {
  const userData = await fetch(`${process.env.LOCALHOST}/api/Users`)
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      console.log("error fetching the Users data", err);
    });
  console.log("userData", userData);

  const arr = [2, 4, 3, 7, 5, 8];

  const swap = (arr, ind) => {
    let swap1 = arr.slice(ind);
    console.log("swap1", swap1);
    let swap2 = arr.slice(0, ind);
    return [...swap1, ...swap2];
  };

  const secondSmallest = (num) => {
    return num.sort((a, b) => a - b)[1];
  };

  const sSmall = secondSmallest(arr);
  console.log("sSmall", sSmall);

  const num = swap(arr, 2);
  console.log("num", num);

  return <Dashboard data={userData} />;
};

export default DashboardSSR;
