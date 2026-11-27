import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import AnimatedText from '@/app/_components/animated-text'
import Button from '@/app/_components/button'
import { publications } from '@/lib/content'

function Publications() {
    const latest = publications.slice(0, 3)

    return (
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center pt-20 md:pt-28 lg:pt-40 px-4">
            <AnimatedText
                className="text-[50px] md:text-[70px] lg:text-[90px] xl:text-[100px] text-[#f1f1f1] font-extrabold text-center -mb-6 md:-mb-8 lg:-mb-10"
                text="Selected Publications"
            />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {latest.map(item => (
                    <Link
                        className="flex flex-col gap-4 md:gap-5 bg-[#f7f7f7] p-6 md:p-8 lg:p-10 group relative"
                        href={item.link}
                        key={item.id}
                        target="_blank">
                        <h3 className="text-xl md:text-2xl font-medium">
                            {item.publicationCategory.name}
                        </h3>
                        <p className="text-xs md:text-sm text-secondary">
                            {item.name}
                        </p>
                        <div className="flex gap-1 text-hover text-xs md:text-sm font-bold items-center -left-2 opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 relative">
                            READ MORE
                            <ArrowRight aria-hidden className="w-4 h-4" />
                        </div>
                        <hr className="absolute left-0 bottom-10 md:bottom-12 w-24 md:w-32 h-[1px] text-hover group-hover:w-0 transition-all duration-300" />
                    </Link>
                ))}
            </div>
            <Button href="/publications">SEE ALL</Button>
        </div>
    )
}

export default Publications
