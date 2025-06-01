"use client";
import { Button } from "@mui/material";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

export const CartPanel = ({ cartItems }) => {
  return (
    <div className="relative h-[calc(100vh-64px)] flex flex-col justify-between">
      {/* Scrollable Items */}
      <div className="overflow-y-auto max-h-[calc(100vh-240px)] px-4 pt-4">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="cartItem w-full flex items-start gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 relative"
          >
            <div className="img overflow-hidden h-[100px] w-[100px] rounded-md flex-shrink-0">
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt="Product"
              />
            </div>
            <div className="info w-full pr-6 relative">
              <h4 className="text-[16px] font-[500]">{item.name}</h4>
              <p className="flex items-center gap-5 mt-2 mb-2">
                <span>
                  Qty : <span>{item.qty}</span>
                </span>
                <span className="text-primary font-bold">
                  Price: ${item.price}
                </span>
              </p>
              <MdDeleteOutline className="absolute top-0 right-0 cursor-pointer text-[20px] transition-all hover:text-red-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Bottom Section */}
      <div className="w-full bg-white border-t border-[rgba(0,0,0,0.1)] p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[16px] font-[600]">
            {cartItems.length} {cartItems.length > 1 ? "items" : "item"}
          </span>
          <span className="text-red-400 font-bold">
            ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}
          </span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[16px] font-[600]">Shipping</span>
          <span className="text-red-400 font-bold">$8.00</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[16px] font-[600]">Total (tax.excl.)</span>
          <span className="text-red-400 font-bold">
            $
            {cartItems.reduce((acc, item) => acc + item.price * item.qty, 0) +
              8}
          </span>
        </div>
        <div className="flex items-center justify-between w-full gap-2">
          <Button className="w-[50%]" variant="outlined">
            View Cart
          </Button>
          <Button className="w-[50%]" variant="contained" color="primary">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
