"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IoClose } from "react-icons/io5";
import Slide from "@mui/material/Slide";
import { Button } from "@mui/material";
import ProductAdd from "@/app/products/upload/page";
import AddHomeSlide from "@/components/HomeSlideBanners/addHomeSlide";
import AddCategory from "@/components/AddCategory";
import AddSubCategory from "@/components/AddSubCategory";
import toast, { Toaster } from "react-hot-toast";
import { fetchData } from "@/utils/api";

const MyContext = createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const AppProvider = ({ children }) => {
  const [isOpenSideBar, setOpenSideBar] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenPanel, setOpenPanel] = useState({
    open: false,
    model: "",
  });
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token !== undefined && token !== null && token !== "") {
      setIsLogin(true);

      fetchData(`/api/user/user-details`).then((res) => {
        setUserData(res.data);
      });
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const values = {
    isOpenSideBar,
    setOpenSideBar,
    isLogin,
    setIsLogin,
    isOpenPanel,
    setOpenPanel,
    openAlertBox,
    setUserData,
    userData,
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
        <Dialog
          fullScreen
          open={isOpenPanel.open}
          onClose={() =>
            setOpenPanel({
              open: false,
            })
          }
          slots={{
            transition: Transition,
          }}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() =>
                  setOpenPanel({
                    open: false,
                  })
                }
                aria-label="close"
              >
                <IoClose className="text-gray-700" />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <span className="text-gray-700">{isOpenPanel?.model}</span>
              </Typography>
            </Toolbar>
          </AppBar>
          {isOpenPanel?.model === "Add Product" && <ProductAdd />}
          {isOpenPanel?.model === "Add Home Slide" && <AddHomeSlide />}
          {isOpenPanel?.model === "Add New Category" && <AddCategory />}
          {isOpenPanel?.model === "Add New Sub Category" && <AddSubCategory />}
        </Dialog>
      </MyContext.Provider>
    </>
  );
};

export default AppProvider;
export { MyContext };
