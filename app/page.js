"use client";
import SideBar from "@/components/SideBar";
import { MyContext } from "@/context/AppContext";
import DashBoard from "@/Pages/DashBoard";
import { useContext } from "react";

export default function Home() {
  const context = useContext(MyContext);
  return (
    <>
      <DashBoard />
    </>
  );
}
