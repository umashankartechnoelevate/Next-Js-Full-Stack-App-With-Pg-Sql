"use client";
import { createContext } from "react";

const UserContextProd = createContext();

const UserContextProvider = ({ children }) => {
  return (
    <UserContextProd.Provider value={{}}>{children}</UserContextProd.Provider>
  );
};

export default UserContextProvider;
