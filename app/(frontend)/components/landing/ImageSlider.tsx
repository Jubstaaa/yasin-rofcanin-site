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
    <div className="w-full h-auto aspect-video relative">
      <video
        src="https://fppnyxariyb6rpz5.public.blob.vercel-storage.com/9a4cea9e-aa18-477b-b2a4-0200e7f6ea00.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      {user && (
        <motion.div
          className="flex flex-col items-start justify-center gap-4 absolute left-0 top-[40%] -translate-y-1/2 w-auto h-auto p-10 bg-white z-10 opacity-90 space-y-4"
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
        </motion.div>
      )}
    </div>
  );
}
