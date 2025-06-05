import React from "react";

export const Button = ({ label, background }) => {
  return (
    <>
      <button style={{ background: { background } }}>{label}</button>
    </>
  );
};
