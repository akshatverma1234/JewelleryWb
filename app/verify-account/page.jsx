"use client";
import OtpBox from "@/components/OtpBox/index";
import Button from "@mui/material/Button";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };
  const verifyOTP = (e) => {
    e.preventDefault();
    alert(otp);
  };
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
      <div className="container">
        <div className="OtpBox card w-[600px] h-[auto] pb-20 mx-auto pt-20 relative z-50">
          <div className="text-center">
            <img src="./verify.png" className="m-auto w-18" />
          </div>
          <h1 className="text-center text-[35px] font-[800] mt-4">
            Having trouble to sign in? <br />
            Reset your password
          </h1>

          <p className="!mt-0 !mb-4 text-center">
            OTP send to{" "}
            <span className="text-amber-600 font-bold ">akshat@gmail.com</span>
          </p>
          <form onSubmit={verifyOTP}>
            {" "}
            <OtpBox length={6} onChange={handleOtpChange} />
            <div className="flex items-center justify-around !mt-5 !px-3  ">
              <Button
                type="submit"
                className="!bg-blue-600 !text-white !w-[300px] !p-2"
              >
                Verify OTP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;
