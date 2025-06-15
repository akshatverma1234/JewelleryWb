import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaRegImages } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { SiProducthunt } from "react-icons/si";
import { TbCategory2 } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="sideBar fixed top-0 left-0 bg-white w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4">
      <div className="py-2 w-full">
        <Link href="/">
          <h1 className="uppercase font-bold w-[220px] text-[20px] text-center">
            Verma Jewellers
          </h1>
        </Link>
      </div>

      <ul className="mt-4">
        <li>
          <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <MdDashboard className="text-[20px]" />
            <span>Dashboard</span>
          </Button>
        </li>
        <li>
          <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <FaRegImages className="text-[20px]" />
            <span>Home Slides</span>
            <span className="flex items-center justify-center w-[30px] h-[30px] ml-auto">
              <FaAngleDown />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <FaUsers className="text-[20px]" />
            <span>Users</span>
          </Button>
        </li>
        <li>
          <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <SiProducthunt className="text-[20px]" />
            <span>Products</span>
            <span className="flex items-center justify-center w-[30px] h-[30px] ml-auto">
              <FaAngleDown />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <TbCategory2 className="text-[20px]" />
            <span>Category</span>
            <span className="flex items-center justify-center w-[30px] h-[30px] ml-auto">
              <FaAngleDown />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <IoBagCheckOutline className="text-[20px]" />
            <span>Orders</span>
          </Button>
        </li>
        <li>
          <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <AiOutlineLogout className="text-[20px]" />
            <span>Logout</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
