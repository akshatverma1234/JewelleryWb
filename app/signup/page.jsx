"use client";
import { Button, FormControl } from "@mui/material";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import Link from "next/link";
import React, { useState } from "react";

const SignUp = () => {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFb, setLoadingFb] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  function handleClickGoogle() {
    setLoadingGoogle(true);
  }
  function handleClickFb() {
    setLoadingFb(true);
  }
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
            <CgLogIn className="text-[18px]" /> Login
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
          Join us today! Get special
          <br />
          benefits and stay up-to-date.
        </h1>
        <div className="flex items-center justify-center w-full mt-5 gap-4">
          <Button
            onClick={handleClickGoogle}
            endIcon={<FcGoogle />}
            loading={loadingGoogle}
            loadingPosition="end"
            variant="contained"
            className="!bg-none !py-2 !capitalize !text-[15px] !px-5 !text-[rgba(0,0,0,0.8)] !border !border-black"
          >
            Signin with Google
          </Button>
          <Button
            onClick={handleClickFb}
            endIcon={<SiFacebook className="text-blue-600" />}
            loading={loadingFb}
            loadingPosition="end"
            variant="contained"
            className="!bg-none !py-2 !capitalize !text-[15px] !px-5 !text-[rgba(0,0,0,0.8)] !border !border-black"
          >
            Signin with Facebook
          </Button>
        </div>
        <br />

        <div className="w-full flex items-center justify-center gap-3">
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
          <span className="text-[14px] font-[500]">
            Or, Sign in with your email
          </span>
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
        </div>

        <form className="w-full px-8 ">
          <div className="form-group mb-4 w-full flex items-center justify-center">
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              className="w-[100%] !mt-3"
            />
          </div>
          <div className="form-group mb-4 w-full flex items-center justify-center">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="w-[100%] !mt-3"
            />
          </div>
          <div className="form-group mb-4 w-full flex items-center justify-center">
            <div className="relative w-full">
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
          </div>
          <div className="form-group mb-4 w-full flex items-center justify-between">
            <FormControl control={<Checkbox />} label="Remember me" />
            <Link
              href="/forgot-password"
              className="text-blue-500 font-[700] text-[15px] hover:underline hover:text-gray-700"
            >
              Forgot Password?
            </Link>
          </div>
          <Button className="!bg-blue-600 !text-white w-full">Sign Up</Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
