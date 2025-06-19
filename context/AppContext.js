"use client";
import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpenSideBar, setOpenSideBar] = useState(true);
  const values = {
    isOpenSideBar,
    setOpenSideBar,
  };
  return (
    <>
      <MyContext.Provider value={values}>{children}</MyContext.Provider>
    </>
  );
};

export default AppProvider;
export { MyContext };
