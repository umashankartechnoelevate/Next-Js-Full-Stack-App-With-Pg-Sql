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

  //promise wth promise.allsettled and promise.all started
  //suppose there are multiple API calls and you want the any of api data if any one fails then use allSettled. or if you want all API data then only final response then use promise.all
  //promise.allSettled4
  async function fetchAllApisWithAllSettled() {
    //1st method
    const result = await promise.allSettled([
      firstAPI(),
      secondApi(),
      thirdAPI(),
    ]);

    const firstResponse =
      result[0].status === "fulfilled" ? result[0].value : [];

    // return {
    //   firstRes: firstResponse,
    // };

    //2nd method
    const [res1, res2, res3] = result;
    const firstResponse1 = res1.status === "fulfilled" ? res1.value : [];
    const secondResponse = res2.status === "fulfilled" ? res2.value : [];
    const thirdResponse = res3.status === "fulfilled" ? res3.value : [];

    // return {
    //   firstRes: firstResponse,
    // };

    //3rd method
    const [resp1, resp2, resp3] = await promise.allSettled([
      firstAPi(),
      secondApi(),
      thirdAPi(),
    ]);
    const firstResponse2 = resp1.status === fulfilled ? resp1.value : [];
    const secondResponse2 = resp1.status === fulfilled ? resp1.value : [];
    const thirdResponse2 = resp1.status === fulfilled ? resp1.value : [];
  }
  //promise wth promise.allsettled and promise.all ended

  //promise.all started
  async function fetchAllAPIsWithPromiseAll() {
    try {
      const result = await promise.all([FirstApi(), SecondApi(), ThirdApi()]);

      const [res1, res2, res3] = [result];
      return {
        firstApiData: res1,
        secondApiData: res2,
        thirdApiData: res3,
      };
    } catch {
      console.log("error fetching the data");
    }
  }
  //promise.all ended

  return <Dashboard data={userData} />;
};

export default DashboardSSR;
