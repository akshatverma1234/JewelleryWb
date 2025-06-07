import React from "react";
import Rating from "@mui/material/Rating";
import QuantityBox from "@/components/OuantityBox/index";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Button, Tooltip } from "@mui/material";
import { FiShare2 } from "react-icons/fi";

const ProductDetailsComponent = () => {
  return (
    <>
      <h1 className="text-[24px] font-[600] !mb-2">The Gold Ring</h1>
      <div className="flex items-center gap-3 ">
        <span className="text-gray-400 text-[13px]">
          Brands:{" "}
          <span className="font-[500] text-black opacity-75">Tanishq</span>
        </span>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <span className="text-[13px] cursor-pointer text-gray-600">
          Review (5)
        </span>
      </div>
      <div className="flex items-center gap-4 !mt-4">
        <span className="price text-[#d9230f] text-[20px] font-[600]">
          ₹1200
        </span>
        <span className="oldPrice line-through text-[#a0a0a0] text-[20px] font-[500]">
          ₹2000
        </span>
        <span className="text-[14px]">
          Available In Stock:{" "}
          <span className="text-green-600 text-[14px] font-bold">
            200 Items
          </span>
        </span>
      </div>
      <p className="text-[14px] !mt-4 !mb-2 text-black">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>
      <div className="flex items-center !mt-4 gap-4">
        <div className="QtyBoxWrapper w-[70px] !py-4">
          <QuantityBox />
        </div>
        <Button className="btn-org flex gap-2">
          <BsCart3 className="text-[20px]" />
          Add to Cart
        </Button>
      </div>
      <div className="flex items-center gap-2 !mt-4">
        <span className="flex items-center gap-1 text-[14px] cursor-pointer font-[500]">
          <Tooltip title="Wishlist" placement="bottom">
            <Button className="!w-[40px] !h-[40px] !min-w-[35px] !rounded-full !bg-white !text-black">
              <FaRegHeart className="text-[22px] !text-black" />
            </Button>
          </Tooltip>
        </span>

        <span className="flex items-center gap-1 text-[14px] cursor-pointer font-[500]">
          <Tooltip title="Share" placement="bottom">
            <Button className="!w-[40px] !h-[40px] !min-w-[35px] !rounded-full !bg-white !text-black">
              <FiShare2 className="text-[22px] !text-black" />
            </Button>
          </Tooltip>
        </span>
      </div>
      <p className="!mt-3 !pr-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, eos.
        Cupiditate consequuntur numquam architecto. Tempore eveniet similique
        enim dicta, qui commodi impedit reprehenderit voluptatum sit. Totam
        sequi alias animi commodi.
      </p>
    </>
  );
};

export default ProductDetailsComponent;
