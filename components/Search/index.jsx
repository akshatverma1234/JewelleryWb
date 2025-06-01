import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#F8F8F8] !rounded-[15px] relative  p-5">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full h-[45px] bg-inherit p-2 outline-none border-none focus:outline-none focus:ring-0 text-[18px]"
      />
      <Button className="!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black">
        <IoIosSearch className="text-[#333333] text-xl" />
      </Button>
    </div>
  );
};

export default Search;
