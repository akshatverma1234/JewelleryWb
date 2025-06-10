"use client";
import { createContext, useContext, useState } from "react";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "@/components/ProductZoom/index";
import { IoMdClose } from "react-icons/io";
import ProductDetailsComponent from "@/components/ProductDetails/index";
import Drawer from "@mui/material/Drawer";
import CartPanel from "@/components/CartPanel";
import toast, { Toaster } from "react-hot-toast";

const MyContext = createContext();

export const AppProvider = ({ children }) => {
  const [openProductsModel, setOpenProductModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleDrawerCart = (newOpen) => {
    setOpenCartPanel(newOpen);
  };

  const handleCloseProductsModel = () => {
    setOpenProductModel(false);
  };
  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const values = {
    setOpenProductModel,
    setOpenCartPanel,
    toggleDrawerCart,
    openCartPanel,
    openAlertBox,
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <Toaster position="top-right" reverseOrder={false} />
        {children}

        {/* Product Modal */}
        <Dialog
          open={openProductsModel}
          onClose={handleCloseProductsModel}
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          className="productDetailsModal"
        >
          <DialogContent>
            <div className="flex items-center w-full productDetailsModal !relative">
              <button
                className=" !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black !absolute !top-[15px] !right-[15px] !bg-[#f1f1f1] cursor-pointer"
                onClick={handleCloseProductsModel}
              >
                <IoMdClose className="!text-[20px]" />
              </button>
              <div className="col1 w-[40%] !px-3">
                <ProductZoom />
              </div>
              <div className="col2 w-[60%] !py-8 !px-8 !pr-16  productContent">
                <ProductDetailsComponent />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Cart Panel */}
        <Drawer
          anchor="right"
          open={openCartPanel}
          onClose={() => toggleDrawerCart(false)}
          className="w-[250px]"
        >
          <div className="flex items-center justify-between !p-4 border-b border-[rgba(0,0,0,0.1)]">
            <h1>Shopping Cart (1)</h1>
            <IoMdClose
              className="!text-[20px] cursor-pointer"
              onClick={() => toggleDrawerCart(false)}
            />
          </div>
          <CartPanel />
        </Drawer>
      </MyContext.Provider>
    </>
  );
};

export default AppProvider;
export { MyContext };
