'use client'

import type React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface AccordionItemProps {
    children: React.ReactNode
    defaultOpen?: boolean
    title: React.ReactNode
}

interface AccordionProps {
    children: React.ReactNode
    className?: string
}

export function Accordion({ children, className = '' }: AccordionProps) {
    return <div className={`space-y-4 ${className}`}>{children}</div>
}

export function AccordionItem({
    children,
    defaultOpen = false,
    title,
}: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
                aria-expanded={isOpen}
                className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${
                    isOpen ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
                type="button">
                <div className="text-lg font-medium">{title}</div>
                {isOpen ? (
                    <ChevronUp aria-hidden className="w-6 h-6 text-gray-500" />
                ) : (
                    <ChevronDown
                        aria-hidden
                        className="w-6 h-6 text-gray-500"
                    />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        animate={{ height: 'auto', opacity: 1 }}
                        className="overflow-hidden"
                        exit={{ height: 0, opacity: 0 }}
                        initial={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}>
                        <div className="px-6 py-4 bg-gray-50">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
