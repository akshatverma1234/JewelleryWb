"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HomeSlider = () => {
  return (
    <div className="homeSlider !pb-3 !pt-3 lg:!pb-5 lg:!pt-5 !relative !z-[99]">
      <div className="container !ml-[25px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="items rounded-[20px] overflow-hidden">
              <img
                src="https://www.palamsilk.com/cdn/shop/files/BANNER_B1_2000x.jpg?v=1662958749"
                className="w-full h-[450px] object-cover object-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items rounded-[20px] overflow-hidden">
              <img
                src="https://www.palamsilk.com/cdn/shop/files/BANNER_B1_2000x.jpg?v=1662958749"
                className="w-full h-[450px] object-cover object-center"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="items rounded-[20px] overflow-hidden">
              <img
                src="https://img.freepik.com/premium-photo/gold-bridal-jewellery-set_926199-2024171.jpg"
                className="w-full h-[450px] object-cover object-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items rounded-[20px] overflow-hidden">
              <img
                src="https://tring-coin.objectstore.e2enetworks.net/seo_popular_master/202505211848_uzqmQT2KSXd04zdQ.webp"
                className="w-full h-[450px] object-cover object-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="items rounded-[20px] overflow-hidden">
              <img
                src="https://couponswala.com/blog/wp-content/uploads/2022/03/Top-jewellery-brands.jpg.webp"
                className="w-full h-[450px] object-cover object-center"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
