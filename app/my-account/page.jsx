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
import TextField from "@mui/material/TextField";
import AccountSidebar from "@/components/AccountSidebar";

const MyAccount = () => {
  return (
    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white !p-5 shadow-md rounded-md">
            <h2 className="!pb-3">My Profile</h2>
            <hr />
            <form className="!mt-5">
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <br />
              <div className="flex items-center gap-4">
                <Button className="btn-org btn-lg w-[100px]">Save</Button>
                <Button className="btn-org btn-lg w-[100px] btn-border">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
