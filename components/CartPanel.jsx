"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden !py-3 !px-4 ">
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4">
          <div className="img overflow-hidden h-[100px] rounded-md">
            <img
              src="https://www.pixground.com/wp-content/uploads/2023/08/Lisa-BLACKPINK-Katana-Shut-Down-4K-Wallpaper-1081x608.jpg"
              className="w-full"
            />
          </div>

          <div className="info w-[70%] !pr-5">
            <h4 className="text-[16px] font-[500]">
              A-Line Kurti With Sharana & Dupatta
            </h4>
            <p className="flex items-center gap-5 !mt-2 !mb-2">
              <span>
                Qty : <span>2</span>
              </span>
              <span className="text-primary font-bold">Price: $25</span>
            </p>
            <MdDeleteOutline className="absolute top-[75px] right-[10px] cursor-pointer text-[20px] transition-all" />
          </div>
        </div>
      </div>
      <br />
      <div className="bottomSec !absolute bottom-[140px]  left-[10px] w-full ">
        <div className="bottomInfo !py-3 !px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col ">
          <div className="flex items-center justify-between w-full">
            <span className="text-[16px] font-[600]">1 item</span>
            <span className="text-red-400 font-bold">$86.00</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[16px] font-[600]">Shipping</span>
            <span className="text-red-400 font-bold">$8.00</span>
          </div>
        </div>

        <div className="bottomInfo !py-3 !px-4 !pb-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col !absolute">
          <div className="flex items-center justify-between w-full !p-1">
            <span className="text-[16px] font-[600]">Total (tax.excl.)</span>
            <span className="text-red-400 font-bold">$93.00</span>
          </div>
          <div className="flex items-center justify-between w-full !p-1 !pb-4">
            <span className="text-[16px] font-[600]">Shipping</span>
            <span className="text-red-400 font-bold">$8.00</span>
          </div>

          <div className="flex items-center justify-between w-full gap-2">
            <Link href="/cart" className="w-[50%] block">
              <Button className="btn-org btn-lg !w-full">View Cart</Button>
            </Link>

            <Link href="/checkout" className="w-[50%] block">
              <Button className="btn-org btn-lg !w-full">Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPanel;
