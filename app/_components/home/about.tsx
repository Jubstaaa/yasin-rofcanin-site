'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import AnimatedText from '@/app/_components/animated-text'

const PROFILE_IMAGE_URL =
    'https://yasinrofcanin.fra1.cdn.digitaloceanspaces.com/beta/c59b99fc-0a56-4ee2-8c59-272057a79f7e.webp'

function About({
    scholarStats,
}: {
    scholarStats: { citations: number; hIndex: number; i10Index: number }
}) {
    return (
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center pt-10 md:pt-16 lg:pt-20 px-4">
            <AnimatedText
                className="text-[60px] md:text-[100px] lg:text-[130px] xl:text-[150px] text-[#f1f1f1] font-extrabold text-center -mb-6 md:-mb-8 lg:-mb-10"
                text="Academic Profile"
            />

            <div className="relative z-10 w-full container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 justify-between items-center">
                <div className="relative flex justify-center lg:justify-start items-center w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px] h-[280px] md:h-[350px] lg:h-[400px] mx-auto lg:mx-0">
                    <motion.div
                        animate={{ opacity: 1, x: 50, y: 50 }}
                        className="absolute right-0 bottom-0 w-[150px] h-[220px] md:w-[200px] md:h-[300px] lg:w-[220px] lg:h-[320px] bg-neutral-100"
                        initial={{ opacity: 0, x: 50, y: -50 }}
                        style={{ zIndex: 1 }}
                        transition={{
                            delay: 0.7,
                            duration: 0.8,
                            stiffness: 60,
                            type: 'spring',
                        }}
                    />

                    <div className="relative z-10 w-full h-full">
                        <Image
                            alt="Yasin Rofcanin"
                            className="w-full h-full object-cover"
                            height={400}
                            priority
                            src={PROFILE_IMAGE_URL}
                            width={400}
                        />
                    </div>
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 lg:pl-8 text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        Scholar in{' '}
                        <span className="text-hover">
                            Organisational Psychology & HRM
                        </span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
                        He is passionate about how flexible work practices,
                        proactive employee behaviours, and work-family
                        enrichment shape well-being and effectiveness at work;
                        published in leading journals, and actively contributes
                        to the field as an editorial board member.
                    </p>
                    <div className="flex flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-24 mt-2 md:mt-3 lg:mt-4 justify-center lg:justify-start">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl lg:text-6xl font-light text-hover">
                                {scholarStats.citations}
                            </span>
                            <span className="text-gray-700 text-base md:text-lg lg:text-xl font-medium mt-1">
                                Citations
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl lg:text-6xl font-light text-hover">
                                {scholarStats.hIndex}
                            </span>
                            <span className="text-gray-700 text-base md:text-lg lg:text-xl font-medium mt-1">
                                h-Index
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl lg:text-6xl font-light text-hover">
                                {scholarStats.i10Index}
                            </span>
                            <span className="text-gray-700 text-base md:text-lg lg:text-xl font-medium mt-1">
                                i10-Index
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
