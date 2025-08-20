"use client";
import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { HiMenuAlt2 } from "react-icons/hi";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FiBell } from "react-icons/fi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { FaRegUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { MyContext } from "@/context/AppContext";
import { fetchData } from "@/utils/api";
import Link from "next/link";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorMyAccount, setAnchorMyAccount] = useState(null);
  const open = Boolean(anchorMyAccount);
  const handleClick = (event) => {
    setAnchorMyAccount(event.currentTarget);
  };
  const handleCloseMyAccount = () => {
    setAnchorMyAccount(null);
  };

  const context = useContext(MyContext);
  const logout = () => {
    setAnchorMyAccount(null);
    fetchData(`/api/user/logout?token=${localStorage.getItem("accessToken")}`, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      if (res?.error === false) {
        context.setIsLogin(false);
        context.openAlertBox("success", res?.message);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    });
  };
  return (
    <header
      className={`w-full h-[auto] py-2 ${
        context.isOpenSideBar === true ? "pl-74" : "pl-5"
      } pr-7 bg-white shadow-md flex items-center justify-between transition-all`}
    >
      <div className="part1">
        <Button
          className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black"
          onClick={() => context.setOpenSideBar(!context.isOpenSideBar)}
        >
          <HiMenuAlt2 className="text-black text-[22px]" />
        </Button>
      </div>

      <div className="part2 w-[40%] flex items-center justify-end gap-5">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <FiBell />
          </StyledBadge>
        </IconButton>
        {context.isLogin === true ? (
          <div className="relative">
            <div
              className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
              onClick={handleClick}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_3IZ2cV1sHEIKmUSApjI9pyGnmX7B-C5eg&s"
                className="w-full h-full object-cover"
              />
            </div>
            <Menu
              anchorEl={anchorMyAccount}
              id="account-menu"
              open={open}
              onClose={handleCloseMyAccount}
              onClick={handleCloseMyAccount}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseMyAccount} className="!bg-white">
                <div className="flex items-center gap-3">
                  <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer mr-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_3IZ2cV1sHEIKmUSApjI9pyGnmX7B-C5eg&s"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="info">
                  <h3 className="text-[15px] font-[500] leading-5">
                    {context.userData?.name}
                  </h3>
                  <p className="text-[12px] font-[400] opacity-70">
                    {context.userData?.email}
                  </p>
                </div>
              </MenuItem>
              <Divider />
              <Link href="/profile">
                <MenuItem
                  onClick={handleCloseMyAccount}
                  className="flex items-center gap-3"
                >
                  <FaRegUser className="text-[16px]" />

                  <span className="text-[14px]">Profile</span>
                </MenuItem>
              </Link>
              <MenuItem onClick={logout} className="flex items-center gap-3">
                <IoIosLogOut className="text-[18px]" />
                <span className="text-[14px]">Sign Out</span>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link href="/login">
            <Button className="!bg-blue-500 !btn-sm !text-white !rounded-full">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
