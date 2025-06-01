"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <>
      <div className="!py-5 w-full">
        <Swiper
          slidesPerView={props.items}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="smlBtn"
        >
          <SwiperSlide>
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1748717024_HPMC--1-.jpg?im=Resize=(632,804)"
              }
              link="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1748717024_HPMC--1-.jpg?im=Resize=(632,804)"
              }
              link="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1748717024_HPMC--1-.jpg?im=Resize=(632,804)"
              }
              link="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1748717024_HPMC--1-.jpg?im=Resize=(632,804)"
              }
              link="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1748717024_HPMC--1-.jpg?im=Resize=(632,804)"
              }
              link="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1748717024_HPMC--1-.jpg?im=Resize=(632,804)"
              }
              link="/"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AdsBannerSlider;
