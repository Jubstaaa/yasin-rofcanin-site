"use client";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function MediaSlider({ videos }: { videos: React.ReactNode[] }) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={2}
      spaceBetween={30}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={videos.length > 2}
      className="w-full"
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      {videos.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MediaSlider;
