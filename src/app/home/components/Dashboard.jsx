"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Dashboard = ({ data }) => {
  const [circle, setCircle] = useState([]);
  const [count, setCount] = useState(0);
  const router = useRouter();

  console.log("circle", circle);
  console.log("count", count);

  const addCircle = async () => {
    setCircle([...circle, { id: circle.length, color: "white" }]);
    setCount((prev) => prev + 1);

    const res = await fetch("/api/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Umashankar",
        contact: 9823191415,
      }),
    });
    const finalResult = await res.json();
    console.log("res after adding the data", finalResult);
    if (finalResult.ok) {
      alert("user iunserted successfully");
    }
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

  const nestedRoute = () => {
    router.push("home/subHome");
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
        <br />
      </div>
      <br />
      <div className="cursor-pointer bg-black text-white text-[30px] text-center align-center mt-[20px]">
        <button onClick={nestedRoute}>Add nested route</button>
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
