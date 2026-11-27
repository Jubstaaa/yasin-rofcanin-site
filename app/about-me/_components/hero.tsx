import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ContentIcon from '@/app/_components/content-icon'
import { futureOfWorkImages, profile, socials } from '@/lib/content'

function Hero() {
    const user = profile
    const [first, second] = futureOfWorkImages

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 p-4 md:p-8 lg:p-16 xl:p-32 pb-0 relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] order-2 lg:order-1">
                {first && second && (
                    <>
                        <div className="absolute top-0 left-0 w-full md:w-[85%] lg:w-[80%] h-[200px] md:h-[300px] lg:h-[400px]">
                            <Image
                                alt={first.media.alt}
                                className="object-cover rounded-lg"
                                fill
                                src={first.media.url}
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-full md:w-[85%] lg:w-[80%] h-[200px] md:h-[300px] lg:h-[400px]">
                            <Image
                                alt={second.media.alt}
                                className="object-cover rounded-lg"
                                fill
                                src={second.media.url}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className="prose prose-a:text-hover max-w-none order-1 lg:order-2">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                    <span className="block">{user.firstName}</span>
                    <span className="block text-hover">{user.lastName}</span>
                </h3>
                <p className="text-lg md:text-xl">
                    Chair in Organisational Psychology and Human Resource
                    Management
                </p>
                <p className="text-secondary text-sm md:text-base">
                    I am a Professor of Organisational Psychology and Human
                    Resource Management at the University of Bath, School of
                    Management. Born and educated in Istanbul (Bogazici
                    University), I completed my Ph.D. study at Warwick Business
                    School, University of Warwick. Over the last decade, I
                    explored how employees feel motivated and productive at
                    work. In particular, my research and teaching focus on how
                    employees obtain personalized human resource practices and
                    engage in proactive job crafting to enhance their
                    well-being. Placing employees in a position of self-starters
                    and change-initiator, my research explores how new ways of
                    working impact on employee engagement and productivity. My
                    ideas have reached a wide range of audience through my
                    peer-reviewed publications, book and articles targeted at
                    managers.
                </p>
                <h3 className="text-xl md:text-2xl">Contact Me</h3>
                <p className="font-semibold text-sm md:text-base break-all">
                    Email:{' '}
                    <Link href={`mailto:${user.email}`}>{user.email}</Link>
                </p>
                <div className="flex gap-2 md:gap-3">
                    {socials.map(social => (
                        <Link
                            className="!text-primary hover:!text-hover"
                            href={social.link}
                            key={social.id}
                            target="_blank">
                            <ContentIcon
                                className="w-6 h-6 md:w-7 md:h-7"
                                name={social.icon}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <Image
                alt="bg-media"
                className="hidden lg:block absolute top-0 left-0 w-1/6 h-full object-cover -z-1"
                height={1000}
                src="/images/bg-media.jpg"
                width={1000}
            />
        </div>
    )
}

export default Hero
