"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

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
      className="w-full h-[calc(100dvh-90px)] relative"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {images.map((image, i) => (
        <SwiperSlide key={i} className="aspect-square">
          <video
            src="https://fppnyxariyb6rpz5.public.blob.vercel-storage.com/9a4cea9e-aa18-477b-b2a4-0200e7f6ea00.webm"
            autoPlay
            loop
            muted
            playsInline
            className="ml-auto w-auto h-full object-cover aspect-video"
          />
        </SwiperSlide>
      ))}
      {user && (
        <motion.div
          className="flex flex-col items-start justify-center gap-4 absolute left-0 top-[40%] -translate-y-1/2 w-1/6 h-3/5 bg-white z-10 after:content-[''] after:absolute after:left-full after:top-0 after:w-xl after:h-full after:bg-white after:opacity-90 space-y-4 pl-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h1
            className="text-8xl pl-10 w-[calc(100%+40rem)] z-10 font-rancho"
            initial={{ opacity: 0, y: -40, x: -40 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {user.firstName} {user.lastName}
          </motion.h1>
          <motion.hr
            className="w-44 text-hover"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {user.titles && (
            <motion.div
              className="pl-10 w-[calc(100%+40rem)] relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {user.titles.map((title, i) => (
                <motion.p
                  className="text-base text-secondary leading-relaxed"
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {title}
                </motion.p>
              ))}
            </motion.div>
          )}
          <div className="absolute bottom-0 left-0 flex gap-2 pl-20 ">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`cursor-pointer w-3 h-3 rounded-full border-2 ${activeIndex === idx ? "bg-black border-black" : "bg-white border-gray-400"}`}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </Swiper>
  );
}
