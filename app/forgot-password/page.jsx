"use client";
import { Button, FormControl } from "@mui/material";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import React, { useState } from "react";

const ForgotPassword = () => {
  return (
    <section className="bg-[#fff] w-full">
      <header className="w-full px-4 py-3 flex items-center justify-between z-50">
        <Link href="/">
          <div className="flex items-center gap-2">
            <img src="./icon.png" className="w-7" />
            <h1 className="text-[24px]">VERMA JEWELLERS</h1>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
            <CgLogIn className="text-[18px]" />
            Login
          </Button>
          <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
            <FaRegUser className="text-[18px]" />
            Sign Up
          </Button>
        </div>
      </header>
      <img
        src="https://images.pexels.com/photos/950241/pexels-photo-950241.jpeg"
        className="absolute w-full opacity-75"
      />
      <div className="loginBox card w-[600px] h-[auto] pb-20 mx-auto pt-20 relative z-50">
        <div className="text-center">
          <img src="./icon.png" className="m-auto w-18" />
        </div>
        <h1 className="text-center text-[35px] font-[800] mt-4">
          Having trouble to sign in? <br />
          Reset your password
        </h1>

        <br />

        <form className="w-full px-8 ">
          <div className="form-group mb-4 w-full flex items-center justify-center">
            <TextField
              id="outlined-basic"
              label="Enter your email"
              variant="outlined"
              className="w-[100%] !mt-3"
            />
          </div>

          <Button className="!bg-blue-600 !text-white !w-full !p-2">
            Reset Password
          </Button>
          <br />
          <br />
          <div className="text-center flex items-center justify-center gap-4">
            <span>Don't want to reset? </span>
            <Link
              href="/forgot-password"
              className="!text-blue-500 font-[700] text-[15px] hover:underline
              hover: text-gray-700"
            >
              Sign In?
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
