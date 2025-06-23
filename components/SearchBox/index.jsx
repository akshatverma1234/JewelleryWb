import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="w-full h-auto bg-[#f1f1f1] relative overflow-hidden">
      <IoSearchOutline className="absolute top-[13px] left-[10px] z-50 pointer-events-none" />
      <input
        type="text"
        className="w-full h-[40px] p-2 pl-8 focus:outline-none border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.5)] rounded-md text-[13px]"
        placeholder="Search here..."
      />
    </div>
  );
};

export default SearchBox;
