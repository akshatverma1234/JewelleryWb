"use client";
import SideBar from "@/components/SideBar";
import { MyContext } from "@/context/AppContext";
import DashBoard from "@/Pages/DashBoard";
import { useContext } from "react";

export default function Home() {
  const context = useContext(MyContext);
  return (
    <>
      <section className="main">
        <div className="contentMain flex">
          <div
            className={`sidebarWrapper transition-all duration-400 ${
              context.isOpenSideBar
                ? "w-[18%] opacity-100 pointer-events-auto"
                : "w-0 opacity-0 pointer-events-none"
            }`}
          >
            <SideBar />
          </div>
          <div
            className={`contentRight py-4 px-5 transition-all duration-400 ${
              context.isOpenSideBar === false ? "w-[100%]" : "w-[82%]"
            } transition-all `}
          >
            <DashBoard />
          </div>
        </div>
      </section>
    </>
  );
}
