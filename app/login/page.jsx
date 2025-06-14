"use client";
import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "@/context/AppContext";

const Login = () => {
  const context = useContext(MyContext);
  const [showPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const history = useRouter();
  const forgotPassword = () => {
    history.push("/verify");
    context.openAlertBox("success", "OTP Send");
  };

  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] !m-auto rounded-md bg-white !p-5 !px-10">
          <h3 className="text-center text-[18px] text-black">
            Login to your account
          </h3>
          <form className="!w-full !mt-5">
            <div className="form-group w-full !mb-5">
              <TextField
                type="email"
                id="email"
                label="Email Id *"
                variant="outlined"
                className="!w-full"
                name="email"
              />
            </div>
            <div className="form-group w-full !mb-5 relative">
              <TextField
                type={showPassword === false ? "password" : "text"}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="!w-full"
                name="password"
              />
              <Button
                type="submit"
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPassword(!showPassword)}
              >
                {showPassword === true ? (
                  <IoIosEye className="text-[20px] opacity-75" />
                ) : (
                  <IoIosEyeOff className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>
            <a
              className="link cursor-pointer text-[14px] font-[600]"
              onClick={forgotPassword}
            >
              Forgot Password?
            </a>
            <div className="flex items-center w-full !mt-3 !mb-3">
              <Button className="btn-org !w-full btn-lg">Login</Button>
            </div>
            <p className="text-center">
              Not Registered?{" "}
              <Link
                href="/register"
                className="link text-[14px] font-[600] text-amber-600"
              >
                Sign Up
              </Link>
            </p>
            <p className="text-center font-[500]">
              Or continue with social account
            </p>
            <Button className="flex gap-3 !w-full !bg-[#eaeaea] !text-black">
              <FcGoogle className="text-[20px]" /> Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
