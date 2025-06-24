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

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
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
      <div className="loginBox card w-[600px] h-[auto] pb-20 mx-auto pt-20 relative z-50">
        <div className="text-center">
          <img src="./icon.png" className="m-auto w-18" />
        </div>
        <h1 className="text-center text-[35px] font-[800] mt-4">
          Welcome Back! <br />
          You can change your password from here
        </h1>

        <br />

        <form className="w-full px-8 ">
          <div className="form-group mb-4 w-full flex items-center justify-center">
            <div className="relative w-full">
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  New Password
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
          <div className="form-group mb-4 w-full flex items-center justify-center">
            <div className="relative w-full">
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword2 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword2
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword2 ? <FaRegEye /> : <FaRegEyeSlash />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
          </div>

          <Button className="!bg-blue-600 !text-white w-full !p-2">
            Change Password
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
