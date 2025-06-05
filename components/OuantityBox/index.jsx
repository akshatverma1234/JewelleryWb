"use client";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaAngleUp, FaRegHeart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
const QuantityBox = () => {
  const [qtyVal, setQtyValue] = useState(1);
  const plusQty = () => {
    setQtyValue(qtyVal + 1);
  };
  const minusQty = () => {
    if (qtyVal === 1) {
      setQtyValue(1);
    } else {
      setQtyValue(qtyVal - 1);
    }
  };

  return (
    <div className="QtyBox flex items-center relative">
      <input
        type="number"
        className="w-full h-[40px] !p-2 !pl-5 text-[15px] focus:!outline-hidden border border-[rgba(0,0,0,0.2)] rounded-md"
        value={qtyVal}
      />
      <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50">
        <Button
          className="!min-w-[25px] !w-[25px] !h-[20px] !text-black !rounded-none hover:!bg-[#f1f1f1]"
          onClick={plusQty}
        >
          <FaAngleUp className="text-[12px] opacity-55" />
        </Button>
        <Button
          className="!min-w-[25px] !w-[25px] !h-[20px]  !text-black !rounded-none hover:!bg-[#f1f1f1]"
          onClick={minusQty}
        >
          <FaAngleDown className="text-[12px] opacity-55" />
        </Button>
      </div>
    </div>
  );
};

export default QuantityBox;
