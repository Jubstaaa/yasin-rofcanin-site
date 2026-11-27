import type React from 'react'

interface PageHeroProps {
    children?: React.ReactNode
    description?: string
    imageUrl?: string
    title: string
}

const PageHero: React.FC<PageHeroProps> = ({
    children,
    description,
    imageUrl = '/images/single_page_title.jpg',
    title,
}) => (
    <div className="w-full min-h-[350px] md:min-h-[400px] relative flex items-center justify-center overflow-hidden">
        <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url('${imageUrl}')`,
                zIndex: 0,
            }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
                {title}
            </h1>
            {description && (
                <p className="text-white text-lg md:text-xl drop-shadow">
                    {description}
                </p>
            )}
            {children}
        </div>
    </div>
)

export default PageHero
