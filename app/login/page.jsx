import { Button } from "@mui/material";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <section className="bg-[#fff]">
      <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
        <Link href="/">
          <h1 className="text-[24px]">VERMA JEWELLERS</h1>
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
        className="w-full fixed top-0 left-0 opacity-75"
      />
    </section>
  );
};

export default Login;
