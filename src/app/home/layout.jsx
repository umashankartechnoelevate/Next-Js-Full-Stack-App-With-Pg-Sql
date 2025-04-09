import React from "react";

export default function HomeLayout  ({ children })  {
  return (
    <>
      <header>this is layout for home</header>
      <main>{children}</main>
    </>
  );
};
