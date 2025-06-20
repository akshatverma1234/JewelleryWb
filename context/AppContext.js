"use client";
import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpenSideBar, setOpenSideBar] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const values = {
    isOpenSideBar,
    setOpenSideBar,
    isLogin,
    setIsLogin,
  };
  return (
    <>
      <MyContext.Provider value={values}>{children}</MyContext.Provider>
    </>
  );
};

export default AppProvider;
export { MyContext };
