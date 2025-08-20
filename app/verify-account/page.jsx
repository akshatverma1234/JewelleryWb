"use client";
import OtpBox from "@/components/OtpBox/index";
import Button from "@mui/material/Button";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { MyContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { postData } from "@/utils/api";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
    setOtp(value);
  };
  const history = useRouter();
  const context = useContext(MyContext);

  const verifyOTP = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("userEmail");
    const actionType = localStorage.getItem("actionType");

    if (!email) {
      context.openAlertBox("error", "Email not found. Please try again.");
      return;
    }

    if (!otp || otp.trim() === "") {
      context.openAlertBox("error", "Please enter OTP");
      return;
    }

    try {
      const endpoint =
        actionType === "forgot-password"
          ? "/api/user/verify-forgot-password"
          : "/api/user/verifyEmail";

      const res = await postData(endpoint, { email, otp });

      if (res?.error === false) {
        context.openAlertBox("success", res?.message);
        localStorage.removeItem("actionType");

        const redirectPath =
          actionType === "forgot-password" ? "/change-password" : "/login";
        history.push(redirectPath);
      } else {
        context.openAlertBox("error", res?.message);
      }
    } catch (error) {
      console.error("Verification error:", error);
      context.openAlertBox("error", "Verification failed. Please try again.");
    }
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
            <span className="text-amber-600 font-bold ">
              {localStorage.getItem("userEmail")}
            </span>
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
