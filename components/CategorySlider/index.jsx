"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const CategoriesSlider = () => {
  return (
    <div className="categorySlider !pt-4 !py-8">
      <div className="container ">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href="/">
              <div className="item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://www.candere.com/media/jewellery/images/GR00103__1.jpeg"
                  className="w-[120px] h-[100px] object-cover rounded transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Rings</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://www.jewelove.in/cdn/shop/products/jewelove-designer-gold-diamond-pendant-for-women-jl-au-p2-28212072546456.jpg?v=1680656226"
                  className="w-[100px] h-[100px] object-cover rounded transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Pendants</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://d2ma7w4w9grdob.cloudfront.net/media/46631Round-Sun-Sterling-Silver-Earrings-Filigree-Starry-Pattern-Dangle-Earrings-NSJ-925-(1).JPG"
                  className="w-[100px] h-[100px] object-cover rounded transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Earings</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                <img
                  src="https://www.ubuy.com.my/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDFRaVZhTFZxSUwuX1NTNDAwXy5qcGc.jpg"
                  className="w-[100px] h-[100px] object-cover rounded transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Payal</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://silverjewl.in/wp-content/uploads/2024/06/925-Sterling-Pure-Silver-Figaro-chain-20-24-28-Inches-For-Men-Boys-1.jpg"
                  className="w-[100px] h-[100px] object-cover rounded transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Chains</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://www.truesilver.co.in/cdn/shop/files/BR0865S_1.jpg?v=1687497022"
                  className="w-[100px] h-[100px] object-cover rounded transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Bracelet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://foreversilver.in/wp-content/uploads/2022/11/Necklace-Set-1.jpg"
                  className="w-[100px] h-[100px] object-cover rounded transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Necklace</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoriesSlider;
