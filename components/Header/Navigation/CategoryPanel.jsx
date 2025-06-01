import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import "./style.css";

const CategoryPanel = (props) => {
  const [subMenuIdx, setSubMenuIdx] = useState(null);
  const openSubMenu = (idx) => {
    if (subMenuIdx === idx) {
      setSubMenuIdx(null);
    } else {
      setSubMenuIdx(idx);
    }
  };

  const toggleDrawer = (newOpen) => () => {
    props.setOpenCategory(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="!p-3 text-[17px] font-[500] flex items-center justify-between">
        Shop By Categories{" "}
        <AiOutlineClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none">
            <Link href="/">
              <Button className="w-full !text-left !justify-start !px-3 !text-[15px] !text-[rgba(0,0,0,0.8)]">
                All
              </Button>
            </Link>
          </li>
          <li className="list-none flex items-center relative">
            <Link href="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[15px] !text-[rgba(0,0,0,0.8)]">
                RINGS
              </Button>
            </Link>

            {subMenuIdx === 1 ? (
              <FaAngleDown
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(1)}
              />
            ) : (
              <FaAngleRight
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(1)}
              />
            )}

            {subMenuIdx === 1 && (
              <ul className="submenu absolute top-[100%] w-full !pl-3">
                <li className="list-none relative !mb-1">
                  <Link
                    href="/"
                    className="link w-full !text-left !justify-start !px-3 !text-[14px] transition"
                  >
                    All Rings
                  </Link>
                </li>
                <li className="list-none relative !mb-1">
                  <Link
                    href="/"
                    className="link w-full !text-left !justify-start !px-3 !text-[14px] transition"
                  >
                    Men's Rings
                  </Link>
                </li>
                <li className="list-none relative !mb-1">
                  <Link
                    href="/"
                    className="link w-full !text-left !justify-start !px-3 !text-[14px] transition"
                  >
                    Women's Rings
                  </Link>
                </li>
                <li className="list-none relative !mb-1">
                  <Link
                    href="/"
                    className="link w-full !text-left !justify-start !px-3 !text-[14px] transition"
                  >
                    Kid's Rings
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );
  return (
    <div>
      <Drawer open={props.openCategory} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
