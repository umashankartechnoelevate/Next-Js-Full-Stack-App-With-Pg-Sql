import React from "react";
import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState();

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  return {count ,increment , decrement,reset}
};
