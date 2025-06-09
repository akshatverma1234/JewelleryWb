import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import Rating from "@mui/material/Rating";

const CartPage = () => {
  return (
    <section className="section !py-5 !pb-10">
      <div className="container !w-[80%] !min-w-[80%] flex">
        <div className="leftPart !w-[75%]">
          <h2>Your Cart</h2>
          <p className="!mt-0">
            There are <span className="font-bold text-amber-600">2</span>{" "}
            products in your cart
          </p>

          <div className="rounded-md shadow-md !p-5 bg-white">
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
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                />
                <div className="flex items-center gap-4 !mt-2">
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] !py-1 !px-2 rounded-md cursor-pointer">
                    Qty: 1 <FaAngleDown />
                  </span>
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
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                />
                <div className="flex items-center gap-4 !mt-2">
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] !py-1 !px-2 rounded-md cursor-pointer">
                    Qty: 1 <FaAngleDown />
                  </span>
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
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                />
                <div className="flex items-center gap-4 !mt-2">
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] !py-1 !px-2 rounded-md cursor-pointer">
                    Qty: 1 <FaAngleDown />
                  </span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
