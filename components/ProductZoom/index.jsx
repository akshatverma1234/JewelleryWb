"use client";
import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (idx) => {
    setSlideIndex(idx);
    zoomSliderSml.current.swiper.slideTo(idx);
    zoomSliderBig.current.swiper.slideTo(idx);
  };
  return (
    <>
      <div className="flex !gap-4 w-full">
        <div className="slider  w-[15%] overflow-hidden">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSlider h-[490px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item  cursor-pointer rounded-md overflow-hidden group ${
                  slideIndex === 0 ? `opacity-100` : `opacity-30`
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://www.candere.com/media/jewellery/images/GR00103__1.jpeg"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item  cursor-pointer rounded-md overflow-hidden group ${
                  slideIndex === 1 ? `opacity-100` : `opacity-30`
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://img.freepik.com/free-photo/flamenco-dancer-model-blue-outfit-dance-updo-romantic-posing_114579-8610.jpg?ga=GA1.1.457199218.1719842889&semt=ais_items_boosted&w=740"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item  cursor-pointer rounded-md overflow-hidden group ${
                  slideIndex === 2 ? `opacity-100` : `opacity-30`
                }`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://img.freepik.com/free-photo/women-wearing-thai-clothes-hands-touching-their-faces_1150-15627.jpg?ga=GA1.1.457199218.1719842889&semt=ais_items_boosted&w=740"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item  cursor-pointer rounded-md overflow-hidden group ${
                  slideIndex === 3 ? `opacity` : `opacity-30`
                }`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://img.freepik.com/premium-photo/necklace-with-gold-chain-necklace_788415-7692.jpg?ga=GA1.1.457199218.1719842889&semt=ais_items_boosted&w=740"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
        <div className="zoomContainer !w-[85%] h-[500px] overflow-hidden">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
            onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          >
            <SwiperSlide className="rounded-md">
              <InnerImageZoom
                src={
                  "https://www.candere.com/media/jewellery/images/GR00103__1.jpeg"
                }
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>

            <SwiperSlide>
              <SwiperSlide>
                <InnerImageZoom
                  src={
                    "https://img.freepik.com/free-photo/flamenco-dancer-model-blue-outfit-dance-updo-romantic-posing_114579-8610.jpg?ga=GA1.1.457199218.1719842889&semt=ais_items_boosted&w=740"
                  }
                  zoomType="hover"
                  zoomScale={1}
                />
              </SwiperSlide>
              <InnerImageZoom
                src={
                  "https://img.freepik.com/premium-photo/necklace-with-gold-chain-necklace_788415-7692.jpg?ga=GA1.1.457199218.1719842889&semt=ais_items_boosted&w=740"
                }
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://img.freepik.com/free-photo/women-wearing-thai-clothes-hands-touching-their-faces_1150-15627.jpg?ga=GA1.1.457199218.1719842889&semt=ais_items_boosted&w=740"
                }
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://img.freepik.com/premium-photo/necklace-with-gold-chain-necklace_788415-7692.jpg?ga=GA1.1.457199218.1719842889&semt=ais_items_boosted&w=740"
                }
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
