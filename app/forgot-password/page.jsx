"use client";
import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { MyContext } from "@/context/AppContext";
import { LuEyeClosed } from "react-icons/lu";

const ForgotPassword = () => {
  const context = useContext(MyContext);
  const [showPassword, setIsShowPassword] = useState(false);
  const [showPassword2, setIsShowPassword2] = useState(false);

  const history = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit new password
    console.log("Password reset submitted");
  };

  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] !m-auto rounded-md bg-white !p-5 !px-10">
          <h3 className="text-center text-[18px] text-black">
            Forgot Password
          </h3>
          <form className="!w-full !mt-5" onSubmit={handleSubmit}>
            <div className="form-group w-full !mb-5 relative">
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                label="New Password"
                variant="outlined"
                className="!w-full"
                name="password"
              />
              <Button
                type="button"
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoIosEye className="text-[20px] opacity-75" />
                ) : (
                  <LuEyeClosed className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="form-group w-full !mb-5 relative">
              <TextField
                type={showPassword2 ? "text" : "password"}
                id="confirm_password"
                label="Confirm Password"
                variant="outlined"
                className="!w-full"
                name="confirm_password"
              />
              <Button
                type="button"
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPassword2(!showPassword2)}
              >
                {showPassword2 ? (
                  <IoIosEye className="text-[20px] opacity-75" />
                ) : (
                  <LuEyeClosed className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full !mt-3 !mb-3">
              <Button type="submit" className="btn-org !w-full btn-lg">
                Reset Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
