import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import ProductItems from "../ProductItems/index";

const ProductsSlider = (props) => {
  return (
    <div className="productsSlider !py-3">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
