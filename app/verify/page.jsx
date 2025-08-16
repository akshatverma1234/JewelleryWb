"use client";
import OtpBox from "@/components/OtpBox/index";
import { postData } from "@/utils/api";
import Button from "@mui/material/Button";
import React, { act, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { MyContext } from "@/context/AppContext";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const history = useRouter();
  const context = useContext(MyContext);
  const handleOtpChange = (value) => {
    setOtp(value);
  };

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
          actionType === "forgot-password" ? "/forgot-password" : "/login";
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
            <span className="text-amber-600 font-bold ">
              {localStorage.getItem("userEmail")}
            </span>
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
