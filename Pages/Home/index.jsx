"use client";
import React, { useState } from "react";
import AdsBannerSlider from "@/components/AdsBannerSlider/index";
import CategoriesSlider from "@/components/CategorySlider/index";
import Header from "@/components/Header/index";
import HomeSlider from "@/components/HomeSlider/index";
import { FaShippingFast } from "react-icons/fa";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Header />
      <HomeSlider />
      <CategoriesSlider />

      <section className="bg-white !py-8  !px-20">
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of the November
              </p>
            </div>
            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Rings" />
                <Tab label="Pendants" />
                <Tab label="Earings" />
                <Tab label="Payal" />
                <Tab label="Chains" />
                <Tab label="Bracelets" />
                <Tab label="Necklace" />
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section className="!py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] !m-auto !py-4 !p-4 border-2 border-red-500 flex items-center justify-between rounded-md !mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2 flex items-center">
              <p className="md-0 font-[500] ">
                Free Delivery Now on First Order and over $200
              </p>
            </div>
            <p className="text-[25px] font-[600]">- Only $200*</p>
          </div>
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Drawer
        anchor="right"
        open={openCart}
        onClose={toggleDrawerCart(false)}
        className=" w-[250px]"
      >
        <div className="flex items-center justify-between p-4 border-b border-[rgba(0,0,0,0.1)] ">
          <h1>Shopping Cart (1)</h1>
          <IoMdClose
            className="text-[20px] cursor-pointer"
            onClick={() => setOpenCart(false)}
          />
        </div>
        <CartPanel cartItems={cartItems} />
      </Drawer> */}
    </div>
  );
};

export default Home;
