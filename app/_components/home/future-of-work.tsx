'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import Button from '@/app/_components/button'

interface FutureOfWorkProps {
    images: {
        alt: string
        src: string
    }[]
}

function FutureOfWork({ images }: FutureOfWorkProps) {
    const [first, second] = images

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 container mx-auto pt-12 md:pt-16 lg:pt-24 px-4">
            <div className="prose">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium">
                    Future of Work
                </h3>
                <span className="font-bold text-secondary text-sm md:text-base">
                    Future of Work Research Centre Leadership
                </span>
                <p className="text-sm md:text-base">
                    {' '}
                    I am a Co-Director of the{' '}
                    <b className="text-secondary">
                        <i>Future of Work</i>
                    </b>{' '}
                    Research at University of Bath, School of Management.
                </p>
                <ul className="list-disc list-inside text-secondary text-sm md:text-base [&>li::marker]:text-hover">
                    <li className="leading-loose">
                        We organise workshops on improving the quality of
                        research output at the School level (Sessions of Deep
                        Reading, Writing Retreats and Publishing in the USA
                        Journals) and developing sessions to the career
                        development of postgraduate students and early career
                        researchers (Sessions of Meet the Editors, Afternoon Tea
                        Talks).
                    </li>
                    <li className="leading-loose">
                        Furthermore, we carry out activities includingseries of
                        mini-conferences that key external stakeholders
                        (companies and practitioners). Please get in touch with
                        us if you are interested.
                    </li>
                    <li className="leading-loose">
                        Finally, our research centre regularly hosts Visiting
                        Researcher.
                    </li>
                </ul>
                <Button
                    href="https://www.bath.ac.uk/research-centres/future-of-work-fow-research-centre/"
                    target="_blank">
                    CLICK THE SEE OUR WEBSITE
                </Button>
            </div>

            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                {first && second && (
                    <>
                        <motion.div
                            className="absolute top-0 left-0 w-full md:w-[85%] lg:w-[80%] h-[200px] md:h-[300px] lg:h-[400px]"
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ margin: '-100px', once: true }}
                            whileInView={{ opacity: 1, x: 0 }}>
                            <Image
                                alt={first.alt}
                                className="object-cover rounded-lg"
                                fill
                                src={first.src}
                            />
                        </motion.div>

                        <motion.div
                            className="absolute bottom-0 right-0 w-full md:w-[85%] lg:w-[80%] h-[200px] md:h-[300px] lg:h-[400px]"
                            initial={{ opacity: 0, x: -100 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.8,
                                ease: 'easeOut',
                            }}
                            viewport={{ margin: '-100px', once: true }}
                            whileInView={{ opacity: 1, x: 0 }}>
                            <Image
                                alt={second.alt}
                                className="object-cover rounded-lg"
                                fill
                                src={second.src}
                            />
                        </motion.div>
                    </>
                )}
            </div>
        </div>
    )
}

export default FutureOfWork
