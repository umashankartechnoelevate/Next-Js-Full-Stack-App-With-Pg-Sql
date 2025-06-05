import React, { lazy } from "react";
import Interview from "./Interview";

const lazyLoaded = React.lazy(() => import("./Interview"));

const page = () => {
  const list = [
    "India",
    "USA",
    "Russia",
    "India",
    "China",
    "Australia",
    "India",
    "China",
    "Australia",
  ];

  const countOFList = list.reduce((acc, count) => {
    acc[count] = (acc[count] || 0) + 1;
    return acc;
  }, {});

  console.log("count of list", countOFList);

  const myName = "I am Umashankar Muragyappa Jabagond";

  const reversedSentence = myName?.split(" ").reverse().join(" ");

  console.log("reversed sentence", reversedSentence);

  const original = { name: "Piyush", age: 25 };
  let copy = original;

  copy = { name: "Amit", age: 40 };

  console.log("Original:", original);
  console.log("Copy:", copy);

  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  const students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
  ];

  let totalSum = 0;
  const sumOfStiudents = students?.map((student) => {
    console.log("student", student);
    if (student.marks < 60) {
      let finalMarks = student.marks + 20;
      student.marks = finalMarks;
    }
    console.log("student marks", student.marks);

    if (student.marks > 60) {
      totalSum = (totalSum || 0) + student.marks;
    }

    console.log("total sum", totalSum);
  });

  function func() {
    var a = "Hello";
    let b = "Namaste";
    if (true) {
      let a = "Hi";
      // var b = "Bye"; it will throw an error because 'b' is already declared with 'let'
      console.log(a);
      console.log(b);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>HI use this for interview</h1>
      <br />
      <p>client component</p>
      <Interview />
    </div>
  );
};

export default page;
