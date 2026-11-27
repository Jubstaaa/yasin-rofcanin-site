'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { cn } from '@/lib/cn'

import { NAV_LINKS } from './nav-links'

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <header className={cn('relative')}>
            <div
                className={cn(
                    'flex items-center justify-center h-[70px] md:h-[80px] lg:h-[90px] relative shadow bg-white z-20 transition-all gap-2 px-4 md:px-6 lg:px-8',
                    { 'rounded-b-none': isOpen }
                )}>
                <div className="max-w-7xl w-full mx-auto flex flex-row flex-nowrap items-center justify-between">
                    <Link href="/">
                        <Image
                            alt="Yasin Rofcanin Site Logo"
                            className="w-auto h-8 md:h-10 lg:h-12"
                            height={500}
                            src="/images/logo.png"
                            width={500}
                        />
                    </Link>
                    <nav
                        aria-label="Main"
                        className="hidden lg:flex items-center justify-center flex-1 gap-3 text-primary font-medium">
                        {NAV_LINKS.map(menu => (
                            <Link
                                className="p-4 transition-all duration-300 hover:text-hover text-base whitespace-nowrap font-medium"
                                href={menu.href}
                                key={menu.href}
                                rel={
                                    menu.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                                target={menu.external ? '_blank' : undefined}>
                                {menu.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <button
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                    aria-label="Menu"
                    className="lg:hidden mr-2 cursor-pointer"
                    onClick={() => {
                        setIsOpen(state => !state)
                    }}
                    type="button">
                    <Menu aria-hidden className="w-7 h-7 md:w-8 md:h-8" />
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        animate={{ opacity: 1 }}
                        aria-label="Main"
                        className="absolute w-full top-full left-0 flex flex-col items-center p-0 border border-divider bg-white rounded-t-none backdrop-blur-[10px] z-20"
                        exit={{ opacity: 0 }}
                        id="mobile-menu"
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}>
                        {NAV_LINKS.map(menu => (
                            <Link
                                className="w-full text-center py-3 text-base md:text-lg font-medium transition-all duration-300 hover:text-[#475569] active:opacity-50"
                                href={menu.href}
                                key={menu.href}
                                onClick={() => {
                                    setIsOpen(false)
                                }}
                                rel={
                                    menu.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                                target={menu.external ? '_blank' : undefined}>
                                {menu.name}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
