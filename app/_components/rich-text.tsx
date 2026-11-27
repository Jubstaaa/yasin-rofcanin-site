import type React from 'react'

export default function RichText({
    className,
    html,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & { html?: null | string }) {
    if (!html) return null

    return (
        <div
            className={`prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-hover prose-strong:text-gray-900 prose-blockquote:border-l-hover prose-blockquote:bg-gray-50 prose-blockquote:p-4 prose-blockquote:rounded-lg ${className || ''}`}
            dangerouslySetInnerHTML={{ __html: html }}
            {...props}
        />
    )
}
