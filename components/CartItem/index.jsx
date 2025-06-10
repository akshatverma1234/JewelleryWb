"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Rating from "@mui/material/Rating";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

const CartItem = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);
  const openQty = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };
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
        <div className="flex items-center gap-4 !mt-2">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] !py-1 !px-2 rounded-md cursor-pointer"
              onClick={handleClick}
            >
              Qty: {selectedQty} <FaAngleDown />
            </span>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
              <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
              <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
              <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
              <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
              <MenuItem onClick={() => handleCloseQty(6)}>6</MenuItem>
              <MenuItem onClick={() => handleCloseQty(7)}>7</MenuItem>
              <MenuItem onClick={() => handleCloseQty(8)}>8</MenuItem>
              <MenuItem onClick={() => handleCloseQty(9)}>9</MenuItem>
              <MenuItem onClick={() => handleCloseQty(10)}>10</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="flex items-center gap-3 !mt-2">
          <span className="price  font-[600] text-[14px]">₹1200</span>
          <span className="oldPrice line-through text-[#a0a0a0] text-[14px] font-[500]">
            ₹1200
          </span>
          <span className="price text-[#d3675b] font-[600] text-[14px]">
            55% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
