"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AiTwotoneGift } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";

const DashBoardBoxes = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box p-5 rounded-md bg-white cursor-pointer hover:bg-[#fafafa] border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <AiTwotoneGift className="text-[40px] text-blue-500" />
              <h3>New Orders</h3>
              <b>1300</b>
            </div>
            <IoStatsChart className="text-[50px] text-blue-500" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5 bg-white rounded-md cursor-pointer hover:bg-[#fafafa] border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <FaChartPie className="text-[40px] text-green-600" />
              <h3>Sales</h3>
              <b>₹15,000</b>
            </div>
            <IoStatsChart className="text-[50px] text-green-600" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5 rounded-md bg-white cursor-pointer hover:bg-[#fafafa] border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <BsBank className="text-[40px] text-purple-500" />
              <h3>Revenue</h3>
              <b>₹20,000</b>
            </div>
            <IoStatsChart className="text-[50px] text-purple-500" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5 rounded-md bg-white cursor-pointer hover:bg-[#fafafa] border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <div className="info w-[70%] flex items-center gap-3">
              <RiProductHuntLine className="text-[40px] text-purple-500" />
              <h3>Total Products</h3>
              <b>1,300</b>
            </div>
            <IoStatsChart className="text-[50px] text-purple-500" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashBoardBoxes;
