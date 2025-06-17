"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegImages } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { SiProducthunt } from "react-icons/si";
import { TbCategory2 } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";

const SideBar = () => {
  const [subMenuIdx, setSubmenuIdx] = useState(null);
  const isOpenSubMenu = (idx) => {
    if (subMenuIdx === idx) {
      setSubmenuIdx(null);
    } else {
      setSubmenuIdx(idx);
    }
  };
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
          <Link href="/">
            <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
              <MdDashboard className="text-[20px]" />
              <span>Dashboard</span>
            </Button>
          </Link>
        </li>

        <li>
          <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <FaRegImages className="text-[20px]" />
            <span>Home Slides</span>
            <span
              className="flex items-center justify-center w-[30px] h-[30px] ml-auto"
              onClick={() => isOpenSubMenu(1)}
            >
              <FaAngleDown
                className={` transition-all ${
                  subMenuIdx === 1 ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>
          <Collapse isOpened={subMenuIdx === 1 ? true : false}>
            <ul className="w-full">
              <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                  <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                  Home Banner list
                </Button>
              </li>
              <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                  <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                  Add Home Banner Slide
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Link href="/users">
            <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
              <FaUsers className="text-[20px]" />
              <span>Users</span>
            </Button>
          </Link>
        </li>
        <li>
          <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <SiProducthunt className="text-[20px]" />
            <span>Products</span>
            <span
              className="flex items-center justify-center w-[30px] h-[30px] ml-auto"
              onClick={() => isOpenSubMenu(2)}
            >
              <FaAngleDown
                className={` transition-all ${
                  subMenuIdx === 2 ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>
          <Collapse isOpened={subMenuIdx === 2 ? true : false}>
            <ul className="w-full">
              <li className="w-full">
                <Link href="/products">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Product list
                  </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/product/upload">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Product Upload
                  </Button>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
            <TbCategory2 className="text-[20px]" />
            <span>Category</span>
            <span
              className="flex items-center justify-center w-[30px] h-[30px] ml-auto"
              onClick={() => isOpenSubMenu(3)}
            >
              <FaAngleDown
                className={` transition-all ${
                  subMenuIdx === 3 ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>
          <Collapse isOpened={subMenuIdx === 3 ? true : false}>
            <ul className="w-full">
              <li className="w-full">
                <Link href="/categories">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Category list
                  </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/category/add">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Add category
                  </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/category/subCat">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Sub Category List
                  </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/category/subCat/add">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Add sub category
                  </Button>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Link href="/orders">
            <Button className="w-full !text-[rgba(0,0,0,0.8)] !capitalize !justify-start flex gap-3 text-[14px] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
              <IoBagCheckOutline className="text-[20px]" />
              <span>Orders</span>
            </Button>
          </Link>
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
