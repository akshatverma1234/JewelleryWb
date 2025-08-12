"use client";
import Link from "next/link";
import Search from "@/components/Search/index";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";
import { useContext, useState } from "react";
import { MyContext } from "@/context/AppContext";
import { FaRegUser } from "react-icons/fa";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    vertical: "top",
    horizontal: "right",
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const context = useContext(MyContext);
  return (
    <header className="bg-white">
      <div className="topstrip py-2 border-t-[1px] border-gray-200 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between h-10">
            <div className="coll w-[50%]">
              <p className="text-[14px] font-[500]">
                Limited Time Offer! Up to 50% Off on Stunning Jewelry – Shop
                Now!
              </p>
            </div>
            <div className="flex items-center justify-end col2">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    href="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    HELP CENTER
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    href="/order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    ORDER TRACKING
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header py-2 border-gray-200 ">
        <div className="container flex items-center justify-between h-19">
          <div className="col1 w-[25%]">
            <Link href="/">
              <h1 className="text-[35px]">
                ​🇻​​🇪​​🇷​​🇲​​🇦​ ​🇯​​🇪​​🇼​​🇪​​🇱​​🇱​​🇪​​🇷​​🇸​
              </h1>
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[35%] flex items-center pl-7">
            <ul className="flex items-center gap-6 justify-end w-full">
              {context.isLogin === false ? (
                <li className="list-none ">
                  <Link
                    href="/login"
                    className="link transition text-[18px] font-[500]"
                  >
                    Login
                  </Link>{" "}
                  | &nbsp;
                  <Link
                    href="/register"
                    className="link transition text-[18px] font-[500]"
                  >
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    className="myAccoutWrap flex items-center gap-3 cursor-pointer !text-[#000]"
                    onClick={handleClick}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <div className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white flex items-center justify-center">
                      <FaRegUser className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    </div>
                    <div className="info flex flex-col">
                      <h4 className="text-[14px] !mb-0 capitalize text-left justify-start font-[500] text-[rgba(0,0,0,0.6)] leading-3">
                        Akshat Verma
                      </h4>
                      <span className="text-[13px] capitalize text-left justify-start font-[400] text-[rgba(0,0,0,0.6)]">
                        akshat@gmail.com
                      </span>
                    </div>
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
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
                    <Link href="/my-account" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <FaRegUser className="text-[18px]" />
                        <span className="text-[14px]">My account</span>
                      </MenuItem>
                    </Link>
                    <Link href="/my-orders" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <BsFillBagCheckFill className="text-[18px]" />
                        <span className="text-[14px]">Orders</span>
                      </MenuItem>
                    </Link>
                    <Link href="/my-list" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <FiHeart className="text-[18px]" />{" "}
                        <span className="text-[14px]">My List</span>
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={handleClose}
                      className="flex gap-2 !py-2"
                    >
                      <HiOutlineLogout className="text-[18px]" />
                      <span className="text-[14px]">Logout</span>
                    </MenuItem>
                  </Menu>
                </>
              )}

              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="cart" className="!p-0">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart size={30} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton
                    aria-label="cart"
                    className="!p-0"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoCartOutline size={34} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
