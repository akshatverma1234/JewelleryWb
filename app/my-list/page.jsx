import React from "react";
import Button from "@mui/material/Button";
import MyListItems from "@/components/CartItem/MyListItems";
import { IoBagHandle } from "react-icons/io5";
import AccountSidebar from "@/components/AccountSidebar";

const MyList = () => {
  return (
    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[70%]">
          <div className="rounded-md shadow-md bg-white !p-5">
            <div className="!py-2 !px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[20px]">My List</h2>
              <p className="!mt-0">
                There are <span className="font-bold text-amber-600">2</span>{" "}
                products in your my list
              </p>
            </div>

            <MyListItems />
            <MyListItems />
            <MyListItems />
            <MyListItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
