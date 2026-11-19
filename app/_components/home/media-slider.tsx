"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function MediaSlider({ videos }: { videos: React.ReactNode[] }) {
  const swiperRef = useRef<import("swiper").Swiper | null>(null);

  const inlineArrowBtnClass =
    "relative !static bg-primary rounded-full shadow p-1.5 hover:bg-hover transition-colors cursor-pointer flex items-center justify-center w-8 h-8 group";
  const inlineArrowIconClass = "w-4 h-4 text-white group-hover:text-white";

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={15}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={videos.length > 1}
        className="w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{
          clickable: true,
          el: ".media-slider-custom-pagination",
          type: "bullets",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {videos.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation and Pagination Controls */}
      <div className="flex justify-center items-center gap-2 md:gap-3 pt-4 md:pt-5">
        <button
          type="button"
          className={inlineArrowBtnClass}
          aria-label="Previous Slide"
          onClick={() => swiperRef.current?.slidePrev()}
          tabIndex={0}
          style={{ boxShadow: "0 2px 8px rgba(34, 81, 144, 0.13)" }}
        >
          <ChevronLeft
            className={inlineArrowIconClass}
          aria-hidden />
        </button>

        {/* Pagination Dots Container */}
        <div className="media-slider-custom-pagination !w-auto flex justify-center items-center" />

        <button
          type="button"
          className={inlineArrowBtnClass}
          aria-label="Next Slide"
          onClick={() => swiperRef.current?.slideNext()}
          tabIndex={0}
          style={{ boxShadow: "0 2px 8px rgba(34, 81, 144, 0.13)" }}
        >
          <ChevronRight
            className={inlineArrowIconClass}
          aria-hidden />
        </button>
      </div>
    </div>
  );
}

export default MediaSlider;
