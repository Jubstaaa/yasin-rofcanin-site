export interface NavLink {
    external?: boolean
    href: string
    name: string
}

export const NAV_LINKS: NavLink[] = [
    { href: '/', name: 'Homepage' },
    { href: '/about-me', name: 'About Me' },
    { href: '/keynote-talks', name: 'Keynote Talks' },
    {
        external: true,
        href: 'https://www.bath.ac.uk/research-centres/future-of-work-fow-research-centre/',
        name: 'Future of Work',
    },
    { href: '/publications', name: 'Publications' },
    { href: '/opinions', name: 'Opinions' },
    { href: '/contact', name: 'Contact' },
]
