"use client";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@mui/material";

const MyListItems = (props) => {
  return (
    <div className="cartItem !w-full !p-3 flex items-center gap-4 !pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img !w-[15%] rounded-md overflow-hidden">
        <Link href="/product/234" className="group">
          <img
            src="https://media.istockphoto.com/id/1427466087/photo/woman-beauty-with-smooth-skin-make-up-and-golden-jewelry-beautiful-girl-with-perfect-lips-and.jpg?s=612x612&w=0&k=20&c=B3ngEKRxzyKWlHX3dFZT8IiwuVPo3YPsWUDzz2TCUzY="
            className="!w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info !w-[85%] relative">
        <IoMdClose className="cursor-pointer top-[0px] right-[0px] absolute text-[22px]" />
        <span>Tanishq</span>
        <h3>
          <Link className="link" href="/product/1">
            The Dulcique Band For Her
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-3 !mt-2 !mb-2">
          <span className="price  font-[600] text-[14px]">₹1200</span>
          <span className="oldPrice line-through text-[#a0a0a0] text-[14px] font-[500]">
            ₹1200
          </span>
          <span className="price text-[#d3675b] font-[600] text-[14px]">
            55% OFF
          </span>
        </div>

        <Button className="btn-org btn-sm">Add to Cart</Button>
      </div>
    </div>
  );
};

export default MyListItems;
