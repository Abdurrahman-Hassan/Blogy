import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [myData, setMyData] = useState({});

  const value = {
    myData,
    setMyData,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
