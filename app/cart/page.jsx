import React from "react";
import Button from "@mui/material/Button";
import CartItem from "@/components/CartItem/index";
import { IoBagHandle } from "react-icons/io5";

const CartPage = () => {
  return (
    <section className="section !py-10 !pb-10">
      <div className="container !w-[80%] !min-w-[80%] flex gap-5">
        <div className="leftPart !w-[70%]">
          <div className="rounded-md shadow-md bg-white !p-5">
            <div className="!py-2 !px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[20px]">Your Cart</h2>
              <p className="!mt-0">
                There are <span className="font-bold text-amber-600">2</span>{" "}
                products in your cart
              </p>
            </div>

            <CartItem qty={1} />
          </div>
        </div>

        <div className="rightPart !w-[30%]">
          <div className="rounded-md shadow-md bg-white !p-5">
            <h3 className="!pb-3">Cart Totals</h3>
            <hr />
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-pink-700 font-bold">₹12,000</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-bold">Free</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Estimate for</span>
              <span className="font-bold">India</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="text-pink-700 font-bold">₹12,000</span>
            </p>

            <Button className="btn-org btn-lg !w-full flex gap-2">
              <IoBagHandle className="text-[20px]" />
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
