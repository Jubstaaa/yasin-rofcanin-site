'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

interface AnimatedTextProps {
    className?: string
    text: string
}

export default function AnimatedText({ className, text }: AnimatedTextProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-100px', once: true })

    const textLength = text.length

    const getLargestFontSize = () => {
        if (!className) return 100
        const xlMatch = /xl:text-\[(\d+)px\]/.exec(className)
        if (xlMatch) return parseInt(xlMatch[1] ?? '0')
        const lgMatch = /lg:text-\[(\d+)px\]/.exec(className)
        if (lgMatch) return parseInt(lgMatch[1] ?? '0')
        const mdMatch = /md:text-\[(\d+)px\]/.exec(className)
        if (mdMatch) return parseInt(mdMatch[1] ?? '0')
        const baseMatch = /text-\[(\d+)px\]/.exec(className)
        if (baseMatch) return parseInt(baseMatch[1] ?? '0')
        return 100
    }

    const largestFontSize = getLargestFontSize()

    const getScale = () => {
        if (largestFontSize >= 180) {
            return 'scale-[0.5] md:scale-[0.6] lg:scale-75 xl:scale-85'
        }

        if (largestFontSize >= 140) {
            if (textLength > 18)
                return 'scale-[0.45] md:scale-[0.55] lg:scale-70 xl:scale-80'
            if (textLength > 15)
                return 'scale-[0.5] md:scale-[0.6] lg:scale-75 xl:scale-85'
            return 'scale-[0.6] md:scale-70 lg:scale-80 xl:scale-90'
        }

        if (textLength > 18)
            return 'scale-[0.5] md:scale-[0.65] lg:scale-80 xl:scale-90'
        if (textLength > 15)
            return 'scale-[0.6] md:scale-75 lg:scale-85 xl:scale-95'
        if (textLength > 12)
            return 'scale-75 md:scale-85 lg:scale-90 xl:scale-95'
        return 'scale-90 md:scale-95 lg:scale-100'
    }

    return (
        <div
            className="w-full flex justify-center overflow-hidden px-2"
            ref={ref}>
            <div
                className={`${className} flex justify-center uppercase gap-1 md:gap-2 lg:gap-3 xl:gap-4 ${getScale()} origin-center transition-transform`}>
                {text.split('').map((char, index) => (
                    <motion.span
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: -100 }
                        }
                        className={`inline-block flex-shrink-0 ${char === ' ' ? 'w-2 md:w-3 lg:w-4' : ''}`}
                        initial={{ opacity: 0, y: -100 }}
                        key={index}
                        transition={{
                            delay: index * 0.12,
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}>
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </div>
        </div>
    )
}
