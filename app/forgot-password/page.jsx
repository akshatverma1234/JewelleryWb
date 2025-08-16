"use client";
import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { MyContext } from "@/context/AppContext";
import { LuEyeClosed } from "react-icons/lu";
import { postData } from "@/utils/api";
import CircularProgress from "@mui/material/CircularProgress";

const ForgotPassword = () => {
  const context = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setIsShowPassword] = useState(false);
  const [showPassword2, setIsShowPassword2] = useState(false);
  const [formFields, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

  const history = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.newPassword === "") {
      context.openAlertBox("error", "Please enter new password");
      setIsLoading(false);
      return false;
    }
    if (formFields.confirmPassword === "") {
      context.openAlertBox("error", "Please enter confirm password");
      setIsLoading(false);
      return false;
    }
    if (formFields.confirmPassword !== formFields.newPassword) {
      context.openAlertBox("error", "Password and confirm password not match");
      setIsLoading(false);
      return false;
    }

    postData("/api/user/reset-password", formFields).then((res) => {
      if (res?.error === false) {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("actionType");
        context.openAlertBox("success", res?.message);
        setIsLoading(false);
        history.push("/login");
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
  };

  const validate = Object.values(formFields).every((el) => el);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
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
                disabled={isLoading === true ? true : false}
                name="newPassword"
                value={formFields.newPassword}
                onChange={onChangeInput}
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
                disabled={isLoading === true ? true : false}
                name="confirmPassword"
                value={formFields.confirmPassword}
                onChange={onChangeInput}
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
              <Button
                type="submit"
                disabled={!validate}
                className="btn-org !w-full btn-lg flex gap-3"
              >
                {isLoading === true ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Change Password"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
