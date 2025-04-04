"use client";
import React, { useState } from "react";

const Dashboard = ({ data }) => {
  const [circle, setCircle] = useState([]);
  const [count, setCount] = useState(0);

  console.log("circle", circle);
  console.log("count", count);

  const addCircle = () => {
    setCircle([...circle, { id: circle.length, color: "white" }]);
    setCount((prev) => prev + 1);
  };

  const circleClick = (id) => {
    let matchedId = circle.find((cir) => cir.id === id);
    console.log("matched circle id", matchedId);
    setCircle((prevCircles) =>
      prevCircles.map((circle) => {
        if (circle.id === id) {
          const newColor = circle.color === "gray" ? "white" : "gray";
          return { ...circle, color: newColor };
        } else {
          return circle;
        }
      })
    );
  };

  return (
    <>
      <div className="text-black text-[50px] text-center align-center">
        data from data base
      </div>
      {data?.map((data) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <p className="text-black text-[30px] text-center align-center">
              {data.id}
            </p>
            <p className="text-black text-[50px] text-center align-center">
              {data.name}
            </p>
          </div>
        );
      })}

      <div className="cursor-pointer bg-black text-white text-[30px] text-center align-center mt-[20px]">
        <button onClick={addCircle}>Add Circle</button>
      </div>

      {circle?.map((cir) => {
        return (
          <>
            <div
              onClick={() => circleClick(cir.id)}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: cir.color,
                cursor: "pointer",
                border: "1px solid black",
              }}
            ></div>
          </>
        );
      })}
    </>
  );
};

export default Dashboard;
