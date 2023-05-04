import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import "swiper/css";
import 'swiper/css/pagination';
import { ImageSlideSwiper } from "../../data/SlideSwiper";

const SlideSwiper = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {ImageSlideSwiper.map((slide) => {
        return (
          <SwiperSlide key={`slideSwiper${slide.id}`}>
            <img src={slide.urlImage} alt={slide.name} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SlideSwiper;
