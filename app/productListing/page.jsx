"use client";
import SideBar from "@/components/SideBar/index";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItems from "@/components/ProductItems/index";
import ProductItemListView from "@/components/ProductItemListView/index";
import { Button } from "@mui/material";
import { IoGrid } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";

const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="!py-5 !pb-0">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
            className="link"
          >
            {/* <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
            Home
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/rings"
            className="link"
          >
            {/* <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
            Rings
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white !p-2 !mt-4">
        <div className="container flex gap-3">
          <div className="sideBarWrapper w-[20%] h-full bg-white !p-3">
            <SideBar />
          </div>
          <div className="rightContent w-[80%] !py-3">
            <div className="bg-amber-50 !p-2 w-full !mb-4 !rounded-md flex items-center justify-between">
              <div className="col1 flex items-center ItemsView">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${
                    itemView === "list" ? "active" : ""
                  }`}
                  onClick={() => setItemView("list")}
                >
                  <HiOutlineMenu className="text-[18px]" />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${
                    itemView === "grid" ? "active" : ""
                  }`}
                  onClick={() => setItemView("grid")}
                >
                  <IoGrid className="text-[18px]" />
                </Button>
                <span className="text-[14px] font-[500] !pl-3 text-[rgba(0,0,0,0.6)]">
                  There are 27 products
                </span>
              </div>
              <div className="col2 flex items-center justify-end !ml-auto gap-3 !pr-4">
                <span className="text-[14px] font-[500] !pl-3 !text-[rgba(0,0,0,0.6)]">
                  Sort By
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-[12px] !text-black !font-[600] !capitalize !border border-[rgba(0,0,0,0.7)]"
                >
                  Sales, highest to lowest
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-black !capitalize"
                  >
                    Sales, highest to lowest
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-black !capitalize"
                  >
                    Relevance
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-black !capitalize"
                  >
                    Name, A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-black !capitalize"
                  >
                    Name, Z to A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-black !capitalize"
                  >
                    Price, low to high
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-black !capitalize"
                  >
                    Price, high to low
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div
              className={`grid ${
                itemView === "grid"
                  ? `grid-cols-4 md:grid-cols-4`
                  : `grid-cols-1 md:grid-cols-1`
              } gap-4`}
            >
              {itemView === "grid" ? (
                <>
                  <ProductItems />
                  <ProductItems />
                  <ProductItems />
                  <ProductItems />
                  <ProductItems />
                  <ProductItems />
                  <ProductItems />
                  <ProductItems />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>
            <div className="flex items-center justify-center !mt-10">
              <Pagination count={10} showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
