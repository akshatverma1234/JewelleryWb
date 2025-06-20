"use client";
import OtpBox from "@/components/OtpBox/index";
import Button from "@mui/material/Button";
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
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] !m-auto rounded-md bg-white !p-5 !px-10">
          <div className="text-center flex items-center justify-center">
            <img src="/verify.png" width="80" />
          </div>
          <h3 className="text-center text-[18px]  text-black !mt-4 !mb-1">
            Verify OTP
          </h3>
          <p className="!mt-0 !mb-4 text-center">
            OTP send to{" "}
            <span className="text-amber-600 font-bold ">akshat@gmail.com</span>
          </p>
          <form onSubmit={verifyOTP}>
            {" "}
            <OtpBox length={6} onChange={handleOtpChange} />
            <div className="flex items-center justify-around !mt-5 !px-3  ">
              <Button type="submit" className="w-full btn-org btn-lg">
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
