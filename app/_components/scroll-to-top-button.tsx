'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ behavior: 'smooth', top: 0 })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    animate={{ opacity: 1, y: 0 }}
                    aria-label="Scroll to top"
                    className="cursor-pointer fixed bottom-3 lg:bottom-6 right-3 lg:right-0 p-2 lg:p-3 bg-hover text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary z-50"
                    exit={{ opacity: 0, y: 50 }}
                    initial={{ opacity: 0, y: 50 }}
                    key="scroll-to-top"
                    onClick={scrollToTop}
                    transition={{ duration: 0.3 }}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{
                        scale: 0.9,
                        transition: { duration: 0.1 },
                    }}>
                    <ArrowUp aria-hidden className="w-4 lg:w-6 h-4 lg:h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
