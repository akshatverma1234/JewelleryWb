"use client";
import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Button from "@mui/material/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { postData } from "@/utils/api";
import { MyContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const history = useRouter();
  const context = useContext(MyContext);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const validate = Object.values(formFields).every((el) => el);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter full name");
      return false;
    }
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email");
      return false;
    }
    if (formFields.password === "") {
      context.openAlertBox("error", "Please enter password");
      return false;
    }
    postData("/api/user/register", formFields).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        setIsLoading(false);
        context.openAlertBox("success", res?.message);
        localStorage.setItem("userEmail", formFields.email);
        setFormFields({
          name: "",
          email: "",
          password: "",
        });
        history.push("/verify");
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading(false);
      }
    });
  };
  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] !m-auto rounded-md bg-white !p-5 !px-10">
          <h3 className="text-center text-[18px] text-black">
            Register with a new account
          </h3>
          <form className="!w-full !mt-5" onSubmit={handleSubmit}>
            <div className="form-group w-full !mb-5">
              <TextField
                type="text"
                id="name"
                name="name"
                label="Full Name"
                variant="outlined"
                className="!w-full"
                disabled={isLoading === true ? true : false}
                value={formFields.name}
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full !mb-5">
              <TextField
                type="email"
                id="email"
                name="email"
                label="Email Id"
                variant="outlined"
                className="!w-full"
                disabled={isLoading === true ? true : false}
                value={formFields.email}
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full !mb-5 relative">
              <TextField
                type={showPassword === false ? "password" : "text"}
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                className="!w-full"
                disabled={isLoading === true ? true : false}
                value={formFields.password}
                onChange={onChangeInput}
              />
              <Button
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

            <div className="flex items-center w-full !mt-3 !mb-3">
              <Button
                type="submit"
                disabled={!validate}
                className="btn-org !w-full btn-lg flex gap-3"
              >
                {isLoading === true ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Register"
                )}
              </Button>
            </div>
            <p className="text-center">
              Already have an account?{" "}
              <Link
                href="/signup"
                className="link text-[14px] font-[600] text-amber-600"
              >
                Login
              </Link>
            </p>
            <p className="text-center font-[500]">
              Or continue with social account
            </p>
            <Button className="flex gap-3 !w-full !bg-[#eaeaea] !text-black">
              <FcGoogle className="text-[20px]" /> Signup with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
