"use client";
import { createContext, useContext, useState } from "react";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ProductZoom from "@/components/ProductZoom/index";
import { IoMdClose } from "react-icons/io";
import ProductDetailsComponent from "@/components/ProductDetails/index";

const MyContext = createContext();

export const AppProvider = ({ children }) => {
  const [openProductsModel, setOpenProductModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const handleCloseProductsModel = () => {
    setOpenProductModel(false);
  };

  const values = {
    setOpenProductModel,
  };
  return (
    <>
      {" "}
      <MyContext.Provider value={values}>{children}</MyContext.Provider>
      <Dialog
        open={openProductsModel}
        onClose={handleCloseProductsModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModal relative">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black !absolute !top-[15px] !right-[15px] !bg-[#f1f1f1]"
              onClick={handleCloseProductsModel}
            >
              <IoMdClose className="!text-[20px]" />
            </Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] !py-8 !px-8 !pr-16  productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppProvider;
export { MyContext };
