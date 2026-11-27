'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import Button from './button'

interface InviteProps {
    href: string
    images: {
        alt: string
        src: string
    }[]
}

function Invite({ href, images }: InviteProps) {
    const [first, second] = images

    return (
        <div className="bg-gray-50 pb-12 md:pb-16 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 container mx-auto pt-12 md:pt-16 lg:pt-24 mt-12 md:mt-16 lg:mt-24 items-center px-4">
                <div className="prose">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium">
                        Let&apos;s Exchange Ideas
                    </h3>

                    <p className="text-sm md:text-base">
                        One of the world&apos;s most prolific and influential
                        psychologists. He has published well over 500 scientific
                        articles and more than 30 books.
                    </p>

                    <Button href={href}>FIND OUT MORE</Button>
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
        </div>
    )
}

export default Invite
