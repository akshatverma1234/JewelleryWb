"use client";
import { Button } from "@mui/material";
import React from "react";
import { IoCloudUpload } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AccountSidebar = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
      <div className="w-full !p-5 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden !mb-4 relative group">
          <img
            src="https://pbs.twimg.com/profile_images/1293581660332720136/MSAyNtjw_400x400.jpg"
            className="w-full h-full object-cover"
            alt="profile_image"
          />
          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100 duration-300">
            <IoCloudUpload className="text-[22px] text-white" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <h3>Akshat Verma</h3>
        <h6 className="text-[13px] font-[500]">akshat@gmail.com</h6>
      </div>
      <ul className="list-none !pb-5 bg-[#f1f1f1] myAccountTab">
        <li className="w-full">
          <Link href="/my-account">
            <Button
              component="a"
              className={`SidebarBtn !text-black ${
                isActive("/my-account") ? "TabHighlight" : ""
              }`}
            >
              <FaRegUser
                className={`text-[18px] ${
                  isActive("/my-account")
                    ? "text-[#d32f2f]"
                    : "text-[rgba(0,0,0,0.6)]"
                }`}
              />
              My Profile
            </Button>
          </Link>
        </li>

        <li className="w-full">
          <Link href="/my-list">
            <Button
              component="a"
              className={`SidebarBtn !text-black ${
                isActive("/my-list") ? "TabHighlight" : ""
              }`}
            >
              <FiHeart
                className={`text-[18px] ${
                  isActive("/my-list")
                    ? "text-[#d32f2f]"
                    : "text-[rgba(0,0,0,0.6)]"
                }`}
              />
              My List
            </Button>
          </Link>
        </li>

        <li className="w-full">
          <Link href="/my-orders">
            <Button
              component="a"
              className={`SidebarBtn !text-black ${
                isActive("/my-orders") ? "TabHighlight" : ""
              }`}
            >
              <BsFillBagCheckFill
                className={`text-[18px] ${
                  isActive("/my-orders")
                    ? "text-[#d32f2f]"
                    : "text-[rgba(0,0,0,0.6)]"
                }`}
              />
              My Orders
            </Button>
          </Link>
        </li>
        <li className="w-full">
          <Link href="/my-logout">
            <Button
              component="a"
              className={`SidebarBtn !text-black ${
                isActive("/logout") ? "TabHighlight" : ""
              }`}
            >
              <HiOutlineLogout
                className={`text-[18px] ${
                  isActive("/my-logout")
                    ? "text-[#d32f2f]"
                    : "text-[rgba(0,0,0,0.6)]"
                }`}
              />
              Logout
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
