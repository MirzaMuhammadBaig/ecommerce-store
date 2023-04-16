import Drowpdown from "./drowpdown";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-fill w-full h-full"
            src="../../assests/1.jpg"
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-full"
            src="../../assests/2.jpg"
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-full"
            src="../../assests/5.jpg"
            alt="image slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-full"
            src="../../assests/4.jpg"
            alt="image slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-full"
            src="../../assests/6.jpg"
            alt="image slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
