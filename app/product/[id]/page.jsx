"use client";
import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductZoom from "@/components/ProductZoom/index";
import Rating from "@mui/material/Rating";
import QuantityBox from "@/components/OuantityBox/index";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Button, Tooltip } from "@mui/material";
import { FiShare2 } from "react-icons/fi";
import TextField from "@mui/material/TextField";
import ProductsSlider from "@/components/ProductsSlider/index";
import ProductDetailsComponent from "@/components/ProductDetails/index";

const ProductDetails = () => {
  const [activeTab, setActiceTab] = useState(0);

  return (
    <>
      <div className="!py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              className="link transition !text-[14px]"
              href="/"
            >
              Rings
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              className="link transition !text-[14px]"
            >
              The Rosario Ring
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white !py-5">
        <div className="container flex gap-8">
          <div className="productZomContainer !w-[40%] ">
            <ProductZoom />
          </div>

          <div className="productContent !w-[60%] !pr-10 !pl-5">
            <ProductDetailsComponent />
          </div>
        </div>

        <div className="container !pt-10">
          <div className="flex items-center gap-8">
            <span
              className={`text-[17px] link cursor-pointer font-[500] ${
                activeTab === 0 && `text-[#d02cf5]`
              }`}
              onClick={() => setActiceTab(0)}
            >
              Product Description
            </span>
            <span
              className={`text-[17px] link cursor-pointer font-[500] ${
                activeTab === 1 && `text-[#d02cf5]`
              }`}
              onClick={() => setActiceTab(1)}
            >
              Shipping Details
            </span>
            <span
              className={`text-[17px] link cursor-pointer font-[500] ${
                activeTab === 2 && `text-[#d02cf5]`
              }`}
              onClick={() => setActiceTab(2)}
            >
              Reviews (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full !py-8 !px-8 rounded-md">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet quam quibusdam rerum provident debitis veniam dicta
                dolor consequuntur, quas, exercitationem expedita sit quo? Sed
                earum assumenda, placeat inventore ut expedita?
              </p>
              <h4>The Gold Ring</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet quam quibusdam rerum provident debitis veniam dicta
                dolor consequuntur, quas, exercitationem expedita sit quo? Sed
                earum assumenda, placeat inventore ut expedita?
              </p>
              <h4>Free Shipping and Return</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h4>Money Back Guarantee</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h4>Online Support</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full !py-8 !px-8 rounded-md bg-white">
              <ul className="!space-y-3 text-[15px] text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#4338ca] text-lg font-bold">•</span>
                  <span>Free express shipping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4338ca] text-lg font-bold">•</span>
                  <span>No questions asked 30 days return policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4338ca] !text-lg !font-bold">•</span>
                  <span>6 month warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4338ca] !text-lg !font-bold">•</span>
                  <span>Shipping internationally to 20+ countries</span>
                </li>
              </ul>

              <div className="!mt-6 text-sm text-gray-600">
                <p className="font-medium text-gray-800 !mb-1">
                  Brand owned and marketed by: Verma Jewellers Private Limited
                </p>
                <p>
                  {" "}
                  I -50, Loni Rd, behind Gopal Hospital, Pal Vihar, Raj Nagar,
                  Loni, Ghaziabad, Uttar Pradesh 201102
                </p>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] !py-8 !px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer questions & answers</h2>
                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden !mt-5 !pr-5">
                  <div className="review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden  rounded-full">
                        <img
                          src="https://st2.depositphotos.com/1037987/42002/i/450/depositphotos_420021494-stock-photo-portrait-female-owner-gift-store.jpg"
                          className="!w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Akshat Verma</h4>
                        <h5 className="texr-[13px] !mb-0">2024-12-01</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Alias debitis ducimus sapiente quisquam saepe
                          sit atque provident libero, enim deleniti?
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                </div>
                <br />
                <div className="reviewForm bg-[#fafafa] !p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>
                  <form className="w-full !mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Multiline"
                      multiline
                      className="w-full"
                      rows={4}
                    />
                    <br />
                    <br />
                    <Rating name="size-small" defaultValue={4} />
                    <div className="flex items-center !mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container !mt-8">
          <h2 className="text-[24px] font-[600] !pb-0">Related Products</h2>
          <ProductsSlider items={5} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
