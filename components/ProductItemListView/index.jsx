import React from "react";
import "./style.css";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { BsCart3 } from "react-icons/bs";

const ProductItems = () => {
  return (
    <div className="productItem rounded-md overflow-hidden shadow-lg box flex items-center">
      <div className="imgWrapper w-[25%] overflow-hidden rounded-md relative group">
        <Link href="/">
          <div className="img h-[230px] overflow-hidden">
            <img
              src="https://www.candere.com/media/jewellery/images/GR00103__1.jpeg"
              className="w-full"
            />
            <img
              src="https://kinclimg4.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIRS0388R33_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-26826.png"
              className="w-full transition-all  absolute duration-600 opacity-0 top-0 left-0 group-hover:opacity-100"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff9800] text-white rounded-lg !p-1 font-[500] text-[14px]">
          10%
        </span>
        <div className="actions absolute !top-[-100px] !right-[5px] !z-50 flex items-center gap-2 flex-col !w-[50px] group-hover:!top-[15px] transition-all duration-300 opacity-0 group-hover:opacity-100">
          <Tooltip title="Product Details" placement="right">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#4338ca] hover:text-white group">
              <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
          <Tooltip title="Wishlist" placement="right">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-[#4338ca] hover:!text-white group">
              <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="info !p-3 !py-5 !px-8 !w-[75%]">
        <h6 className="text-[15px]">
          <Link href="/" className="link transition-all">
            Gold Ring
          </Link>
        </h6>
        <h3 className="text-[18px] title !mt-3 !mb-3 font-[600] text-black">
          <Link href="/" className="link transition-all">
            Joyalukkas Enchant Gold Ring
          </Link>
        </h3>
        <p className="text-[14px] !mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industryLorem Ipsum is simply dummy text of the printing and
          typesetting industry
        </p>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <div className="flex items-center gap-4">
          <span className="price text-[#d9230f] font-[600] text-[15px]">
            ₹1200
          </span>
          <span className="oldPrice line-through text-[#a0a0a0] text-[15px] font-[500]">
            ₹1200
          </span>
        </div>
        <div className="!mt-3">
          <Button className="btn-org !mt-3 flex gap-2">
            <BsCart3 className="text-[20px]" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
