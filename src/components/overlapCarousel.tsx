"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const OverlapCarousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="gap-5 w-1/2 max-h-64"
    >
      <SwiperSlide className="border">Slide 1</SwiperSlide>
      <SwiperSlide className="border">Slide 2</SwiperSlide>
      <SwiperSlide className="border">Slide 3</SwiperSlide>
      <SwiperSlide className="border">Slide 4</SwiperSlide>
      <SwiperSlide className="border">Slide 5</SwiperSlide>
      <SwiperSlide className="border">Slide 6</SwiperSlide>
      <SwiperSlide className="border">Slide 7</SwiperSlide>
      <SwiperSlide className="border">Slide 8</SwiperSlide>
    </Swiper>
  );
};
