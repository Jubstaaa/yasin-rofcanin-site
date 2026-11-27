'use client'
import type React from 'react'

import Link from 'next/link'

import { cn } from '@/lib/cn'

interface ButtonProps {
    children?: React.ReactNode
    classNames?: {
        body?: string
    }
    disabled?: boolean
    fullWidth?: boolean
    href?: string
    icon?: React.ReactNode
    onClick?: (e: React.SyntheticEvent) => void
    size?: 'lg' | 'md' | 'sm' | 'xs'
    target?: '_blank' | '_parent' | '_self' | '_top' | 'none'
    type?: 'button' | 'reset' | 'submit' | undefined
}

function Button({
    children,
    classNames = {},
    disabled = false,
    fullWidth = false,
    href,
    icon,
    onClick,
    size = 'md',
    target,
    type = 'button',
}: ButtonProps) {
    const className = cn(
        'flex flex-row flex-nowrap items-center justify-center w-min gap-2.5 relative overflow-visible shadow-none whitespace-nowrap font-medium tracking-normal transition-all duration-500 duration-200 border border-black font-bold',
        classNames.body,
        {
            'cursor-pointer transition-all duration-500 hover:bg-black hover:text-white transition-all duration-500 ':
                !disabled,
            'px-1.5 lg:px-2 h-6 lg:h-9': size === 'sm',
            'px-2 h-8 text-xs transition-all duration-500 hover:shadow-[0px_0px_0px_3px]':
                size === 'xs' && !disabled,
            'px-10 h-[57px] text-sm': size === 'md',
            'w-full': fullWidth,
        }
    )

    const content = (
        <>
            {children}
            {icon}
        </>
    )

    const handleClick = (e: React.MouseEvent) => {
        if (disabled) {
            e.preventDefault()
            return
        }
        onClick?.(e)
    }

    if (href) {
        return (
            <Link
                className={className}
                href={href}
                onClick={handleClick}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                target={target}>
                {content}
            </Link>
        )
    }

    return (
        <button
            className={className}
            disabled={disabled}
            onClick={handleClick}
            type={type}>
            {content}
        </button>
    )
}

export default Button
