"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
  user?: {
    firstName?: string;
    lastName?: string;
    titles?: string[];
  };
}

export default function ImageSlider({ images, user }: ImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-[840px] relative"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <Image
            width={1920}
            height={1080}
            src={image.src}
            alt={image.alt}
            className="ml-auto w-3/5 h-full object-cover"
          />
        </SwiperSlide>
      ))}
      {user && (
        <div className="flex flex-col items-start justify-center gap-4 absolute left-0 top-1/2 -translate-y-1/2 w-2/5 h-4/5 bg-white z-10 after:content-[''] after:absolute after:left-full after:top-0 after:w-20 after:h-full after:bg-white after:opacity-70">
          <h1 className="text-6xl pl-20">
            {user.firstName}
            <br />
            {user.lastName}
          </h1>
          <hr className="w-32 ml-10 text-hover" />
          {user.titles && (
            <div className="pl-20">
              {user.titles.map((title, i) => (
                <p className="text-lg text-secondary leading-relaxed" key={i}>
                  {title}
                </p>
              ))}
            </div>
          )}
          <div className="absolute bottom-8 left-0 flex gap-2 pl-20 ">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`cursor-pointer w-3 h-3 rounded-full border-2 ${activeIndex === idx ? "bg-black border-black" : "bg-white border-gray-400"}`}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </Swiper>
  );
}
