"use client";
import { MyContext } from "@/context/AppContext";
import { uploadImage } from "@/utils/api";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { IoCloudUpload } from "react-icons/io5";
import { Button } from "@mui/material";
import { PhoneInput } from "react-international-phone";

const Profile = () => {
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [userId, setUserId] = useState("");
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [phone, setPhone] = useState("");
  const [changePassword, setChangePassword] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const context = useContext(MyContext);
  const history = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token === null) {
      history.push("/");
    }
  }, [context.isLogin]);

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      setUserId(context?.userData?._id);
      setFormFields({
        name: context?.userData?.name,
        email: context?.userData?.email,
        mobile: context?.userData?.mobile,
      });
      setChangePassword({
        email: context?.userData?.email,
      });
    }
  }, [context?.userData]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });

    setChangePassword(() => {
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
      setIsLoading(false);
      return false;
    }
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email id");
      setIsLoading(false);
      return false;
    }
    if (formFields.mobile === "") {
      context.openAlertBox("error", "Please enter phone number");
      setIsLoading(false);
      return false;
    }
    editData(`/api/user/${userId}`, formFields, { withCredentials: true }).then(
      (res) => {
        if (res?.error !== true) {
          setIsLoading(false);
          context.openAlertBox("success", res?.data?.message);
        } else {
          context.openAlertBox("error", res?.data?.message);
          setIsLoading(false);
        }
      }
    );
  };

  const handleChangePasswordSubmit = (e) => {
    e.preventDefault();
    setIsLoading2(true);

    if (changePassword.oldPassword === "") {
      context.openAlertBox("error", "Please enter old password");
      setIsLoading2(false);
      return false;
    }
    if (changePassword.newPassword === "") {
      context.openAlertBox("error", "Please enter new password");
      setIsLoading2(false);
      return false;
    }
    if (changePassword.confirmPassword === "") {
      context.openAlertBox("error", "Please enter confirm password");
      setIsLoading2(false);
      return false;
    }
    if (changePassword.confirmPassword !== changePassword.newPassword) {
      context.openAlertBox("error", "Password and confirm password not match");
      setIsLoading2(false);
      return false;
    }
    postData(`/api/user/reset-password`, changePassword, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        setIsLoading2(false);
        context.openAlertBox("success", res?.message);
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading2(false);
      }
    });
  };

  useEffect(() => {
    const userAvatar = [];
    if (
      context?.userData?.avatar !== "" &&
      context?.userData?.avatar !== undefined
    ) {
      userAvatar.push(context?.userData?.avatar);
      setPreviews(userAvatar);
    }
  }, [context?.userData]);

  let imgArr = [];
  let uniqueArr = [];
  let selectedImages = [];

  const onChangeFile = (e, apiEndPoint) => {
    try {
      setPreviews([]);
      const files = e.target.files;
      setUploading(true);

      const formdata = new FormData();

      for (let i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          const file = files[i];
          selectedImages.push(file);
          formdata.append("avatar", file);
        } else {
          context.openAlertBox(
            "error",
            "Please select a valid jpg, png or webp image file."
          );
          setUploading(false);
          return false;
        }
      }
      uploadImage("/api/user/user-avatar", formdata).then((res) => {
        setUploading(false);
        let avatar = [];
        avatar.push(res?.data?.avatar);
        setPreviews(avatar);
      });
    } catch (error) {
      console.log(error);
      context.openAlertBox("error", "Upload failed.");
      setUploading(false);
    }
  };
  return (
    <>
      <div className="card !my-4 !pt-5  w-[65%] shadow-md sm:rounded-lg bg-white !px-5 !pb-5">
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] font-[800]">Users Profile</h2>
          <Button
            className="!ml-auto"
            onClick={() => setIsChangePassword(!isChangePassword)}
          >
            Change Password
          </Button>
        </div>

        <br />
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden !mb-4 relative group flex items-center justify-center bg-gray-200 border-2 border-amber-300">
          {uploading === true ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              {previews?.length !== 0 ? (
                previews?.map((img, index) => {
                  return (
                    <img
                      src={img}
                      key={index}
                      className="w-full h-full object-cover"
                    />
                  );
                })
              ) : (
                <img
                  src="/user_def.png"
                  className="w-full h-full object-cover"
                />
              )}
            </>
          )}

          <div className="overlay !w-[100%] !h-[100%] absolute !top-0 !left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100 duration-300">
            <IoCloudUpload className="text-[22px] text-white" />
            <input
              type="file"
              className="absolute !top-0 !left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => onChangeFile(e, "/api/user/user-avatar")}
              accept="image/*"
              name="avatar"
            />
          </div>
        </div>
        <form className="form !mt-5" onSubmit={handleSubmit}>
          <div className="flex items-center gap-5">
            <div className="w-[50%]">
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                name="name"
                value={formFields.name}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
            <div className="w-[50%]">
              <input
                type="email"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                name="email"
                value={formFields.email}
                disabled={true}
                onChange={onChangeInput}
              />
            </div>
            <div className="w-[50%]">
              <PhoneInput
                defaultCountry="in"
                value={phone}
                disabled={isLoading === true ? true : false}
                onChange={(phone) => {
                  setPhone(phone);
                  setFormFields({
                    mobile: phone,
                  });
                }}
              />
            </div>
          </div>
          <br />
          <div className="flex items-center gap-4">
            <Button
              type="submit"
              className="btn-org btn-lg w-[190px]"
              disabled={!validate}
            >
              {isLoading === true ? (
                <CircularProgress color="inherit" />
              ) : (
                "Update Profile"
              )}
            </Button>
          </div>
        </form>
        <br />
      </div>
    </>
  );
};

export default Profile;
