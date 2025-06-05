"use client";
import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const SideBar = () => {
  const [isOpenCategory, setOpenCategory] = useState(true);
  const [isOpenAvailable, setOpenAvailable] = useState(true);

  return (
    <>
      <aside className="sideBar !py-5">
        <div className="box1">
          <h3 className="!w-full !mb-3 text-[18px] font-[600] flex items-center !pr-5">
            Shop By Categories
            <Button
              className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
              onClick={() => setOpenCategory(!isOpenCategory)}
            >
              {isOpenCategory === true ? <FaAngleUp /> : <FaAngleDown />}
            </Button>
          </h3>
          <Collapse isOpened={isOpenCategory}>
            <div className="scroll  !px-4 relative -left-[13px] !mb-4">
              <FormControlLabel
                control={<Checkbox size="small " />}
                label="Rings"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small " />}
                label="Pendants"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small " />}
                label="Earings"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small " />}
                label="Payal"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small " />}
                label="Chains"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small " />}
                label="Bracelet"
                className="w-full"
              />
            </div>
          </Collapse>
        </div>

        <div className="box1 !mt-3">
          <h3 className="!w-full !mb-3 text-[18px] font-[600] flex items-center !pr-5">
            Availability
            <Button
              className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
              onClick={() => setOpenAvailable(!isOpenAvailable)}
            >
              {isOpenAvailable === true ? <FaAngleUp /> : <FaAngleDown />}
            </Button>
          </h3>
          <Collapse isOpened={isOpenAvailable}>
            <div className="scroll  !px-4 relative -left-[13px]">
              <FormControlLabel
                control={<Checkbox size="small " />}
                label="Available (17)"
                className="w-full"
              />
            </div>
          </Collapse>
          <Collapse isOpened={isOpenAvailable}>
            <div className="scroll  !px-4 relative -left-[13px]">
              <FormControlLabel
                control={<Checkbox size="small " />}
                label="In Stock (17)"
                className="w-full"
              />
            </div>
          </Collapse>
          <Collapse isOpened={isOpenAvailable}>
            <div className="scroll  !px-4 relative -left-[13px]">
              <FormControlLabel
                control={<Checkbox size="small " />}
                label="Not Available (1)"
                className="w-full"
              />
            </div>
          </Collapse>
        </div>
        <div className="box1 !mt-4 ">
          <h3 className="!w-full !mb-3 text-[18px] font-[600] flex items-center !pr-5">
            Filter By Price
          </h3>
          <RangeSlider className="!w-full" />
          <div className="flex !pt-4 !pb-2 priceRange">
            <span className="text-[13px]">
              From: <strong className="text-black font-[600]">Rs: {100}</strong>
            </span>
            <span className="!ml-auto text-[13px]">
              From:{" "}
              <strong className="text-black font-[600]">Rs: {5000}</strong>
            </span>
          </div>
        </div>

        <div className="box1 !mt-4 ">
          <h3 className="!w-full !mb-3 text-[16px] font-[600] flex items-center !pr-5">
            Filter By Rating
          </h3>
          <div className="w-full">
            <Rating name="size-small" defaultValue={5} size="small" readOnly />
          </div>
          <div className="w-full">
            <Rating name="size-small" defaultValue={4} size="small" readOnly />
          </div>
          <div className="w-full">
            <Rating name="size-small" defaultValue={3} size="small" readOnly />
          </div>
          <div className="w-full">
            <Rating name="size-small" defaultValue={2} size="small" readOnly />
          </div>
          <div className="w-full">
            <Rating name="size-small" defaultValue={1} size="small" readOnly />
          </div>
        </div>
      </aside>
    </>
  );
};
export default SideBar;
