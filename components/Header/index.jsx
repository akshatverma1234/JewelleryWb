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
import { useContext } from "react";
import { MyContext } from "@/context/AppContext";
import { FaRegUser } from "react-icons/fa";
import Button from "@mui/material/Button";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    vertical: "top",
    horizontal: "right",
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
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
                <div className="myAccoutWrap flex items-center gap-3">
                  <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white">
                    <FaRegUser className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                  </Button>

                  <div className="info flex flex-col">
                    <h4 className="text-[14px] !mb-0">Akshat</h4>
                    <span className="text-[13px]">akshat@gmail.com</span>
                  </div>
                </div>
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
