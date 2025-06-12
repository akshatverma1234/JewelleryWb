"use client";
import React, { useState } from "react";
import AdsBannerSlider from "@/components/AdsBannerSlider/index";
import CategoriesSlider from "@/components/CategorySlider/index";
import Header from "@/components/Header/index";
import HomeSlider from "@/components/HomeSlider/index";
import { FaShippingFast } from "react-icons/fa";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "@/components/ProductsSlider/index";
import Footer from "@/components/Footer/index";
import Drawer from "@mui/material/Drawer";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <HomeSlider />
      <CategoriesSlider />

      <section className="bg-white !py-8 !px-20">
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[24px] font-[600]">Popular Products</h2>
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
          <ProductsSlider items={5} />
        </div>
      </section>
      <section className="!py-16 !pt-2 bg-white">
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

      <section className="!py-5 !pt-0 bg-white">
        <div className="container">
          <h2 className="text-[24px] font-[600]">Latest Products</h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="!py-5 !pt-0 bg-white">
        <div className="container">
          <h2 className="text-[24px] font-[600]">Featured Products</h2>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>
    </div>
  );
};

export default Home;
