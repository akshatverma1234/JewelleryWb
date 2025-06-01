import { Button } from "@mui/material";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const OpenCategory = () => {
    setOpenCategory(true);
  };
  return (
    <>
      <nav className="!py-2">
        <div className="container flex items-baseline justify-end gap-5">
          <div className="col_1 w-[20%]">
            <Button className="!text-black gap-2 w-full" onClick={OpenCategory}>
              <RiMenu2Fill size={19} />
              SHOP BY CATEGORIES
              <FaAngleDown
                size={15}
                className="!ml-auto font-bold text-[14px]"
              />
            </Button>
          </div>
          <div className="col_2 w-[80%]">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link href="/">
                  <Button className="link transition text-[14px] !font-[500] !text-black hover:!text-[#b76e79]">
                    HOME
                  </Button>
                </Link>
              </li>
              <li className="relative list-none">
                <Link
                  href="/"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition text-[14px] !font-[500] !text-black hover:!text-[#b76e79]">
                    MEN'S JEWELLERY
                  </Button>
                </Link>
                <div className="submenu absolute top-[100%] left-[0%] min-w-[180px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link href="/" className="w-full">
                        <Button className="!bg-[#F8F8F8] hover:!bg-[#E3D1F4] !text-[#333333] hover:!text-[#B76E79] w-full !text-left !justify-start !rounded-none">
                          Rings
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link href="/" className="w-full">
                        <Button className="!bg-[#F8F8F8] hover:!bg-[#E3D1F4] !text-[#333333] hover:!text-[#B76E79] w-full !text-left !justify-start !rounded-none">
                          Pendants
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link href="/" className="w-full">
                        <Button className="!bg-[#F8F8F8] hover:!bg-[#E3D1F4] !text-[#333333]   hover:!text-[#B76E79] w-full !text-left !justify-start !rounded-none">
                          Braclets
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link href="/" className="w-full">
                        <Button className="!bg-[#F8F8F8] hover:!bg-[#E3D1F4] !text-[#333333] hover:!text-[#B76E79] w-full !text-left !justify-start !rounded-none">
                          Chains
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link href="/" className="w-full">
                        <Button className="!bg-[#F8F8F8] hover:!bg-[#E3D1F4] !text-[#333333] hover:!text-[#B76E79] w-full !text-left !justify-start !rounded-none">
                          Earings
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  href="/"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition text-[14px] !font-[500] !text-black hover:!text-[#b76e79]">
                    WOMENS'S JEWELLERY
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition text-[14px] !font-[500] !text-black hover:!text-[#b76e79]">
                    KID'S JEWELLERY
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition text-[14px] !font-[500] !text-black hover:!text-[#b76e79]">
                    LATEST COLLECTION
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CategoryPanel
        openCategory={openCategory}
        setOpenCategory={setOpenCategory}
      />
    </>
  );
};

export default Navigation;
