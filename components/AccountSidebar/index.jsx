"use client";
import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { IoCloudUpload } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MyContext } from "@/context/AppContext";
import CircularProgress from "@mui/material/CircularProgress";
import { uploadImage } from "@/utils/api";

const AccountSidebar = () => {
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);

  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const context = useContext(MyContext);

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
    }
  };
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
      <div className="w-full !p-5 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden !mb-4 relative group flex items-center justify-center bg-gray-200">
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

          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100 duration-300">
            <IoCloudUpload className="text-[22px] text-white" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => onChangeFile(e, "/api/user/user-avatar")}
              accept="image/*"
              name="avatar"
            />
          </div>
        </div>
        <h3>{context?.userData?.name}</h3>
        <h6 className="text-[13px] font-[500]">{context?.userData?.email}</h6>
      </div>
      <ul className="list-none !pb-5 bg-[#f1f1f1] myAccountTab">
        <li className="w-full">
          <Link href="/my-account">
            <Button
              component="a"
              className={`SidebarBtn !text-black ${
                isActive("/my-account") ? "TabHighlight" : ""
              }`}
            >
              <FaRegUser
                className={`text-[18px] ${
                  isActive("/my-account")
                    ? "text-[#d32f2f]"
                    : "text-[rgba(0,0,0,0.6)]"
                }`}
              />
              My Profile
            </Button>
          </Link>
        </li>

        <li className="w-full">
          <Link href="/my-list">
            <Button
              component="a"
              className={`SidebarBtn !text-black ${
                isActive("/my-list") ? "TabHighlight" : ""
              }`}
            >
              <FiHeart
                className={`text-[18px] ${
                  isActive("/my-list")
                    ? "text-[#d32f2f]"
                    : "text-[rgba(0,0,0,0.6)]"
                }`}
              />
              My List
            </Button>
          </Link>
        </li>

        <li className="w-full">
          <Link href="/my-orders">
            <Button
              component="a"
              className={`SidebarBtn !text-black ${
                isActive("/my-orders") ? "TabHighlight" : ""
              }`}
            >
              <BsFillBagCheckFill
                className={`text-[18px] ${
                  isActive("/my-orders")
                    ? "text-[#d32f2f]"
                    : "text-[rgba(0,0,0,0.6)]"
                }`}
              />
              My Orders
            </Button>
          </Link>
        </li>
        <li className="w-full">
          <Link href="/my-logout">
            <Button
              component="a"
              className={`SidebarBtn !text-black ${
                isActive("/logout") ? "TabHighlight" : ""
              }`}
            >
              <HiOutlineLogout
                className={`text-[18px] ${
                  isActive("/my-logout")
                    ? "text-[#d32f2f]"
                    : "text-[rgba(0,0,0,0.6)]"
                }`}
              />
              Logout
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
