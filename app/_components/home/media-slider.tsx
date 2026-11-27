'use client'
import type React from 'react'
import type { Swiper as SwiperInstance } from 'swiper'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

function MediaSlider({ videos }: { videos: React.ReactNode[] }) {
    const swiperRef = useRef<null | SwiperInstance>(null)

    const inlineArrowBtnClass =
        'relative !static bg-primary rounded-full shadow p-1.5 hover:bg-hover transition-colors cursor-pointer flex items-center justify-center w-8 h-8 group'
    const inlineArrowIconClass = 'w-4 h-4 text-white group-hover:text-white'

    return (
        <div className="relative w-full">
            <Swiper
                autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                className="w-full"
                loop={videos.length > 1}
                modules={[Pagination, Autoplay]}
                onSwiper={swiper => {
                    swiperRef.current = swiper
                }}
                pagination={{
                    clickable: true,
                    el: '.media-slider-custom-pagination',
                    type: 'bullets',
                }}
                slidesPerView={1}
                spaceBetween={15}>
                {videos.map((item, index) => (
                    <SwiperSlide key={index}>{item}</SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-center items-center gap-2 md:gap-3 pt-4 md:pt-5">
                <button
                    aria-label="Previous Slide"
                    className={inlineArrowBtnClass}
                    onClick={() => swiperRef.current?.slidePrev()}
                    style={{ boxShadow: '0 2px 8px rgba(34, 81, 144, 0.13)' }}
                    tabIndex={0}
                    type="button">
                    <ChevronLeft aria-hidden className={inlineArrowIconClass} />
                </button>

                <div className="media-slider-custom-pagination !w-auto flex justify-center items-center" />

                <button
                    aria-label="Next Slide"
                    className={inlineArrowBtnClass}
                    onClick={() => swiperRef.current?.slideNext()}
                    style={{ boxShadow: '0 2px 8px rgba(34, 81, 144, 0.13)' }}
                    tabIndex={0}
                    type="button">
                    <ChevronRight
                        aria-hidden
                        className={inlineArrowIconClass}
                    />
                </button>
            </div>
        </div>
    )
}

export default MediaSlider
